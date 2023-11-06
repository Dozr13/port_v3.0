import HoverCard from "../HoverCard";

const AboutIntroCard = () => {
  return (
    <HoverCard
      href="/about"
      title="About Me"
      description={[
        "Hi there! I'm Wade,",
        <br key="line-break-1" />,
        "I'm a passionate full-stack developer skilled in React Next with TypeScript, Nest.js, PostgreSQL, and much more.",
        <br key="line-break-2" />,
        "I have a strong affinity for Material UI when it comes to styling.",
        <br key="line-break-3" />,
        "Dive in to know more about my journey and skills.",
      ]}
    />
  );
};

export default AboutIntroCard;
