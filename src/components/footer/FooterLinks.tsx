import { Box } from "@mui/material";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { PRIMARY_COLOR } from "../../../constants/color-palette";
import { footerIconSize } from "../../../constants/styles";
import LinkIcons from "../icons/LinkIcons";

const footerLinkItems = [
  { link: "https://github.com/Dozr13", icon: FaGithub, label: "GitHub" },
  {
    link: "https://linkedin.com/in/wadejp8",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  // TODO: Create Facebook account maybe?
  // { link: "https://facebook.com/YourProfile", icon: FaFacebookSquare, label: "Facebook" },
  {
    link: "https://drive.google.com/file/d/1Gkm-Yv5LdLFpP4pJnYQM8kz7-uzZFT1H/view?usp=sharing",
    icon: FaFileAlt,
    label: "Resume",
  },
];

const FooterLinks = () => (
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
      linkIcons={footerLinkItems}
      sx={footerIconSize}
      color={PRIMARY_COLOR}
    />
  </Box>
);

export default FooterLinks;
