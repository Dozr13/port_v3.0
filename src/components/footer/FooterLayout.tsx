import { Box } from "@mui/material";
import {
  MID_GROUND_COLOR,
  SECONDARY_DARK_COLOR,
} from "../../../constants/color-palette";
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";

const FooterLayout = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      backgroundColor: SECONDARY_DARK_COLOR,
      padding: 3,
      borderTop: `1px solid ${MID_GROUND_COLOR}`,
      marginTop: 3,
    }}
  >
    <FooterLinks />
    <FooterCopyright />
  </Box>
);

export default FooterLayout;
