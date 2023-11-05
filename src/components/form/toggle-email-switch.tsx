import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import {
  BACKGROUND_COLOR,
  MID_GROUND_COLOR,
} from "../../constants/color-palette";

interface ToggleEmailSwitchProps {
  showEmail: boolean;
  onToggle: () => void;
}

const ToggleEmailSwitch: React.FC<ToggleEmailSwitchProps> = ({
  showEmail,
  onToggle,
}) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={showEmail}
          onChange={onToggle}
          name="checkedA"
          sx={{
            "&.MuiSwitch-root  .MuiSwitch-thumb": {
              backgroundColor: MID_GROUND_COLOR, // The circle part color
            },
            "&.MuiSwitch-root  .MuiSwitch-track": {
              backgroundColor: BACKGROUND_COLOR, // Background of the switch
            },
            "&.MuiSwitch-root .Mui-checked .MuiSwitch-thumb": {
              backgroundColor: MID_GROUND_COLOR, // Color when checked
            },
            "&.MuiSwitch-root .Mui-checked + .MuiSwitch-track": {
              backgroundColor: BACKGROUND_COLOR, // Background when checked
            },
          }}
        />
      }
      label={
        showEmail ? "Want to reach me faster?" : "Ok with sticking to email?"
      }
      sx={{
        ".MuiTypography-root": {
          color: MID_GROUND_COLOR,
        },
      }}
    />
  );
};

export default ToggleEmailSwitch;
