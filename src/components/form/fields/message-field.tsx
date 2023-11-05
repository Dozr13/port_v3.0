import { TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorContainer from "../error-container";
import StyledTextField from "./custom-text-field";

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
