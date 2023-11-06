import HoverCard from "../HoverCard";

const ExperienceCard = () => {
  return (
    <HoverCard
      id="skills-and-experience"
      title="Experience"
      description={
        <>
          <strong>
            Full Stack Developer at Hidden Mountain Data – Meridian, Idaho
          </strong>
          <br />
          (July 2023 – Present)
          <br />
          - Redesigned [specific website], achieving a 15% increase in daily
          visitors.
          <br />
          - Optimized website performance, decreasing load times by 25%.
          <br />
          - Mentored junior developers, enhancing team productivity.
          <br />
          <br />
          <strong>Software Engineer at In Time Tec – Meridian, Idaho</strong>
          <br />
          (July 2021 – May 2023)
          <br />
          - Led development of [specific project], resulting in [specific
          achievement].
          <br />
          - Collaborated with design and product teams on interactive web
          applications.
          <br />
          - Introduced unit testing, improving code reliability by 30%.
          <br />
        </>
      }
    />
  );
};

export default ExperienceCard;
