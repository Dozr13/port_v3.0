import { Box, Link, Typography } from "@mui/material";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../constants/color-palette";

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
          display: "flex",
          gap: 8,
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
