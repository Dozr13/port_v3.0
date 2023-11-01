import { Container } from "@mui/material";
import Header from "../../../components/header";

export default function Page() {
  return (
    <Container
      sx={{
        bgcolor: "#022534",
        color: "#e4f5ff",
        height: "100vh",
        pt: "8rem",
      }}
    >
      <Header />
      <p>SETTINGS</p>
    </Container>
  );
}
