import { InitialContactForm } from "../types/initial-types";

export const EMAIL_JS_CONFIG = {
  SERVICE_ID:
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "default_service_id",
  TEMPLATE_ID:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "default_template_id",
  PUBLIC_KEY:
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "default_public_key",
};

export const INITIAL_FORM_VALUES: InitialContactForm = {
  name: "",
  email: "",
  message: "",
};
