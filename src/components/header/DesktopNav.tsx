import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { navItems } from "./index"; // Assuming navItems will be in the Header's main file

const DesktopNav: React.FC = () => (
  <>
    {navItems.map((item) => (
      <Button key={item.href} color="inherit">
        <Link href={item.href}>{item.label}</Link>
      </Button>
    ))}
  </>
);

export default DesktopNav;
