import { Grid } from "@mui/material";
import { flexGrowStyle } from "../../../constants/style";
import HoverCard from "../../components/HoverCard";
import PageContainer from "../../components/PageContainer";

export default function Page() {
  return (
    <PageContainer
      mainMessage="About Wade"
      secondaryMessage="Discover my Journey and Skills"
    >
      <Grid container spacing={4}>
        <Grid container item spacing={4} alignItems="stretch">
          <Grid item md={6} sm={12} xs={12} style={flexGrowStyle}>
            <HoverCard
              title="Skills"
              description={
                <>
                  <strong>Languages & Frameworks:</strong>
                  <br />- React & Next.js for advanced UI/UX, TypeScript for
                  type-checking.
                  <br />- GraphQL with Apollo Client for API management.
                  <br />- Vue.js, Nuxt for component architecture & Vuex.
                  <br />
                  <br />
                  <strong>Libraries & Tools:</strong>
                  <br />- Material UI for UI components, Tailwind CSS & SASS for
                  styles.
                  <br />- Firebase: Auth, Firestore, and cloud functions.
                  <br />
                  <br />
                  <strong>Dev Practices:</strong>
                  <br />- Responsive Design, SEO Optimization with meta tags and
                  SSR.
                  <br />- Performance Tuning: Lazy loading, code splitting,
                  asset optimization.
                  <br />
                </>
              }
            />
          </Grid>

          <Grid item md={6} sm={12} xs={12} style={flexGrowStyle}>
            <HoverCard
              id="skills-and-experience"
              title="Experience"
              description={
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
                </>
              }
            />
          </Grid>
        </Grid>
        <Grid item md={12} xs={12}>
          <HoverCard
            title="Key Achievements"
            description={
              <>
                - Successfully delivered end-to-end web applications, always
                ahead of schedule, at Hidden Mountain Data.
                <br />
                - Cultivated exemplary collaborations with multiple firms,
                consistently meeting and exceeding expectations.
                <br />
                - Became an essential go-to figure for juniors, mentoring them
                to enhance productivity.
                <br />
                - Contributing to company growth as well as .
                <br />
                - Developed and deployed a company-wide tool using React
                TypeScript, which boosted team productivity by 25%.
                <br />- Consistently received feedback for excellent
                problem-solving skills, with a knack for identifying and
                rectifying potential pitfalls early in the development process.
              </>
            }
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <HoverCard
            id="journey-from-oilfields"
            title="The Journey from Oilfields to Code"
            description={
              <>
                I began my professional career in the oilfields, where hard
                work, precision, and resilience were the keys to success. These
                years gave me valuable lessons on teamwork, problem-solving, and
                the importance of continually adapting to new challenges.
                <br />
                <br />
                During this time, I found a passion for technology and coding. I
                was fascinated by how software engineering allows you to build
                something from nothing, using just a computer and a strong sense
                of logic. This interest soon turned into a deep-seated passion,
                and I decided to pivot my career and chase my dreams.
                <br />
                <br />
                I&apos;m excited to apply my unique skill set to a team that
                values hard work, innovation, and creativity. If you&apos;re
                looking for a developer who can bring not just coding skills but
                a diverse range of life experiences to the table, you&apos;ve
                come to the right place.
              </>
            }
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
