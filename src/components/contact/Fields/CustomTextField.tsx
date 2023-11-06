import { TextField } from "@mui/material";
import grey from "@mui/material/colors/grey";
import { styled } from "@mui/system";

const defaultColor = grey[500];

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: defaultColor, // replace with the color you want for the focused state
    },
  },
  "& .MuiInputLabel-outlined": {
    "&.Mui-focused": {
      color: defaultColor, // replace with the color you want for the label when the field is focused
    },
  },
});

export default StyledTextField;
