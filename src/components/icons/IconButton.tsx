import { Button, Typography } from "@mui/material";
import Link from "next/link";
import PropTypes from "prop-types";
import { CSSProperties } from "react";
import {
  BACKGROUND_COLOR,
  SECONDARY_COLOR,
} from "../../../constants/color-palette";

interface IconButtonProps {
  labelText: string;
  url: string;
  additionalStyles?: CSSProperties;
  icon?: React.ElementType;
}

const IconButton = ({
  labelText,
  icon: Icon,
  url,
  additionalStyles,
}: IconButtonProps) => {
  return (
    <Button sx={additionalStyles}>
      <Typography
        variant="h6"
        component="p"
        sx={{
          bgcolor: SECONDARY_COLOR,
          color: BACKGROUND_COLOR,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          p: 2,
          borderRadius: 4,
        }}
      >
        {Icon && <Icon style={{ color: BACKGROUND_COLOR }} />}
        <Link href={url} passHref legacyBehavior>
          <a style={{ textDecoration: "none", color: "inherit" }}>
            {labelText}
          </a>
        </Link>
      </Typography>
    </Button>
  );
};

IconButton.propTypes = {
  labelText: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  url: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object,
};

export default IconButton;
