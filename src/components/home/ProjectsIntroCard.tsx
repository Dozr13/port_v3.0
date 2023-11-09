import HoverCard from "../HoverCard";

const descriptionWithDividers = `
Take a closer look at my diverse project portfolio, showcasing my mastery over React, TypeScript, PostgreSQL, and more.
---divider---
I constantly update and refine my projects. Through them, witness the seamless fusion of Material UI, offering both functionality and a delightful user experience.
`;

const ProjectsIntroCard = () => {
  return (
    <HoverCard
      href="/projects"
      title="Projects"
      description={descriptionWithDividers}
    />
  );
};

export default ProjectsIntroCard;
