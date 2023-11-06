import Link from "next/link";
import { Fragment } from "react";
import { chatLinkStyle } from "../../../../constants/styles";

const getAboutMe = () => (
  <Fragment>
    I began in oilfields, learning teamwork, drive to work efficiently, and
    problem-solving. Later, I transitioned to software engineering.
    <br />
    <br />
    Want to know the full story?
    <br />
    <Link href="/about#journey-from-oilfields" style={chatLinkStyle}>
      About Me
    </Link>
  </Fragment>
);

export default getAboutMe;
