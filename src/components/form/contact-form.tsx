"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  EMAIL_JS_CONFIG,
  INITIAL_FORM_VALUES,
} from "../../constants/emailjs-config";
import { InitialContactForm } from "../../types/initial-types";
import ContactCard from "../cards/contact-card";
import SuccessCard from "../cards/success-card";

const MySwal = withReactContent(Swal);

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showEmail, setShowEmail] = useState(true);

  const handleSubmit = async (
    values: InitialContactForm,
    { setSubmitting }: any,
  ) => {
    console.log("### Enter handleSubmit");
    try {
      const valuesRecord: Record<string, unknown> = { ...values };

      const result = await emailjs.send(
        EMAIL_JS_CONFIG.SERVICE_ID,
        EMAIL_JS_CONFIG.TEMPLATE_ID,
        valuesRecord,
        EMAIL_JS_CONFIG.PUBLIC_KEY,
      );

      console.log("### EmailJS Result:", result);

      if (result.status === 200 && result.text === "OK") {
        setSubmitted(true);
        MySwal.fire({
          icon: "success",
          title: `Message Sent, I'll get back to you shortly`,
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: `Failed to send message. Status: ${result.status}, Text: ${result.text}`,
        });
      }
    } catch (error) {
      console.error("### Error Sending Email:", error);
      MySwal.fire({
        icon: "error",
        title: "Oops, something went wrong, please try again",
      });
    }
    setSubmitting(false);
  };

  return submitted ? (
    <SuccessCard />
  ) : (
    <ContactCard
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={handleSubmit}
      showEmail={showEmail}
      setShowEmail={setShowEmail}
    />
  );
};

export default ContactForm;
