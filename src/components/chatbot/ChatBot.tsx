import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { MID_GROUND_COLOR } from "../../../constants/color-palette";
import { useChat } from "../../hooks/useChat";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";
import { ChatbotProps } from "./types/ChatBotTypes";

const Chatbot = ({ sx }: ChatbotProps) => {
  const {
    input,
    setInput,
    messages,
    handleSubmit,
    messagesEndRef,
    scrollToBottom,
  } = useChat();

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        maxHeight: "70vh",
        width: ["100%", "70%", "50%", "35%"],
        background: MID_GROUND_COLOR,
        margin: "0 auto",
        mt: 5,
        borderRadius: "10px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        overflow: "hidden",
        ...sx,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          p: 2,
          bgcolor: MID_GROUND_COLOR,
          color: "white",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          textAlign: "center",
          fontWeight: "bold",
          textShadow: "1px 1px 2px black",
        }}
      >
        Wadebot
      </Typography>
      <MessagesList messages={messages} messagesEndRef={messagesEndRef} />
      <MessageInput
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};

export default Chatbot;
