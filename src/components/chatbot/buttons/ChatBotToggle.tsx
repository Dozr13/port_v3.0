"use client";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { FaCommentDots, FaRegWindowClose } from "react-icons/fa";
import {
  MID_GROUND_COLOR,
  SECONDARY_DARK_COLOR,
} from "../../../../constants/color-palette";
import Chatbot from "../ChatBot";

const ChatBotToggle = () => {
  const [isChatVisible, setIsChatVisible] = useState<boolean>(false);

  const handleToggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <>
      <Button
        onClick={handleToggleChat}
        variant="contained"
        color="primary"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          display: "flex",
          alignItems: "center",
          zIndex: 1500,
        }}
      >
        {isChatVisible ? <FaRegWindowClose /> : <FaCommentDots />}
        {isChatVisible ? (
          <Typography sx={{ color: SECONDARY_DARK_COLOR, ml: 2 }}>
            Close Chat
          </Typography>
        ) : (
          <Typography sx={{ color: SECONDARY_DARK_COLOR, ml: 2 }}>
            Let&apos;s Chat
          </Typography>
        )}
      </Button>

      {isChatVisible && (
        <Grid item md={12} sm={12} xs={12} sx={{ pt: 4 }}>
          <Chatbot
            sx={{
              position: "fixed",
              bottom: "60px",
              right: "20px",
              width: "300px",
              zIndex: 1300,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
              background: MID_GROUND_COLOR,
            }}
          />
        </Grid>
      )}
    </>
  );
};

export default ChatBotToggle;
