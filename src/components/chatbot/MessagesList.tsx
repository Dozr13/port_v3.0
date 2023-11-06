import { Box, Paper, Typography } from "@mui/material";
import { MessageListProps } from "./types/ChatBotTypes";

const MessagesList = ({ messages, messagesEndRef }: MessageListProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: "auto",
        maxHeight: "calc(100% - 120px)",
        bgcolor: "white",
        p: 2,
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.2)",
          borderRadius: 4,
        },
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
              px: 2,
              bgcolor: message.sender === "user" ? "#0d6efd" : "#e9ecef",
              color: message.sender === "user" ? "#fff" : "#000",
              flexDirection: "column",
              justifyContent:
                message.sender === "user" ? "flex-end" : "flex-start",
              alignItems: message.sender === "user" ? "flex-end" : "flex-start",
              borderRadius: 4,
              maxWidth: "75%",
              wordBreak: "break-word",
              my: 1,
              boxShadow:
                message.sender === "user"
                  ? "2px 2px 10px rgba(0,0,0,0.3)"
                  : "none",
            }}
          >
            {typeof message.content === "string" ? (
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "regular",
                }}
              >
                {message.content}
              </Typography>
            ) : (
              message.content
            )}
          </Paper>
        </Box>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default MessagesList;
