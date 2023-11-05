import * as Yup from "yup";
import { REGEX_PHONE_NUMBER } from "../../constants/regex";

export const createValidationSchema = (showEmail: boolean) => {
  console.log("createValidationSchema showEmail", showEmail);

  return Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: showEmail
      ? Yup.string().email("Invalid email").required("Email is required")
      : Yup.string().notRequired(),
    phone: !showEmail
      ? Yup.string()
          .matches(REGEX_PHONE_NUMBER, "Invalid phone number")
          .required("Phone number is required")
      : Yup.string().notRequired(),
    message: Yup.string().required("Message is required"),
  });
};
