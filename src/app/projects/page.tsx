import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { FaAndroid, FaApple, FaGithub, FaGlobe } from "react-icons/fa";
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
        <Typography variant="h3" sx={{ color: MID_GROUND_COLOR }}>
          My Projects
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projectData.map((project, index) => (
          <Grid item md={6} xs={12} key={index}>
            <Card
              sx={{
                backgroundColor: MID_GROUND_COLOR,
                borderRadius: "10px",
                padding: 4,
                color: PRIMARY_COLOR,
              }}
            >
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <IconButton
                  aria-label="GitHub link"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub sx={{ color: PRIMARY_COLOR }} />
                </IconButton>
                <IconButton
                  aria-label="Website link"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe sx={{ color: PRIMARY_COLOR }} />
                </IconButton>
                <IconButton
                  aria-label="iOS link"
                  href={project.iosLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaApple sx={{ color: PRIMARY_COLOR }} />
                </IconButton>
                <IconButton
                  aria-label="Android link"
                  href={project.androidLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaAndroid sx={{ color: PRIMARY_COLOR }} />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Footer />
    </Box>
  );
}
