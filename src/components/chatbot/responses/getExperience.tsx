import Link from "next/link";
import { Fragment } from "react";
import { chatLinkStyle } from "../../../../constants/styles";

const getExperience = () => (
  <Fragment>
    I&apos;ve been a full stack developer for 3 years, focusing on React,
    TypeScript, Next, Node, and PostgreSQL.
    <br />
    <Link
      href="/about#experience"
      key={"experience-link"}
      style={chatLinkStyle}
    >
      More about experience
    </Link>
  </Fragment>
);

export default getExperience;
