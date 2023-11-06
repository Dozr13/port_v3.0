import { Button, Drawer, List, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import DrawerItem from "./DrawerItem";
import { navItems } from "./index"; // Assuming navItems will be in the Header's main file

const MobileNav: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>Menu</Button>
      <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
        <List sx={{ padding: 2 }}>
          {navItems.map((item) => (
            <DrawerItem
              key={item.href}
              href={item.href}
              closeDrawer={closeDrawer}
            >
              {item.label}
            </DrawerItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MobileNav;
