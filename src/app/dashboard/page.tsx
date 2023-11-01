import { Container } from "@mui/material";
import { FaCog } from "react-icons/fa";
import Header from "../../components/header";
import IconButton from "../../components/icon-button";

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
      <p>DASHBOARD</p>
      <IconButton labelText="Settings" icon={FaCog} url="/dashboard/settings" />
    </Container>
  );
}
