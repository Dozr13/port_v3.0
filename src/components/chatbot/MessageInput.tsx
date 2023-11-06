import { Box, Button, TextField } from "@mui/material";
import { MessageInputProps } from "./types/ChatBotTypes";

const MessageInput = ({ input, setInput, handleSubmit }: MessageInputProps) => {
  return (
    <Box
      sx={{
        p: 2, // Padding to match the header
        backgroundColor: "#f8f9fa", // Slight off-white background for the input area
        borderTop: "1px solid #dee2e6", // Separating line for visual distinction
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Type a message..."
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ced4da", // Soft border color
            },
            "&:hover fieldset": {
              borderColor: "#adb5bd", // Slightly darker on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0d6efd", // Highlight color when focused
            },
          },
          borderRadius: "25px", // Rounded input for modern look
          overflow: "hidden", // Ensures the shadows of inner elements are contained
        }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          mt: 2, // Margin top for spacing from input
          py: 1, // Padding for button height
          boxShadow: "0px 2px 4px rgba(0,0,0,0.2)", // Subtle shadow for depth
          borderRadius: 140, // Matching rounded corners for consistency
          backgroundColor: "#0056b3", // Darker shade for the send button
          color: "#ffffff", // Ensuring text on the button is white for contrast
          "&:hover": {
            boxShadow: "0px 4px 6px rgba(0,0,0,0.3)", // More prominent shadow on hover
            backgroundColor: "#004494",
          },
        }}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
