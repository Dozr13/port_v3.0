import { Box } from "@mui/material";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { PRIMARY_COLOR } from "../../../constants/color-palette";
import { footerIconSize } from "../../../constants/styles";
import LinkIcons from "../icons/LinkIcons";
import { LinkIconItem } from "../../types/common";

const footerLinkItems = [
  { link: process.env.GITHUB_LINK, icon: FaGithub, label: "GitHub" },
  {
    link: process.env.LINKEDIN_LINK,
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  // TODO: Create Facebook account maybe?
  // { link: "https://facebook.com/YourProfile", icon: FaFacebookSquare, label: "Facebook" },
  {
    link: process.env.RESUME_LINK,
    icon: FaFileAlt,
    label: "Resume",
  },
].filter((item): item is LinkIconItem => item.link !== undefined);

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
