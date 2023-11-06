import Link from "next/link";
import { Fragment } from "react";
import { chatLinkStyle } from "../../../../constants/styles";

const getAchievement = () => (
  <Fragment>
    I pride myself on a track record of successful projects and continuous
    learning.
    <br />
    <Link href="/about#achievements" style={chatLinkStyle}>
      My Achievements
    </Link>
  </Fragment>
);

export default getAchievement;
