import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../../components/cards/project-card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../constants/color-palette";
import { projectData } from "../../data/projects";

export default function Projects() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: SECONDARY_BACKGROUND_COLOR,
        padding: 5,
        borderRadius: 15,
      }}
    >
      <Header />

      <Box
        sx={{
          p: 2,
          mb: 8,
          backgroundImage: `linear-gradient(45deg, ${PRIMARY_COLOR}, ${MID_GROUND_COLOR})`,
          borderRadius: 18,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: "100%",
            background: "#094f6e",
            borderRadius: 15,
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ color: PRIMARY_COLOR }}>
            My Projects
          </Typography>
          <Typography variant="subtitle1" sx={{ color: PRIMARY_COLOR, mt: 2 }}>
            Many of my most impactful contributions to projects with companies
            like HP, PlexTrac, and SymLiv are bound by NDAs. Hence, while you
            might find limited projects listed here, I bring to the table a
            wealth of experience from diverse, large-scale projects.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {projectData.map((project, index) => (
          <Grid item md={6} xs={12} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              website={project.website}
              iosLink={project.iosLink}
              androidLink={project.androidLink}
            />
          </Grid>
        ))}
      </Grid>

      <Footer />
    </Box>
  );
}
