"use client";
import { Box, Grid, Typography } from "@mui/material";
import HoverLinkCard from "../../components/cards/hover-card";
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

      <Grid container spacing={4}>
        {/* Personal Story */}
        <Grid item md={6} xs={12}>
          <HoverLinkCard
            title="My Journey"
            description={
              "Starting off in the rugged terrains of the oilfields, I quickly evolved from a rig hand to a rig operator, mastering leadership in the face of consistent 110-120 hour weeks. Yet, the winds of change pushed me towards a new horizon: software engineering. Immersing myself headfirst, I proficiently wielded tools like React TypeScript, Next.js, Node.js, and PostgreSQL. My styling finesse with MUI, CSS, and SASS adds flair to every project, ensuring both robustness and aesthetics. My time at In Time Tec was a testament to this growth, and at Hidden Mountain Data, I've further amplified their mission with my tech prowess. As I stand at this juncture, I'm primed and eager to tackle new challenges, looking forward to a place where I can further enrich my journey and deliver unparalleled value."
            }
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <HoverLinkCard
            title="Key Achievements"
            description={[
              "- Successfully delivered end-to-end web applications, always ahead of schedule, at Hidden Mountain Data.",
              <br key="br1" />,
              "- Cultivated exemplary collaborations with multiple firms, consistently meeting and exceeding expectations.",
              <br key="br2" />,
              "- Became an essential go-to figure for juniors, mentoring them to enhance productivity.",
              <br key="br3" />,
              "- Contributing to company growth as well as .",
              <br key="br4" />,
              "- Developed and deployed a company-wide tool using React TypeScript, which boosted team productivity by 25%.",
              <br key="br5" />,
              "- Consistently received feedback for excellent problem-solving skills, with a knack for identifying and rectifying potential pitfalls early in the development process.",
            ]}
          />
        </Grid>

        <Grid item md={12} xs={12}>
          {/* <Card
            sx={{
              backgroundColor: MID_GROUND_COLOR,
              borderRadius: 10,
              padding: 4,
              color: "#e4f5ff",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                The Journey from Oilfields to Code
              </Typography>
              <Typography variant="body1" paragraph>
                I began my professional career in the oilfields, where hard
                work, precision, and resilience were the keys to success. These
                years gave me valuable lessons on teamwork, problem-solving, and
                the importance of continually adapting to new challenges.
              </Typography>
              <Typography variant="body1" paragraph>
                During this time, I found a passion for technology and coding. I
                was fascinated by how software engineering allows you to build
                something from nothing, using just a computer and a strong sense
                of logic. This interest soon turned into a deep-seated passion,
                and I decided to pivot my career and chase my dreams.
              </Typography>
              <Typography variant="body1" paragraph>
                I&apos;m excited to apply my unique skill set to a team that
                values hard work, innovation, and creativity. If you&apos;re
                looking for a developer who can bring not just coding skills but
                a diverse range of life experiences to the table, you&apos;ve
                come to the right place.
              </Typography>
            </CardContent>
          </Card> */}
          <HoverLinkCard
            title="The Journey from Oilfields to Code"
            description={[
              "I began my professional career in the oilfields, where hard work, precision, and resilience were the keys to success. These years gave me valuable lessons on teamwork, problem-solving, and the importance of continually adapting to new challenges.",
              <br key="br1" />,
              "During this time, I found a passion for technology and coding. I was fascinated by how software engineering allows you to build something from nothing, using just a computer and a strong sense of logic. This interest soon turned into a deep-seated passion, and I decided to pivot my career and chase my dreams.",
              <br key="br2" />,
              <br key="br3" />,
              "I'm excited to apply my unique skill set to a team that values hard work, innovation, and creativity. If you're looking for a developer who can bring not just coding skills but a diverse range of life experiences to the table, you've come to the right place.",
            ]}
          />
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
