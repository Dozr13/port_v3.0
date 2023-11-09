import contactImage from "../../../public/assets/images/contact.jpg";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import { PageContainer } from "../../components/containers";
import Layout from "./layout";

export default function Page() {
  return (
    <Layout>
      <PageContainer
        mainMessage="Let's talk."
        secondaryMessage="If you have any questions, thoughts, or just want to say hi, drop me a line below. I look forward to connecting!"
        pageImage={contactImage}
      >
        <ContactForm />
      </PageContainer>
    </Layout>
  );
}
