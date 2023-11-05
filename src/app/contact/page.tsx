import ContactForm from "../../components/form/contact-form";
import PageContainer from "../../components/page-container";
import Layout from "./layout";

export default function Page() {
  return (
    <Layout>
      <PageContainer
        mainMessage="It's been great having you here."
        secondaryMessage="If you have any questions, thoughts, or just want to say hi, drop me a line below. I look forward to connecting!"
      >
        <ContactForm />
      </PageContainer>
    </Layout>
  );
}
