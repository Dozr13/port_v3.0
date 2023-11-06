import Link from "next/link";
import { Fragment } from "react";
import { chatLinkStyle } from "../../../../constants/styles";

const getContact = () => {
  return (
    <Fragment>
      I&apos;m happy to chat, reach out at:
      <br />{" "}
      <Link href="/contact" key={"about-link"} style={chatLinkStyle}>
        Contact Form
      </Link>
    </Fragment>
  );
};

export default getContact;
