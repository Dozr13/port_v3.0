import { Grid, Typography } from "@mui/material";
import ProjectCard from "../../components/cards/project-card";
import PageContainer from "../../components/page-container";
import { PRIMARY_COLOR } from "../../constants/color-palette";
import { projectData } from "../../data/projects";

export default function Projects() {
  return (
    <PageContainer
      mainMessage="My Projects"
      secondaryMessage="Take a look at some of my work"
    >
      <Typography
        variant="h5"
        sx={{
          color: PRIMARY_COLOR,
          m: 8,
          textAlign: "center",
        }}
      >
        Many of my most impactful contributions to projects with companies like
        HP, PlexTrac, and SymLiv are bound by NDAs.
        <br />
        Hence, while you might find limited projects listed here, I bring to the
        table a wealth of experience from diverse, large-scale projects.
      </Typography>
      <Grid container spacing={4}>
        {projectData.map((project, index) => (
          <Grid item md={12} xs={12} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              website={project.website}
              iosLink={project.iosLink}
              androidLink={project.androidLink}
              logo={project.logo}
            />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
