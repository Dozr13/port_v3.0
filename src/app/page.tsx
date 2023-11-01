import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Footer from "../components/footer";
import Header from "../components/header";
import HoverLinkCard from "../components/hover-link-card";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_COLOR,
} from "../constants/color-palette";

export default function Home() {
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
            Hi, I&apos;m Wade,
          </Typography>
          <Typography variant="h5" sx={{ color: PRIMARY_COLOR }}>
            Welcome to my Portfolio
          </Typography>
        </Box>
      </Box>

      {/* Grid Intro Parts */}
      <Grid container spacing={4}>
        {/* About Me */}

        <Grid item md={6} xs={12}>
          <HoverLinkCard
            href="/about"
            title="About Me"
            description="Hi there! I'm Wade, a passionate full-stack developer skilled in React TypeScript, GraphQL, and much more. I have a strong affinity for Material UI when it comes to styling. Dive in to know more about my journey and skills."
          />
        </Grid>

        {/* Add a photo or avatar */}

        {/* Projects */}
        {/* // TODO: Work on implementing Projects to take up row 1 col 2 AND row 2 col 2 */}
        <Grid item md={6} xs={12}>
          <HoverLinkCard
            href="/projects"
            title="Projects"
            description="Loop Through Projects here"
            descriptionLineTwo="HEREEEEE"
          />
        </Grid>

        {/* Skills */}
        <Grid item md={6} xs={12}>
          <Card
            sx={{
              backgroundColor: MID_GROUND_COLOR,
              borderRadius: "10px",
              padding: 4,
              color: "#e4f5ff",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Skills
              </Typography>
              <Typography variant="body2">
                <strong>Languages & Frameworks:</strong>
                - React & Next.js for advanced UI/UX, TypeScript for
                type-checking. - GraphQL with Apollo Client for API management.
                - Vue.js, Nuxt for component architecture & Vuex.
                <br />
                <br />
                <strong>Libraries & Tools:</strong>
                - Material UI for UI components, Tailwind CSS & SASS for styles.
                - Firebase: Auth, Firestore, and cloud functions.
                <br />
                <br />
                <strong>Dev Practices:</strong>- Responsive Design, SEO
                Optimization with meta tags and SSR. - Performance Tuning: Lazy
                loading, code splitting, asset optimization.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Experience */}
        <Grid item md={6} xs={12}>
          <Card
            sx={{
              backgroundColor: "#2d7a9c",
              borderRadius: "10px",
              padding: "20px",
              color: "#e4f5ff",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Experience
              </Typography>
              <Typography variant="body2">
                <strong>
                  Full Stack Developer at Hidden Mountain Data – Meridian, Idaho
                </strong>
                (July 2023 – Present)
                <br />
                - Redesigned [specific website], achieving a 15% increase in
                daily visitors.
                <br />
                - Optimized website performance, decreasing load times by 25%.
                <br /> - Mentored junior developers, enhancing team
                productivity.
                <br />
                <br />
                <strong>
                  Software Engineer at In Time Tec – Meridian, Idaho
                </strong>
                (July 2021 – May 2023)
                <br />
                - Led development of [specific project], resulting in [specific
                achievement].
                <br />
                - Collaborated with design and product teams on interactive web
                applications.
                <br /> - Introduced unit testing, improving code reliability by
                30%.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Blog Posts */}
        <Grid item md={6} xs={12}>
          <HoverLinkCard
            href="/blog"
            title="Blog"
            description="Pull latest articles"
            descriptionLineTwo="HEREEEEE"
          />
        </Grid>

        {/* Contact Me */}
        <Grid item md={6} xs={12}>
          <HoverLinkCard
            href="/contact"
            title="Contact"
            description="Hmm, small form perhaps or maybe something else like:"
            descriptionLineTwo="Let's get to know each other!"
          />
        </Grid>
      </Grid>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </Box>
  );
}
