import { Box } from "@mui/material";
import { PRIMARY_COLOR } from "../../../constants/color-palette";
import LinkIcons from "../icons/LinkIcons";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

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
    <LinkIcons linkIcons={footerLinkItems} size="2em" color={PRIMARY_COLOR} />
  </Box>
);

export default FooterLinks;
