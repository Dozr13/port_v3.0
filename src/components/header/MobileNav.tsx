import { Button, Drawer, List } from "@mui/material";
import React, { useState } from "react";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_DARK_COLOR,
} from "../../../constants/color-palette";
import DrawerItem from "./DrawerItem";
import { navItems } from "./index";

const MobileNav: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>Menu</Button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            background: `linear-gradient(to bottom, ${SECONDARY_DARK_COLOR}, ${BACKGROUND_COLOR})`,
            color: PRIMARY_COLOR,
          },
        }}
      >
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
