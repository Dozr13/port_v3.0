import { Grid } from "@mui/material";

import selfImage from "../../../public/assets/images/me.jpg";
import {
  AchievementsCard,
  ExperienceCard,
  JourneyCard,
  SkillsCard,
} from "../../components/about";
import { GridItemWrapper, PageContainer } from "../../components/containers";

const Page = () => {
  return (
    <PageContainer
      mainMessage="About Me"
      secondaryMessage="Discover my Journey and Skills"
      pageImage={selfImage}
    >
      <Grid container spacing={4}>
        <Grid container item spacing={4} alignItems="stretch">
          <GridItemWrapper>
            <SkillsCard />
          </GridItemWrapper>

          <GridItemWrapper>
            <ExperienceCard />
          </GridItemWrapper>
        </Grid>

        <GridItemWrapper md={12}>
          <AchievementsCard />
        </GridItemWrapper>

        <GridItemWrapper md={12}>
          <JourneyCard />
        </GridItemWrapper>
      </Grid>
    </PageContainer>
  );
};

export default Page;
