import Link from "next/link";
import { Fragment } from "react";
import { chatLinkStyle } from "../../../../constants/styles";

const getHireMe = () => (
  <Fragment>
    <strong>Why me?</strong> <br /> As a versatile full-stack developer with a
    talent for melding cutting-edge frontend and backend technologies to forge
    high-performing web applications.
    <br />
    <br />
    <strong>Frontend:</strong> Expert in React, Next.js, TypeScript, creating
    seamless user experiences.
    <br />
    <br />
    <strong>Backend:</strong> Deep expertise in NestJS and other backend
    technologies, crafting efficient server-side solutions.
    <br />
    <br />
    <strong>Databases:</strong> Versatile with PostgreSQL, Firebase, and MongoDB
    for robust data management.
    <br />
    <br />
    <strong>Collaboration:</strong> Proven ability to synergize with teams for
    outstanding outcomes.
    <br />
    <br />
    <strong>Innovation:</strong> Dedicated to continuous tech evolution and best
    practices.
    <br />
    <br />
    I&apos;m eager to apply my dynamic capabilities and learning agility to your
    team&apos;s vision.
    <br />
    <Link href="/contact#hire-me" style={chatLinkStyle}>
      Connect Now
    </Link>
  </Fragment>
);

export default getHireMe;
