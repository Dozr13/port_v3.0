import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import {
  MID_GROUND_COLOR,
  SECONDARY_DARK_COLOR,
  WHITE,
} from "../../constants/color-palette";

interface HoverCardProps {
  title: string;
  description: string;
  href?: string;
  id?: string;
  useRawDescription?: boolean;
}

const HoverCard = ({
  title,
  description,
  href,
  id,
  useRawDescription = false,
}: HoverCardProps) => {
  const processDescription = (description: string) => {
    return description
      .split("---divider---")
      .flatMap((part, index, array) => [
        part,
        index < array.length - 1 && (
          <Divider
            sx={{ my: 2, borderColor: "primary.main" }}
            key={`divider-${index}`}
          />
        ),
      ])
      .filter(Boolean); // Remove any `false` inserted by the flatMap for the last item
  };

  const descriptionElements = useRawDescription
    ? null
    : processDescription(description);

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
            color: WHITE,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.08)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: SECONDARY_DARK_COLOR,
              color: WHITE,
              transform: "scale(1.05)",
              boxShadow: "0px 7px 20px rgba(0, 0, 0, 0.12)",
            },
            cursor: href ? "pointer" : "default",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" mb={2}>
              {title}
            </Typography>
            {useRawDescription ? (
              <Box
                dangerouslySetInnerHTML={{ __html: description }}
                style={{ color: WHITE }}
              />
            ) : (
              descriptionElements &&
              descriptionElements.map((element, index) => (
                <Fragment key={index}>
                  {typeof element === "string" ? (
                    <Typography variant="body1" color="white" paragraph>
                      {element}
                    </Typography>
                  ) : (
                    element
                  )}
                </Fragment>
              ))
            )}
          </CardContent>
        </Card>
      </ButtonBase>
    </Link>
  );
};

export default HoverCard;
