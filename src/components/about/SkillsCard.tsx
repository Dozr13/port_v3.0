import HoverCard from "../HoverCard";

const descriptionWithDividers = `
<strong>Languages & Frameworks:</strong>
<br />- React & Next.js for advanced UI/UX, TypeScript for type-checking.
<br />- GraphQL with Apollo Client for API management.
<br />- Vue.js, Nuxt for component architecture & Vuex.
<br />
<br />
<strong>Libraries & Tools:</strong>
<br />- Material UI for UI components, Tailwind CSS & SASS for styles.
<br />- Firebase: Auth, Firestore, and cloud functions.
<br />
<br />
<strong>Dev Practices:</strong>
<br />- Responsive Design, SEO Optimization with meta tags and SSR.
<br />- Performance Tuning: Lazy loading, code splitting, asset optimization.
`;

const SkillsCard = () => {
  return (
    <HoverCard
      id="skills"
      title="Skills"
      description={descriptionWithDividers}
      useRawDescription
    />
  );
};

export default SkillsCard;
