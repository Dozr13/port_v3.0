import { ButtonBase, Card, CardContent, Link, Typography } from "@mui/material";
import { Fragment } from "react";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../constants/color-palette";

interface HoverLinkCardProps {
  title: string;
  description: string | JSX.Element | (string | JSX.Element)[];
  descriptionLineTwo?: string | JSX.Element;
  href?: string;
}

const HoverLinkCard = ({
  href,
  title,
  description,
  descriptionLineTwo,
}: HoverLinkCardProps) => {
  return (
    <Link href={href || "#!"} underline="none">
      <ButtonBase component="div" style={{ display: "flex", height: "100%" }}>
        <Card
          sx={{
            height: "100%",
            backgroundColor: MID_GROUND_COLOR,
            borderRadius: 2,
            p: 2,
            color: PRIMARY_COLOR,
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease",
            ...(href && {
              "&:hover": {
                backgroundColor: SECONDARY_BACKGROUND_COLOR,
                color: PRIMARY_COLOR,
                transform: "scale(1.05)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
              },
            }),
            cursor: href ? "pointer" : "default",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <br />
            <Typography variant="body1">
              {Array.isArray(description)
                ? description.map((item, index) => (
                    <Fragment key={index}>{item}</Fragment>
                  ))
                : description}
            </Typography>
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
