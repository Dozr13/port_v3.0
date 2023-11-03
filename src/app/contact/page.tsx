"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import Footer from "../../components/footer";
import { validationSchema } from "../../components/form/validation";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../constants/color-palette";

export default function Page() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        background: `linear-gradient(to top,  ${BACKGROUND_COLOR}, ${SECONDARY_BACKGROUND_COLOR}, rgba(255,255,255,0.1))`,
        "@media (max-width:600px)": {
          backgroundColor: "transparent",
          flexGrow: 0,
        },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          background: SECONDARY_BACKGROUND_COLOR,
          textAlign: "center",
          mb: 4,
          p: 4,
          pb: 8,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: PRIMARY_COLOR,
            mb: 2,
            "@media (max-width:600px)": {
              fontSize: "2.5rem",
            },
          }}
        >
          It&apos;s been great having you here.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: PRIMARY_COLOR,
            "@media (max-width:600px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          If you have any questions, thoughts, or just want to say hi, drop me a
          line below. Look forward to connecting!
        </Typography>
      </Box>
      <Card
        sx={{
          mt: 5,
          mx: "auto",
          width: "60%",
          backgroundColor: PRIMARY_COLOR,
          borderRadius: 10,
          "@media (max-width:600px)": {
            width: "100%",
          },
        }}
      >
        <CardContent>
          <Typography variant="h4" component="div" align="center">
            Contact Me
          </Typography>

          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              fetch("/api/send-email", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }).then((response) => {
                if (response.ok) {
                  alert("Email sent successfully");
                } else {
                  alert("Error sending email");
                }
              });
            }}
          >
            {(formik) => (
              <Form>
                <Box mt={3}>
                  <Field
                    as={TextField}
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                  />
                </Box>

                <Box mt={3}>
                  <Field
                    as={TextField}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                  />
                </Box>

                <Box mt={3}>
                  <Field
                    as={TextField}
                    fullWidth
                    multiline
                    rows={4}
                    id="message"
                    name="message"
                    label="Message"
                    variant="outlined"
                  />
                </Box>

                <Box sx={{ mt: 3, alignContent: "center" }}>
                  <Button color="secondary" variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>

      <Footer />
    </Box>
  );
}
