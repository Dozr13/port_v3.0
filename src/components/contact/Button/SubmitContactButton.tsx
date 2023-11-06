import { Box, Button, CircularProgress } from "@mui/material";
import { FormikProps } from "formik";
import React from "react";
import { MID_GROUND_COLOR } from "../../../../constants/color-palette";
import { InitialContactForm } from "../../../types/initial-types";

interface SubmitContactButtonProps {
  formik: FormikProps<InitialContactForm>;
}

const SubmitContactButton: React.FC<SubmitContactButtonProps> = ({
  formik,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Button
        variant="contained"
        type="submit"
        disabled={formik.isSubmitting}
        sx={{ background: MID_GROUND_COLOR, px: 4, py: 2 }}
      >
        {formik.isSubmitting ? <CircularProgress size={24} /> : "Send"}
      </Button>
    </Box>
  );
};

export default SubmitContactButton;
