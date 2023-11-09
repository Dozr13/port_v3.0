import HoverCard from "../HoverCard";

const descriptionWithDividers = `
- Successfully delivered end-to-end web applications, always ahead of schedule, at Hidden Mountain Data.<br/>
- Cultivated exemplary collaborations with multiple firms, consistently meeting and exceeding expectations.<br/>
- Became an essential go-to figure for juniors, mentoring them to enhance productivity.<br/>
- Contributing to company growth as well as.<br/>
- Developed and deployed a company-wide tool using React TypeScript, which boosted team productivity by 25%.<br/>
- Consistently received feedback for excellent problem-solving skills, with a knack for identifying and rectifying potential pitfalls early in the development process.
`;

const AchievementsCard = () => {
  return (
    <HoverCard
      id="achievements"
      title="Key Achievements"
      description={descriptionWithDividers}
      useRawDescription
    />
  );
};

export default AchievementsCard;
