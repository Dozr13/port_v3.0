// pages/Home.tsx

import { Grid } from "@mui/material";
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
    >
      <Grid container spacing={4}>
        <GridItemWrapper md={12}>
          <ProjectsIntroCard />
        </GridItemWrapper>

        <GridItemWrapper>
          <AboutIntroCard />
        </GridItemWrapper>

        <GridItemWrapper>
          <ContactIntroCard />
        </GridItemWrapper>
      </Grid>
    </PageContainer>
  );
}
