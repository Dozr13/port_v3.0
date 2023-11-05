import { Theme, createTheme } from "@mui/material/styles";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../constants/color-palette";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    background: {
      default: BACKGROUND_COLOR,
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      enteringScreen: 500,
      leavingScreen: 500,
    },
  },
});
