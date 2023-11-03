import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { createElement } from "react";
import { FaAndroid, FaApple, FaGithub, FaGlobe } from "react-icons/fa";
import { MID_GROUND_COLOR, PRIMARY_COLOR } from "../../constants/color-palette";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  website?: string;
  iosLink?: string;
  androidLink?: string;
  logo?: React.ComponentType;
}

const ProjectCard = ({
  title,
  description,
  githubLink,
  website,
  iosLink,
  androidLink,
  logo,
}: ProjectCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: MID_GROUND_COLOR,
        borderRadius: "10px",
        padding: 4,
        color: PRIMARY_COLOR,
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            mb: 4,
            width: ["10rem", "20rem"],
            height: ["10rem", "20rem"],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Box
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {logo && typeof logo === "function" && createElement(logo)}
          </Box>
        </Box>

        <Typography
          variant="h5"
          sx={{ "@media (max-width:600px)": { fontSize: "1.5rem" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            textAlign: "center",
            "@media (max-width:600px)": { fontSize: "1rem" },
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {githubLink && (
            <IconButton
              aria-label="GitHub link"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub sx={{ color: PRIMARY_COLOR }} />
            </IconButton>
          )}

          {website && (
            <IconButton
              aria-label="Website link"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe sx={{ color: PRIMARY_COLOR }} />
            </IconButton>
          )}

          {iosLink && (
            <IconButton
              aria-label="iOS link"
              href={iosLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple sx={{ color: PRIMARY_COLOR }} />
            </IconButton>
          )}

          {androidLink && (
            <IconButton
              aria-label="Android link"
              href={androidLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAndroid sx={{ color: PRIMARY_COLOR }} />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
