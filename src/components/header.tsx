import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../constants/color-palette";

const Header = () => {
  return (
    <AppBar
      sx={{
        position: "absolute",
        top: 0,
        background: `linear-gradient(to bottom, ${SECONDARY_BACKGROUND_COLOR}, ${BACKGROUND_COLOR})`,
        borderBottom: `2px solid ${PRIMARY_COLOR}`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div">
          <Link href="/">Wade Pate&apos; Portfolio</Link>
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Button color="inherit" sx={{ "&:hover": { color: PRIMARY_COLOR } }}>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button color="inherit" sx={{ "&:hover": { color: PRIMARY_COLOR } }}>
          <Link href="/about">About</Link>
        </Button>
        <Button color="inherit" sx={{ "&:hover": { color: PRIMARY_COLOR } }}>
          <Link href="/blog">Blog</Link>
        </Button>
        <Button color="inherit" sx={{ "&:hover": { color: PRIMARY_COLOR } }}>
          <Link href="/projects">Projects</Link>
        </Button>
        <Button color="inherit" sx={{ "&:hover": { color: PRIMARY_COLOR } }}>
          <Link href="/contact">Contact</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
