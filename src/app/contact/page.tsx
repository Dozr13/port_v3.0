import { Typography } from "@mui/material";
import { typographyStyles } from "../../../constants/styles";
import contactImage from "../../../public/assets/images/contact.jpg";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import { PageContainer } from "../../components/containers";
import Layout from "./layout";

export default function Page() {
  return (
    <Layout>
      <PageContainer
        mainMessage="Let's connect"
        secondaryMessage="Ready for More? Reach Out Today!"
        pageImage={contactImage}
      >
        <Typography variant="h5" sx={typographyStyles}>
          If you have any questions, thoughts, or just want to say hi, drop me a
          line below. I look forward to connecting!
        </Typography>
        <ContactForm />
      </PageContainer>
    </Layout>
  );
}
