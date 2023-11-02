import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { FaAndroid, FaApple, FaGithub, FaGlobe } from "react-icons/fa";
import { MID_GROUND_COLOR, PRIMARY_COLOR } from "../../constants/color-palette";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  website?: string;
  iosLink?: string;
  androidLink?: string;
}

const ProjectCard = ({
  title,
  description,
  githubLink,
  website,
  iosLink,
  androidLink,
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
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {description}
        </Typography>

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
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
