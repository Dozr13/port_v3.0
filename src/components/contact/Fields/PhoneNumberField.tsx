import { Box, Slide } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { PhoneNumberFieldProps } from "../../../types/InitialTypes";
import { theme } from "../../../utils/theme";
import ErrorContainer from "../ErrorContainer/ErrorContainer";
import StyledTextField from "./CustomTextField";

const PhoneNumberField = ({ showEmail }: PhoneNumberFieldProps) => {
  console.log("PhoneNumberField showEmail", showEmail);
  return (
    <Slide
      in={!showEmail}
      direction="left"
      mountOnEnter
      unmountOnExit
      style={{
        transition: theme.transitions.easing.easeInOut,
        position: "absolute",
        width: "100%",
      }}
    >
      <Box style={{ width: "95%" }}>
        <Field
          as={StyledTextField}
          fullWidth
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          variant="outlined"
          placeholder="+1 234-567-8901"
        />
        <ErrorContainer>
          <ErrorMessage name="phone" component="div" />
        </ErrorContainer>
      </Box>
    </Slide>
  );
};

export default PhoneNumberField;
