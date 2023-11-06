import { Card, CardContent, Typography } from "@mui/material";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
} from "../../../../constants/color-palette";

const SuccessCard = () => (
  <Card
    sx={{
      mt: 5,
      mx: "auto",
      p: 4,
      width: "60%",
      backgroundColor: PRIMARY_COLOR,
      borderRadius: 10,
      "@media (max-width:600px)": {
        width: "100%",
      },
    }}
  >
    <CardContent>
      <Typography align="center" variant="h5" color={BACKGROUND_COLOR}>
        Message Received!
      </Typography>
    </CardContent>
  </Card>
);

export default SuccessCard;
