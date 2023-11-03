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
import Header from "../../components/header";
import {
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../constants/color-palette";

export default function Page() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: SECONDARY_BACKGROUND_COLOR,
        padding: 5,
      }}
    >
      <Header />

      <Card
        sx={{
          mt: 5,
          mx: "auto",
          width: "60%",
          backgroundColor: PRIMARY_COLOR,
          borderRadius: 10,
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
              console.log("Form data", values);
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
