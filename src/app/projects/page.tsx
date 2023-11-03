"use client";
import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../../components/cards/project-card";
import Footer from "../../components/footer";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../constants/color-palette";
import { projectData } from "../../data/projects";

export default function Projects() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        background: `linear-gradient(to top,  ${BACKGROUND_COLOR}, ${SECONDARY_BACKGROUND_COLOR}, rgba(255,255,255,0.1))`,
        "@media (max-width:600px)": {
          backgroundColor: "transparent",
          flexGrow: 0,
        },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          background: SECONDARY_BACKGROUND_COLOR,
          textAlign: "center",
          mb: 4,
          p: 4,
          pb: 6,
        }}
      >
        <Typography variant="h3" sx={{ color: PRIMARY_COLOR }}>
          My Projects
        </Typography>
        <Typography variant="h5" sx={{ color: PRIMARY_COLOR }}>
          Take a look at some pieces of my work
        </Typography>
      </Box>

      <Typography
        variant="subtitle1"
        sx={{ color: PRIMARY_COLOR, m: 4, textAlign: "center" }}
      >
        Many of my most impactful contributions to projects with companies like
        HP, PlexTrac, and SymLiv are bound by NDAs. Hence, while you might find
        limited projects listed here, I bring to the table a wealth of
        experience from diverse, large-scale projects.
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

      <Footer />
    </Box>
  );
}
