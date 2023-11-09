import HoverCard from "../HoverCard";

const descriptionWithDividers = `
I began my professional career in the oilfields, where hard work,
          precision, and resilience were the keys to success. These years gave
          me valuable lessons on teamwork, problem-solving, and the importance
          of continually adapting to new challenges.
          <br />
          <br />
          During this time, I found a passion for technology and coding. I was
          fascinated by how software engineering allows you to build something
          from nothing, using just a computer and a strong sense of logic. This
          interest soon turned into a deep-seated passion, and I decided to
          pivot my career and chase my dreams.
          <br />
          <br />
          I&apos;m excited to apply my unique skill set to a team that values
          hard work, innovation, and creativity. If you&apos;re looking for a
          developer who can bring not just coding skills but a diverse range of
          life experiences to the table, you&apos;ve come to the right place.
`;

const JourneyCard = () => {
  return (
    <HoverCard
      id="journey-from-oilfields"
      title="The Journey from Oilfields to Code"
      description={descriptionWithDividers}
      useRawDescription
    />
  );
};

export default JourneyCard;
