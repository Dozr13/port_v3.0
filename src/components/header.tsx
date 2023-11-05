"use client";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../constants/color-palette";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const appBarStyle = {
  position: "absolute",
  top: 0,
  background: `linear-gradient(to bottom, ${SECONDARY_BACKGROUND_COLOR}, ${BACKGROUND_COLOR})`,
  opacity: "70%",
  borderBottom: `2px solid ${PRIMARY_COLOR}`,
};

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const DrawerItem = ({
    href,
    children,
  }: {
    href: string;
    children: string;
  }) => (
    <ListItemButton
      onClick={() => setIsDrawerOpen(false)}
      sx={{
        margin: "0.8rem 0",
        padding: "0.5rem 1rem",
      }}
    >
      <Link href={href}>{children}</Link>
    </ListItemButton>
  );

  return (
    <AppBar sx={appBarStyle}>
      <Toolbar>
        <Typography variant="h6" component="div">
          <Link href="/">Wade Pate&apos;s Portfolio</Link>
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <>
            <Button onClick={() => setIsDrawerOpen(true)}>Menu</Button>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              PaperProps={{
                sx: {
                  background: `linear-gradient(to bottom, ${SECONDARY_BACKGROUND_COLOR}, ${BACKGROUND_COLOR})`,
                  color: PRIMARY_COLOR,
                },
              }}
            >
              <List sx={{ padding: 2 }}>
                {navItems.map((item) => (
                  <DrawerItem key={item.href} href={item.href}>
                    {item.label}
                  </DrawerItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          navItems.map((item) => (
            <Button
              key={item.href}
              color="inherit"
              sx={{ "&:hover": { color: PRIMARY_COLOR } }}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
