"use client";
import { Box, Grid, Typography } from "@mui/material";

import HoverCard from "../components/cards/hover-card";
import Chatbot from "../components/chatbot/chat-bot";
import Footer from "../components/footer";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../constants/color-palette";

export default function Home() {
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
      {/* Introduction */}
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          background: SECONDARY_BACKGROUND_COLOR,
          textAlign: "center",
          mb: 4,
          p: 4,
          pb: 8,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: PRIMARY_COLOR,
            mb: 2,
            "@media (max-width:600px)": {
              fontSize: "2.5rem",
            },
          }}
        >
          Hi, I&apos;m Wade!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: PRIMARY_COLOR,
            "@media (max-width:600px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          Welcome to my Portfolio
        </Typography>
      </Box>

      {/* Grid Intro Parts */}
      <Grid container spacing={4}>
        {/* About Me */}

        {/* Projects */}
        <Grid item md={12} sm={12} xs={12}>
          <HoverCard
            href="/projects"
            title="Projects"
            description="Dive deep into my diverse project portfolio, showcasing my mastery over React, TypeScript, GraphQL, and more."
            descriptionLineTwo="I constantly update and refine my projects. Through them, witness the seamless fusion of Material UI, offering both functionality and a delightful user experience."
          />
        </Grid>

        {/* Blog Posts */}
        {/* <Grid item md={6} sm={12} xs={12}>
          <HoverCard
            href="/blog"
            title="Blog"
            description="Insights, tutorials, and my two cents on tech."
            descriptionLineTwo="Peek into my thoughts, one post at a time."
          />
        </Grid> */}

        <Grid item md={6} sm={12} xs={12}>
          <HoverCard
            href="/about"
            title="About Me"
            description={[
              "Hi there! I'm Wade,",
              <br key="line-break-1" />,
              "a passionate full-stack developer skilled in React TypeScript, GraphQL, and much more.",
              <br key="line-break-2" />,
              "I have a strong affinity for Material UI when it comes to styling.",
              <br key="line-break-3" />,
              "Dive in to know more about my journey and skills.",
            ]}
          />
        </Grid>
        {/* // TODO: Add a photo or avatar */}

        {/* Contact Me */}
        <Grid item md={6} sm={12} xs={12}>
          <HoverCard
            href="/contact"
            title="Contact"
            description="Looking for an expert in React, TypeScript, and GraphQL? You've found your guy."
            descriptionLineTwo="Whether it's a budding idea or a complex challenge, I thrive in transforming concepts into reality. Drop me a line, and let's embark on a new journey together. Your vision, my expertise – together, we can create the extraordinary."
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} sx={{ pt: 4 }}>
          <Chatbot />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
