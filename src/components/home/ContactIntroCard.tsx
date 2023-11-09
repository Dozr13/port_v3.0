import HoverCard from "../HoverCard";

const descriptionWithDividers = `
  Commanding React, TypeScript, Nest.js, and PostgreSQL with finesse, I'm the tech maestro you're seeking.
  ---divider---
  Let's convert your ideas into impactful realities. Connect with me, and we'll embark on a journey to craft digital excellence. Together, we'll achieve the remarkable.
`;

const ContactIntroCard = () => {
  return (
    <HoverCard
      href="/contact"
      title="Let's Connect"
      description={descriptionWithDividers}
    />
  );
};

export default ContactIntroCard;
