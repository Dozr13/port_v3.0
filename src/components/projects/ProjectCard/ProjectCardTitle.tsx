import { Typography } from "@mui/material";

const MOBILE_BREAKPOINT = "600px";

interface ProjectCardTitleProps {
  title: string;
}

const ProjectCardTitle: React.FC<ProjectCardTitleProps> = ({ title }) => (
  <Typography
    variant="h5"
    sx={{
      [`@media (max-width:${MOBILE_BREAKPOINT})`]: { fontSize: "1.5rem" },
    }}
  >
    {title}
  </Typography>
);

export default ProjectCardTitle;
