import { Box, IconButton, Tooltip } from "@mui/material";
import React, { CSSProperties } from "react";
import {
  BACKGROUND_COLOR,
  ICON_COLORS,
} from "../../../constants/color-palette";

interface LinkIconItem {
  link: string;
  icon: React.ComponentType<{ size?: string }>;
  label: string;
}

interface LinkIconsProps {
  linkIcons: Array<LinkIconItem>;
  size?: string;
  color?: string;
}

const iconStyle: CSSProperties = {
  color: BACKGROUND_COLOR,
};

const LinkIcons: React.FC<LinkIconsProps> = ({ linkIcons, size = "1.5em" }) => (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      justifyContent: "center",
    }}
  >
    {linkIcons.map(({ link, icon: Icon, label }) => {
      if (!Icon) return null;
      const color = ICON_COLORS[label as keyof typeof ICON_COLORS] || "#000000";

      return (
        <Tooltip key={label} title={label}>
          <IconButton
            aria-label={`${label} link`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ color }}>
              <Icon size={size} />
            </span>
          </IconButton>
        </Tooltip>
      );
    })}
  </Box>
);

export default LinkIcons;
