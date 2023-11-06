import { ListItemButton } from "@mui/material";
import Link from "next/link";
import React from "react";

interface DrawerItemProps {
  href: string;
  children: React.ReactNode;
  closeDrawer: () => void;
}

const DrawerItem: React.FC<DrawerItemProps> = ({
  href,
  children,
  closeDrawer,
}) => (
  <ListItemButton
    onClick={closeDrawer}
    sx={{
      margin: "0.8rem 0",
      padding: "0.5rem 1rem",
    }}
  >
    <Link href={href}>{children}</Link>
  </ListItemButton>
);

export default DrawerItem;
