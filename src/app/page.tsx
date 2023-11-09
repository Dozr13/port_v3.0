import { Grid } from "@mui/material";
import profileImage from "../../public/assets/images/self-picture.jpg";
import { GridItemWrapper, PageContainer } from "../components/containers";
import {
  AboutIntroCard,
  ContactIntroCard,
  ProjectsIntroCard,
} from "../components/home";

export default function Home() {
  return (
    <PageContainer
      mainMessage="Hi, I'm Wade!"
      secondaryMessage="Welcome to my Portfolio"
      pageImage={profileImage}
    >
      <Grid container spacing={8}>
        <GridItemWrapper md={4}>
          <ProjectsIntroCard />
        </GridItemWrapper>

        <GridItemWrapper md={4}>
          <AboutIntroCard />
        </GridItemWrapper>

        <GridItemWrapper md={4}>
          <ContactIntroCard />
        </GridItemWrapper>
      </Grid>
    </PageContainer>
  );
}
