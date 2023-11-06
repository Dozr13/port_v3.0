import { Grid } from "@mui/material";

import HoverCard from "../components/HoverCard";
import PageContainer from "../components/PageContainer";

export default function Home() {
  return (
    <PageContainer
      mainMessage="Hi, I'm Wade!"
      secondaryMessage="Welcome to my Portfolio"
    >
      <Grid container spacing={4}>
        {/* Projects */}
        <Grid item md={12} sm={12} xs={12}>
          <HoverCard
            href="/projects"
            title="Projects"
            description="Dive deep into my diverse project portfolio, showcasing my mastery over React, TypeScript, GraphQL, and more."
            descriptionLineTwo="I constantly update and refine my projects. Through them, witness the seamless fusion of Material UI, offering both functionality and a delightful user experience."
          />
        </Grid>

        {/* About Me */}
        <Grid item md={6} sm={12} xs={12}>
          <HoverCard
            href="/about"
            title="About Me"
            description={[
              "Hi there! I'm Wade,",
              <br key="line-break-1" />,
              "I'm a passionate full-stack developer skilled in React Next with TypeScript, Nest.js, PostgreSQL, and much more.",
              <br key="line-break-2" />,
              "I have a strong affinity for Material UI when it comes to styling.",
              <br key="line-break-3" />,
              "Dive in to know more about my journey and skills.",
            ]}
          />
        </Grid>

        {/* Contact Me */}
        <Grid item md={6} sm={12} xs={12}>
          <HoverCard
            href="/contact"
            title="Contact"
            description="Looking for an expert in React, TypeScript, and GraphQL? You've found your guy."
            descriptionLineTwo="Whether it's a budding idea or a complex challenge, I thrive in transforming concepts into reality. Drop me a line, and let's embark on a new journey together. Your vision, my expertise – together, we can create the extraordinary."
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
