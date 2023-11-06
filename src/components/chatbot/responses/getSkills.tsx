import { Fragment } from "react";
import { chatLinkStyle } from "../../../../constants/styles";
import Link from "next/link";

const getSkills = () => {
  return (
    <Fragment>
      I&apos;m proficient in React, TypeScript, NestJS for backend solutions,
      and data management. I prioritize elegant styling with Material UI.
      <br />
      <Link href="/about#skills" style={chatLinkStyle}>
        Discover more.
      </Link>
    </Fragment>
  );
};

export default getSkills;
