import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorContainer from "../ErrorContainer/ErrorContainer";
import StyledTextField from "./CustomTextField";

const NameField: React.FC = () => {
  return (
    <>
      <Field
        as={StyledTextField}
        fullWidth
        id="name"
        name="name"
        type="text"
        label="Name"
        variant="outlined"
        sx={{
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000", // Change this to desired color
          },
          "& .Mui-focused MuiInputLabel-outlined": {
            color: "primary.main", // Change this to desired color
          },
        }}
      />
      <ErrorContainer>
        <ErrorMessage name="name" component="div" />
      </ErrorContainer>
    </>
  );
};

export default NameField;
