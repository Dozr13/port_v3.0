import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { navItems } from "./index";

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
