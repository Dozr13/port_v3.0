import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Footer from "../../components/footer";
import Header from "../../components/header";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_COLOR,
} from "../../constants/color-palette";

export default function Page() {
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

      {/* Introduction */}
      <Box
        sx={{
          p: 2,
          backgroundImage: `linear-gradient(45deg, ${SECONDARY_COLOR}, ${MID_GROUND_COLOR})`,
          borderRadius: 18,
          display: "inline-block",
          mb: 8,
        }}
      >
        <Box
          sx={{
            background: "#094f6e",
            borderRadius: 15,
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ color: PRIMARY_COLOR }}>
            About Wade
          </Typography>
          <Typography variant="h5" sx={{ color: PRIMARY_COLOR }}>
            Discover My Journey and Skills
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Personal Story */}
        <Grid item md={6} xs={12}>
          <Card
            sx={{
              backgroundColor: MID_GROUND_COLOR,
              borderRadius: 10,
              padding: 4,
              color: "#e4f5ff",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                My Journey
              </Typography>
              <Typography variant="body2">
                From a budding coder to a seasoned full stack developer, my
                journey has been filled with challenges, learnings, and
                accomplishments. Working with a plethora of technologies,
                I&apos;ve honed my skills in React TypeScript, GraphQL, and
                Material UI. Collaborating with diverse teams and driving
                multiple projects to success at Hidden Mountain Data has been an
                exhilarating experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Achievements */}
        <Grid item md={6} xs={12}>
          <Card
            sx={{
              backgroundColor: MID_GROUND_COLOR,
              borderRadius: 10,
              padding: 4,
              color: "#e4f5ff",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Key Achievements
              </Typography>
              <Typography variant="body2">
                - Successfully delivered end-to-end web applications, always
                ahead of schedule, at Hidden Mountain Data.
                <br />
                - Cultivated exemplary collaborations with multiple firms,
                consistently meeting and exceeding expectations.
                <br />- Became an essential go-to figure for juniors, mentoring
                them to enhance productivity.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
