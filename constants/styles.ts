import { MID_GROUND_COLOR, PRIMARY_COLOR } from "./color-palette";

const containerStyles = {
  padding: "16px",
  backgroundColor: "lightgray",
};

const titleStyles = {
  color: "blue",
  textAlign: "center",
};

const paragraphStyles = {
  fontSize: "14px",
  lineHeight: "1.5",
};

export const cardStyle = {
  backgroundColor: MID_GROUND_COLOR,
  borderRadius: 4,
  p: 4,
  color: PRIMARY_COLOR,
};

export const flexGrowStyle = { flexGrow: 1 };

export const typographyStyles = {
  color: PRIMARY_COLOR,
  m: 8,
  textAlign: "center",
  "@media (max-width:600px)": {
    m: 2,
  },
};

export const chatLinkStyle = {
  color: "#0d6efd",
  textDecoration: "none",
};
