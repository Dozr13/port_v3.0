"use client";
import {
  Box,
  Card,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState } from "react";
import HoverLinkCard from "../components/cards/hover-card";
import Footer from "../components/footer";
import Header from "../components/header";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_COLOR,
} from "../constants/color-palette";

export default function Home() {
  const [isSkillsExpanded, setSkillsExpanded] = useState(false);
  const [isExperienceExpanded, setExperienceExpanded] = useState(false);

  const toggleSkills = () => {
    setSkillsExpanded(!isSkillsExpanded);
  };

  const toggleExperience = () => {
    setExperienceExpanded(!isExperienceExpanded);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: SECONDARY_BACKGROUND_COLOR,
        padding: 5,
        borderRadius: 15,
        "@media (max-width:600px)": {
          backgroundColor: "transparent",
          flexGrow: 0,
        },
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
            flexGrow: 1,
            height: "100%",
            background: "#094f6e",
            borderRadius: 15,
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: PRIMARY_COLOR,
              "@media (max-width:600px)": {
                fontSize: "2rem",
              },
            }}
          >
            Hi, I&apos;m Wade,
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: PRIMARY_COLOR,
              "@media (max-width:600px)": {
                fontSize: "1rem",
              },
            }}
          >
            Welcome to my Portfolio
          </Typography>
        </Box>
      </Box>

      {/* Grid Intro Parts */}
      <Grid container spacing={4}>
        {/* About Me */}
        <Grid item md={6} sm={12} xs={12} style={{ display: "flex" }}>
          <HoverLinkCard
            href="/about"
            title="About Me"
            description={[
              "Hi there! I'm Wade,",
              <br key="line-break-1" />,
              "a passionate full-stack developer skilled in React TypeScript, GraphQL, and much more.",
              <br key="line-break-2" />,
              "I have a strong affinity for Material UI when it comes to styling. Dive in to know more about my journey and skills.",
            ]}
          />
        </Grid>
        {/* // TODO: Add a photo or avatar */}

        {/* Projects */}
        {/* // TODO: Work on implementing Projects to take up row 1 col 2 AND row 2 col 2 */}
        <Grid item md={6} sm={12} xs={12} style={{ display: "flex" }}>
          <HoverLinkCard
            href="/projects"
            title="Projects"
            description="Explore the projects I've developed, reflecting my expertise in React, TypeScript, GraphQL, and more."
            descriptionLineTwo="From conceptualization to final deployment, each piece stands as a testament to my dedication and prowess as a full-stack developer. Experience firsthand the integration of Material UI for aesthetically pleasing and functional designs."
          />
        </Grid>

        {/* Skills */}
        <Grid container item spacing={4} alignItems="stretch">
          <Grid item md={6} sm={12} xs={12} style={{ flexGrow: 1 }}>
            <Card
              sx={{
                height: isSkillsExpanded ? "100%" : "auto", // Setting height conditionally
                width: "100%",
                backgroundColor: MID_GROUND_COLOR,
                borderRadius: 2,
                padding: 2,
                color: "#e4f5ff",
                position: "relative",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)", // Add shadow for button effect
                "&:hover": {
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center", // This ensures vertical alignment
                    justifyContent: "space-between", // This ensures maximum space between the two items
                  }}
                >
                  <Typography variant="h5" component="div">
                    Skills
                  </Typography>
                  <IconButton
                    aria-label="expand"
                    onClick={toggleSkills}
                    sx={{
                      transform: isSkillsExpanded
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    {/* // TODO: Fix the Chevron changing */}
                    {isSkillsExpanded ? <FaChevronUp /> : <FaChevronDown />}
                  </IconButton>
                </Box>
                <Collapse in={isSkillsExpanded} timeout="auto" unmountOnExit>
                  <Typography variant="body2">
                    <strong>Languages & Frameworks:</strong>
                    - React & Next.js for advanced UI/UX, TypeScript for
                    type-checking. - GraphQL with Apollo Client for API
                    management. - Vue.js, Nuxt for component architecture &
                    Vuex.
                    <br />
                    <br />
                    <strong>Libraries & Tools:</strong>
                    - Material UI for UI components, Tailwind CSS & SASS for
                    styles. - Firebase: Auth, Firestore, and cloud functions.
                    <br />
                    <br />
                    <strong>Dev Practices:</strong>- Responsive Design, SEO
                    Optimization with meta tags and SSR. - Performance Tuning:
                    Lazy loading, code splitting, asset optimization.
                  </Typography>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>

          {/* Experience */}
          <Grid item md={6} sm={12} xs={12} style={{ flexGrow: 1 }}>
            <Card
              sx={{
                height: isExperienceExpanded ? "100%" : "auto", // Setting height conditionally
                width: "100%",
                backgroundColor: "#2d7a9c",
                borderRadius: 2,
                padding: 2,
                color: "#e4f5ff",
                position: "relative",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)", // Add shadow for button effect
                "&:hover": {
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" component="div">
                    Experience
                  </Typography>
                  <IconButton
                    aria-label="expand"
                    onClick={toggleExperience}
                    sx={{
                      transform: isExperienceExpanded
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    {/* // TODO: Fix the Chevron changing */}
                    {isExperienceExpanded ? <FaChevronUp /> : <FaChevronDown />}
                  </IconButton>
                </Box>
                <Collapse
                  in={isExperienceExpanded}
                  timeout="auto"
                  unmountOnExit
                >
                  <Typography variant="body2">
                    <strong>
                      Full Stack Developer at Hidden Mountain Data – Meridian,
                      Idaho
                    </strong>
                    (July 2023 – Present)
                    <br />
                    - Redesigned [specific website], achieving a 15% increase in
                    daily visitors.
                    <br />
                    - Optimized website performance, decreasing load times by
                    25%.
                    <br /> - Mentored junior developers, enhancing team
                    productivity.
                    <br />
                    <br />
                    <strong>
                      Software Engineer at In Time Tec – Meridian, Idaho
                    </strong>
                    (July 2021 – May 2023)
                    <br />
                    - Led development of [specific project], resulting in
                    [specific achievement].
                    <br />
                    - Collaborated with design and product teams on interactive
                    web applications.
                    <br /> - Introduced unit testing, improving code reliability
                    by 30%.
                  </Typography>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Blog Posts */}
        <Grid item md={6} sm={12} xs={12} style={{ display: "flex" }}>
          <HoverLinkCard
            href="/blog"
            title="Blog"
            description="Insights, tutorials, and my two cents on tech."
            descriptionLineTwo="Peek into my thoughts, one post at a time."
          />
        </Grid>

        {/* Contact Me */}
        <Grid item md={6} sm={12} xs={12} style={{ display: "flex" }}>
          <HoverLinkCard
            href="/contact"
            title="Contact"
            description="Have a project in mind? Let's collaborate."
            descriptionLineTwo="Reach out, and let's build something great together."
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
