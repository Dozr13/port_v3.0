import HoverCard from "../HoverCard";

const descriptionWithDividers = `
  From the precision-driven oilfields to the tech sphere, I channel a relentless work ethic into innovative software solutions. My mantra? Adapt, evolve, and excel.
  ---divider---
  There's a story behind the code - a journey of continuous learning and problem-solving. Curious? Dive into my narrative.
`;

const AboutIntroCard = () => {
  return (
    <HoverCard
      href="/about"
      title="A Bit About Wade"
      description={descriptionWithDividers}
    />
  );
};

export default AboutIntroCard;
