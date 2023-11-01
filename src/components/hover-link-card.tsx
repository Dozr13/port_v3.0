import { ButtonBase, Card, CardContent, Link, Typography } from "@mui/material";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../constants/color-palette";

interface HoverLinkCardProps {
  href: string | undefined;
  title: string;
  description: string;
  descriptionLineTwo?: string;
}

const HoverLinkCard = ({
  href,
  title,
  description,
  descriptionLineTwo,
}: HoverLinkCardProps) => {
  return (
    <Link href={href} underline="none">
      <ButtonBase component="div">
        <Card
          sx={{
            backgroundColor: MID_GROUND_COLOR,
            borderRadius: "10px",
            padding: "20px",
            color: PRIMARY_COLOR,
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: SECONDARY_BACKGROUND_COLOR,
              color: PRIMARY_COLOR,
              transform: "scale(1.05)",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
            },
            cursor: "pointer",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            {descriptionLineTwo && (
              <Typography variant="body2">{descriptionLineTwo}</Typography>
            )}
          </CardContent>
        </Card>
      </ButtonBase>
    </Link>
  );
};

export default HoverLinkCard;
