import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorContainer from "../ErrorContainer/ErrorContainer";
import StyledTextField from "./CustomTextField";

const MessageField: React.FC = () => {
  return (
    <>
      <Field
        as={StyledTextField}
        fullWidth
        multiline
        rows={4}
        id="message"
        name="message"
        label="Message"
        variant="outlined"
      />
      <ErrorContainer>
        <ErrorMessage name="message" component="div" />
      </ErrorContainer>
    </>
  );
};

export default MessageField;
