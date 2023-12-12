import { Box, IconButton, SxProps, Theme, Tooltip } from "@mui/material";
import React from "react";
import { ICON_COLORS } from "../../../constants/color-palette";
import { LinkIconItem } from "../../types/common";

interface LinkIconsProps {
  linkIcons: Array<LinkIconItem>;
  color?: string;
  sx?: SxProps<Theme>;
}

const LinkIcons: React.FC<LinkIconsProps> = ({ linkIcons, sx }) => (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      justifyContent: "center",
      "@media (max-width:600px)": {
        gap: 1,
      },
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
            sx={{
              "& svg": { color },
              ...sx,
            }}
          >
            <Icon />
          </IconButton>
        </Tooltip>
      );
    })}
  </Box>
);

export default LinkIcons;
