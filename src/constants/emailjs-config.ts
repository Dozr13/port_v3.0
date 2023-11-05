import apiKeys from "../api/.secret/apiKeys";
import { InitialContactForm } from "../types/initial-types";

export const EMAIL_JS_CONFIG = {
  SERVICE_ID: apiKeys.SERVICE_ID,
  TEMPLATE_ID: apiKeys.TEMPLATE_ID,
  PUBLIC_KEY: apiKeys.PUBLIC_KEY,
};

export const INITIAL_FORM_VALUES: InitialContactForm = {
  name: "",
  email: "",
  message: "",
};
