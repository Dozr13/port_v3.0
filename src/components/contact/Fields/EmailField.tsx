import { Box, Slide } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { EmailFieldProps } from "../../../types/InitialTypes";
import { theme } from "../../../utils/theme";
import ErrorContainer from "../ErrorContainer/ErrorContainer";
import StyledTextField from "./CustomTextField";

const EmailField = ({ showEmail }: EmailFieldProps) => {
  console.log("EmailField showEmail", showEmail);

  return (
    <Slide
      in={showEmail}
      direction="right"
      style={{
        transition: theme.transitions.easing.easeInOut,
        position: "absolute",
      }}
    >
      <Box style={{ width: "97%" }}>
        <Field
          as={StyledTextField}
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          placeholder="example@email.com"
        />
        {showEmail && (
          <ErrorContainer>
            <ErrorMessage name="email" component="div" />
          </ErrorContainer>
        )}
      </Box>
    </Slide>
  );
};

export default EmailField;
