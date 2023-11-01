import { Box, Button, TextField } from "@mui/material";
import { Form, useFormik } from "formik";
import { validationSchema } from "./validation";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle the form submission, e.g., send the data to an API or service
      console.log("Form data", values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Box mt={3}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Box>

      <Box mt={3}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>

      <Box mt={3}>
        <TextField
          fullWidth
          multiline
          rows={4}
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
      </Box>

      <Box sx={{ mt: 3, alignContent: "center" }}>
        <Button color="secondary" variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Form>
  );
};

export default ContactForm;
