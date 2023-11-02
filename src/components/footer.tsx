import { Box, Link, Typography } from "@mui/material";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../constants/color-palette";
import Chatbot from "./Chatbot";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        backgroundColor: SECONDARY_BACKGROUND_COLOR,
        padding: 3,
        borderTop: `1px solid ${MID_GROUND_COLOR}`,
        marginTop: 3,
        "& svg": {
          fontSize: "2em",
        },
        "@media (max-width: 600px)": {
          borderRadius: 4,
          "& svg": {
            fontSize: "1.5em",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: 0, sm: "initial" }, // On mobile it's at the top, on larger screens it's back to its normal position
          right: 10,
          bottom: { xs: "initial", sm: 0 }, // On mobile it doesn't stick to the bottom, on larger screens it does
          zIndex: 1, // This ensures the chatbot is above other elements
        }}
      >
        <Chatbot />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 2,
          "@media (max-width: 600px)": {
            gap: 6,
          },
        }}
      >
        <Link
          href="https://github.com/Dozr13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color={PRIMARY_COLOR} size="1.5em" />
        </Link>
        <Link
          href="https://linkedin.com/in/wadejp8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color={PRIMARY_COLOR} size="1.5em" />
        </Link>
        {/* // TODO: Make a facebook account */}
        {/* <Link
          href="https://facebook.com/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare color={PRIMARY_COLOR} size="1.5em" />
        </Link> */}
        <Link
          href="https://drive.google.com/file/d/1f6Nu83XVvUAG5X92OvxXiOdMmLTOxyPp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileAlt color={PRIMARY_COLOR} size="1.5em" />
        </Link>
      </Box>
      <Typography
        variant="body2"
        color={PRIMARY_COLOR}
        sx={{ textAlign: "center" }}
      >
        © {new Date().getFullYear()} Wade Pate. All rights reserved.
      </Typography>
    </Box>
  );
}
