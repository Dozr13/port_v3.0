import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { MID_GROUND_COLOR } from "../../../constants/color-palette";
import { handleIntent } from "../../helpers/chat-bot.helper";
import { Message } from "../../types/chat-bot.types";

interface ChatbotProps {
  sx?: React.CSSProperties;
}

const Chatbot = ({ sx }: ChatbotProps) => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [unknownCount, setUnknownCount] = useState<number>(0);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getWitAiResponse = async (text: string) => {
    const response = await fetch(
      `https://api.wit.ai/message?q=${encodeURIComponent(text)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_WIT_SERVER_ACCESS_TOKEN}`,
        },
      },
    );

    const data = await response.json();
    console.log(data);

    const intent = data?.intents?.[0]?.name || "unknown_intent";
    const entities = data?.entities;

    return { intent, entities };
  };

  const handleSubmit = async () => {
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, { sender: "user", content: input.trim() }]);

    const { intent, entities } = await getWitAiResponse(input.trim());

    if (intent !== "unknown_intent") {
      setUnknownCount(0);
    }

    const botReply = handleIntent(
      intent,
      entities,
      unknownCount,
      setUnknownCount,
    );
    setMessages((prev) => [...prev, { sender: "bot", content: botReply }]);

    scrollToBottom();
    setInput("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 400,
        width: ["100%", "70%", "50%", "35%"],
        background: MID_GROUND_COLOR,
        margin: "0 auto",
        mt: 4,
        ...sx,
      }}
    >
      <Typography variant="h6" gutterBottom align="center">
        Chat with WadeBot
      </Typography>
      <Paper
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          height: 300,
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          bgcolor: "#f5f5f5b2",
          scrollbarColor: "red",
          scrollBehavior: "auto",
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                message.sender === "user" ? "flex-end" : "flex-start",
              mb: 1,
            }}
          >
            <Paper
              sx={{
                p: 1,
                bgcolor: message.sender === "user" ? "#0d6efd" : "#e9ecef",
                color: message.sender === "user" ? "#fff" : "#000",

                borderRadius:
                  message.sender === "user"
                    ? "1rem 0 1rem 1rem"
                    : "0 1rem 1rem 1rem",
              }}
            >
              {typeof message.content === "string" ? (
                <Typography variant="body1">{message.content}</Typography>
              ) : (
                message.content
              )}
            </Paper>
          </Box>
        ))}
      </Paper>
      <Box mt={2}>
        {/* Hidden input field to trick the browser's autofill */}
        <input type="text" style={{ display: "none" }} />

        <TextField
          variant="outlined"
          fullWidth
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Type a message..."
          autoComplete="new-password"
          inputProps={{
            autoComplete: "new-password",
          }}
        />

        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%" }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
