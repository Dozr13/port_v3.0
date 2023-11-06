import { ButtonBase, Card, CardContent, Link, Typography } from "@mui/material";
import { Fragment } from "react";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../constants/color-palette";

interface HoverCardProps {
  title: string;
  description: string | JSX.Element | (string | JSX.Element)[];
  descriptionLineTwo?: string | JSX.Element;
  href?: string;
  id?: string;
}

const HoverCard = ({
  href,
  title,
  description,
  descriptionLineTwo,
  id,
}: HoverCardProps) => {
  return (
    <Link href={href || "#!"} id={id} underline="none">
      <ButtonBase
        component="div"
        style={{ display: "flex", height: "100%", width: "100%" }}
      >
        <Card
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: MID_GROUND_COLOR,
            borderRadius: 2,
            p: 3,
            color: PRIMARY_COLOR,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.08)",
            transition: "all 0.3s ease",
            ...(href && {
              "&:hover": {
                backgroundColor: SECONDARY_BACKGROUND_COLOR,
                color: PRIMARY_COLOR,
                transform: "scale(1.05)",
                boxShadow: "0px 7px 20px rgba(0, 0, 0, 0.12)",
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

export default HoverCard;
