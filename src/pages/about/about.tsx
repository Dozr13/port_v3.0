import Typography from "@mui/material/Typography";
import Header from "../../components/header";
import StyledContainer from "../../components/styled-container";
import StyledPaper from "../../components/styled-paper";
import SubHeader from "../../components/sub-header";

const About = () => {
  return (
    <StyledContainer>
      <Header />
      <StyledPaper elevation={3}>
        <SubHeader variant="h4">The Journey from Oilfields to Code</SubHeader>
        <Typography variant="body1" paragraph>
          I began my professional career in the oilfields, where hard work,
          precision, and resilience were the keys to success. These years gave
          me valuable lessons on teamwork, problem-solving, and the importance
          of continually adapting to new challenges.
        </Typography>
        <Typography variant="body1" paragraph>
          During this time, I found a passion for technology and coding. I was
          fascinated by how software engineering allows you to build something
          from nothing, using just a computer and a strong sense of logic. This
          interest soon turned into a deep-seated passion, and I decided to
          pivot my career and chase my dreams.
        </Typography>
        <Typography variant="body1" paragraph>
          I&apos;m excited to apply my unique skill set to a team that values
          hard work, innovation, and creativity. If you&apos;re looking for a
          developer who can bring not just coding skills but a diverse range of
          life experiences to the table, you&apos;ve come to the right place.
        </Typography>
      </StyledPaper>
    </StyledContainer>
  );
};

export default About;
