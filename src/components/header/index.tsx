"use client";
import { AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_DARK_COLOR,
} from "../../../constants/color-palette";
import { theme } from "../../utils/theme";
import DesktopNav from "./DesktopNav";
import HideOnScroll, { HideOnScrollProps } from "./HideOnScoll";
import MobileNav from "./MobileNav";

const appBarStyle = {
  top: 0,
  background: `linear-gradient(to bottom, ${SECONDARY_DARK_COLOR}, ${BACKGROUND_COLOR})`,
  opacity: "70%",
  borderBottom: `2px solid ${PRIMARY_COLOR}`,
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Header = (props: HideOnScrollProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HideOnScroll {...props}>
      <AppBar sx={{ ...appBarStyle }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">Wade Pate&apos;s Portfolio</Link>
          </Typography>
          {isMobile ? <MobileNav /> : <DesktopNav />}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
