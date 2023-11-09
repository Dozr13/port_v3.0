import { Typography } from "@mui/material";
import { PRIMARY_COLOR } from "../../../constants/color-palette";

const Copyright = () => (
  <Typography
    variant="body2"
    color={PRIMARY_COLOR}
    sx={{ textAlign: "center" }}
  >
    © {new Date().getFullYear()} Wade Pate.
    {/* All rights reserved. */}
  </Typography>
);

export default Copyright;
