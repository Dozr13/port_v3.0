"use client";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
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
    <ListItem
      button={true}
      onClick={() => setIsDrawerOpen(false)}
      sx={{
        margin: "0.8rem 0",
        padding: "0.5rem 1rem",
      }}
    >
      <Link href={href}>{children}</Link>
    </ListItem>
  );

  return (
    <AppBar
      sx={{
        position: "absolute",
        top: 0,
        background: `linear-gradient(to bottom, ${SECONDARY_BACKGROUND_COLOR}, ${BACKGROUND_COLOR})`,
        opacity: "70%",
        borderBottom: `2px solid ${PRIMARY_COLOR}`,
      }}
    >
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
                <DrawerItem href="/dashboard">Dashboard</DrawerItem>
                <DrawerItem href="/about">About</DrawerItem>
                <DrawerItem href="/blog">Blog</DrawerItem>
                <DrawerItem href="/projects">Projects</DrawerItem>
                <DrawerItem href="/contact">Contact</DrawerItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              sx={{ "&:hover": { color: PRIMARY_COLOR } }}
            >
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button
              color="inherit"
              sx={{ "&:hover": { color: PRIMARY_COLOR } }}
            >
              <Link href="/about">About</Link>
            </Button>
            <Button
              color="inherit"
              sx={{ "&:hover": { color: PRIMARY_COLOR } }}
            >
              <Link href="/blog">Blog</Link>
            </Button>
            <Button
              color="inherit"
              sx={{ "&:hover": { color: PRIMARY_COLOR } }}
            >
              <Link href="/projects">Projects</Link>
            </Button>
            <Button
              color="inherit"
              sx={{ "&:hover": { color: PRIMARY_COLOR } }}
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
