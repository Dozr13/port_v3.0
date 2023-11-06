"use client";
import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../../constants/color-palette";
import { theme } from "../../utils/theme";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const appBarStyle = {
  position: "absolute",
  top: 0,
  background: `linear-gradient(to bottom, ${SECONDARY_BACKGROUND_COLOR}, ${BACKGROUND_COLOR})`,
  opacity: "70%",
  borderBottom: `2px solid ${PRIMARY_COLOR}`,
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar sx={appBarStyle}>
      <Toolbar>{isMobile ? <MobileNav /> : <DesktopNav />}</Toolbar>
    </AppBar>
  );
};

export default Header;
