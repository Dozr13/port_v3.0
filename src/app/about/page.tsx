"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import HoverCard from "../../components/cards/hover-card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../constants/color-palette";

export default function Page() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.getElementById(hash.substring(1));

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

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
      <Header />

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
        <Grid container spacing={2} alignItems="center">
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                borderRadius: 50,
                overflow: "hidden",
                "@media (max-width:600px)": {
                  borderRadius: 0,
                  display: "flex",
                  justifyContent: "center",
                },
              }}
            >
              <Image
                src="/../assets/images/Photo_1682372584117.jpg"
                width={200}
                height={200}
                alt="Picture of the Author"
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h3" sx={{ color: PRIMARY_COLOR }}>
              About Wade
            </Typography>
            <Typography variant="h5" sx={{ color: PRIMARY_COLOR }}>
              Discover My Journey and Skills
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}>
        <Grid container item spacing={4} alignItems="stretch">
          <Grid item md={6} sm={12} xs={12} style={{ flexGrow: 1 }}>
            <HoverCard
              title="Skills"
              description={[
                <>
                  <strong>Languages & Frameworks:</strong>
                  <br />- React & Next.js for advanced UI/UX, TypeScript for
                  type-checking.
                  <br />- GraphQL with Apollo Client for API management.
                  <br />- Vue.js, Nuxt for component architecture & Vuex.
                  <br />
                </>,
                <br key="about-br1" />,
                <>
                  <strong>Libraries & Tools:</strong>
                  <br />- Material UI for UI components, Tailwind CSS & SASS for
                  styles.
                  <br />- Firebase: Auth, Firestore, and cloud functions.
                  <br />
                </>,
                <br key="about-br2" />,
                <>
                  <strong>Dev Practices:</strong>
                  <br />- Responsive Design, SEO Optimization with meta tags and
                  SSR.
                  <br />- Performance Tuning: Lazy loading, code splitting,
                  asset optimization.
                  <br />
                </>,
              ]}
            />
          </Grid>

          <Grid item md={6} sm={12} xs={12} style={{ flexGrow: 1 }}>
            <HoverCard
              id="skills-and-experience"
              title="Experience"
              description={[
                <>
                  <strong>
                    Full Stack Developer at Hidden Mountain Data – Meridian,
                    Idaho
                  </strong>
                  <br />
                  (July 2023 – Present)
                  <br />
                  - Redesigned [specific website], achieving a 15% increase in
                  daily visitors.
                  <br />
                  - Optimized website performance, decreasing load times by 25%.
                  <br />
                  - Mentored junior developers, enhancing team productivity.
                  <br />
                  <br />
                </>,
                <>
                  <strong>
                    Software Engineer at In Time Tec – Meridian, Idaho
                  </strong>
                  <br />
                  (July 2021 – May 2023)
                  <br />
                  - Led development of [specific project], resulting in
                  [specific achievement].
                  <br />
                  - Collaborated with design and product teams on interactive
                  web applications.
                  <br />
                  - Introduced unit testing, improving code reliability by 30%.
                  <br />
                </>,
              ]}
            />
          </Grid>
        </Grid>
        <Grid item md={12} xs={12}>
          <HoverCard
            title="Key Achievements"
            description={[
              "- Successfully delivered end-to-end web applications, always ahead of schedule, at Hidden Mountain Data.",
              <br key="achievements-br1" />,
              "- Cultivated exemplary collaborations with multiple firms, consistently meeting and exceeding expectations.",
              <br key="achievements-br2" />,
              "- Became an essential go-to figure for juniors, mentoring them to enhance productivity.",
              <br key="achievements-br3" />,
              "- Contributing to company growth as well as .",
              <br key="achievements-br4" />,
              "- Developed and deployed a company-wide tool using React TypeScript, which boosted team productivity by 25%.",
              <br key="achievements-br5" />,
              "- Consistently received feedback for excellent problem-solving skills, with a knack for identifying and rectifying potential pitfalls early in the development process.",
            ]}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <HoverCard
            id="journey-from-oilfields"
            title="The Journey from Oilfields to Code"
            description={[
              "I began my professional career in the oilfields, where hard work, precision, and resilience were the keys to success. These years gave me valuable lessons on teamwork, problem-solving, and the importance of continually adapting to new challenges.",
              <br key="journey-br1" />,
              "During this time, I found a passion for technology and coding. I was fascinated by how software engineering allows you to build something from nothing, using just a computer and a strong sense of logic. This interest soon turned into a deep-seated passion, and I decided to pivot my career and chase my dreams.",
              <br key="journey-br2" />,
              <br key="journey-br3" />,
              "I'm excited to apply my unique skill set to a team that values hard work, innovation, and creativity. If you're looking for a developer who can bring not just coding skills but a diverse range of life experiences to the table, you've come to the right place.",
            ]}
          />
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}
