import { Typography } from "@mui/material";

const MOBILE_BREAKPOINT = "600px";

interface ProjectCardDescriptionProps {
  description: string;
}

const ProjectCardDescription: React.FC<ProjectCardDescriptionProps> = ({
  description,
}) => (
  <Typography
    variant="body2"
    sx={{
      mb: 2,
      textAlign: "center",
      [`@media (max-width:${MOBILE_BREAKPOINT})`]: { fontSize: "1rem" },
    }}
  >
    {description}
  </Typography>
);

export default ProjectCardDescription;
