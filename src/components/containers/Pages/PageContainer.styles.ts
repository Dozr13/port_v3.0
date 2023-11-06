import { SxProps } from "@mui/system";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../../../constants/color-palette";

export const pageContainerStyles: Record<string, SxProps> = {
  pageContainer: {
    flexGrow: 1,
    padding: 4,
    background: `linear-gradient(to top, ${BACKGROUND_COLOR}, ${SECONDARY_BACKGROUND_COLOR}, rgba(255,255,255,0.1))`,
    "@media (max-width:600px)": {
      backgroundColor: "transparent",
      flexGrow: 0,
    },
  },
  messageContainer: {
    flexGrow: 1,
    height: "100%",
    background: `${SECONDARY_BACKGROUND_COLOR}`,
    textAlign: "center",
    mb: 4,
    p: 4,
    pb: 8,
  },
  mainMessage: {
    fontWeight: "bold",
    color: `${PRIMARY_COLOR}`,
    mb: 2,
    "@media (max-width:600px)": {
      fontSize: "2.5rem",
    },
  },
  secondaryMessage: {
    color: `${PRIMARY_COLOR}`,
    "@media (max-width:600px)": {
      fontSize: "1.2rem",
    },
  },
};
