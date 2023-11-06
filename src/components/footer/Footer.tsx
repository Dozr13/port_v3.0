import { Box, Typography } from "@mui/material";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../../constants/color-palette";
import LinkIcons from "../icons/LinkIcons";

export default function Footer() {
  const footerLinkItems = [
    { link: "https://github.com/Dozr13", icon: FaGithub, label: "GitHub" },
    {
      link: "https://linkedin.com/in/wadejp8",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    // TODO: Add your Facebook link once you create an account
    // { link: "https://facebook.com/YourProfile", icon: FaFacebookSquare, label: "Facebook" },
    {
      link: "https://drive.google.com/file/d/1f6Nu83XVvUAG5X92OvxXiOdMmLTOxyPp/view?usp=sharing",
      icon: FaFileAlt,
      label: "Resume",
    },
  ];

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
        <LinkIcons
          linkIcons={footerLinkItems} // ! ERROR
          size="2em"
          color={PRIMARY_COLOR}
        />
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
