// src/components/Chatbot.tsx

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Message {
  sender: "user" | "bot";
  content: string;
}

const Chatbot = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", content: input.trim() }]);

    // Simulate bot reply (This is where you'd typically call some chatbot API for a more dynamic response)
    setTimeout(() => {
      const botReply = "Hello! This is the bot's default reply."; // Change this to a more dynamic response based on user's input
      setMessages((prev) => [...prev, { sender: "bot", content: botReply }]);
    }, 1000);

    setInput("");
  };

  return (
    <Box sx={{ maxWidth: "400px", margin: "0 auto" }}>
      <Box
        sx={{
          overflowY: "auto",
          maxHeight: "300px",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {messages.map((message, index) => (
          <Typography
            key={index}
            align={message.sender === "user" ? "right" : "left"}
            gutterBottom
          >
            {message.content}
          </Typography>
        ))}
      </Box>
      <Box mt={2}>
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Type a message..."
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
