import { Theme, createTheme } from "@mui/material/styles";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constants/color-palette";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
});
