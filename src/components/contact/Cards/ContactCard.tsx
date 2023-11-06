import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import {
  MID_GROUND_COLOR,
  PRIMARY_COLOR,
} from "../../../../constants/color-palette";
import { INITIAL_FORM_VALUES } from "../../../../constants/emailjs-config";
import { ContactCardProps } from "../../../types/initial-types";
import SubmitContactButton from "../Button/SubmitContactButton";
import { createValidationSchema } from "../ContactForm/validation";
import EmailField from "../Fields/EmailField";
import MessageField from "../Fields/MessageField";
import NameField from "../Fields/NameField";
import PhoneNumberField from "../Fields/PhoneNumberField";
import ToggleEmailSwitch from "../Fields/ToggleEmailSwitch";

const ContactCard = ({
  initialValues,
  onSubmit,
  showEmail,
  setShowEmail,
}: ContactCardProps) => {
  return (
    <Card
      sx={{
        mt: 5,
        mx: "auto",
        p: 4,
        width: "60%",
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 10,
        "@media (max-width:600px)": {
          width: "100%",
        },
      }}
    >
      <CardContent>
        <Typography variant="h4" align="center">
          Contact Me
        </Typography>
      </CardContent>
      <Formik
        initialValues={INITIAL_FORM_VALUES}
        validationSchema={createValidationSchema(showEmail)}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log(formik.errors); // <-- Log this
          return (
            <Form>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <NameField />
                </Grid>

                <Grid item>
                  <ToggleEmailSwitch
                    showEmail={showEmail}
                    onToggle={() => {
                      setShowEmail(!showEmail);
                      formik.validateForm();
                    }}
                  />
                </Grid>

                <Grid
                  item
                  container
                  xs={5}
                  style={{
                    position: "relative",
                    minHeight: "110px",
                    width: "100%",
                  }}
                >
                  <EmailField showEmail={showEmail} />
                  <PhoneNumberField showEmail={showEmail} />
                </Grid>

                <Grid item>
                  <MessageField />
                </Grid>

                <Grid item>
                  {formik.submitCount > 0 && !formik.isValid && (
                    <Typography align="center" sx={{ color: MID_GROUND_COLOR }}>
                      Some fields are missing or invalid.
                    </Typography>
                  )}
                </Grid>

                <Grid item>
                  <SubmitContactButton formik={formik} />
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
};

export default ContactCard;
