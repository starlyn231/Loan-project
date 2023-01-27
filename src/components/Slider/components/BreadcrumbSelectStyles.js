
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import COLORS from "../../../themes/Colors";

export const SearchTextInput = styled(TextField)({
  /*width: '100%',
  alignSelf: 'center',
  borderWidth: '5px',*/

  color: COLORS.white,
  '& .MuiInputBase-input ': {
    width: '100%',
    fontSize: '17px',


    padding: 10,
    color: COLORS.white,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      outline: 0,
      border: 'none',
      borderBottom: '0.5px solid white',
      borderWidth: '0 0 1px',
      //borderColor: 'white',
      minHeight: '45px',
      borderBottomColor: 'white',
      color: COLORS.white,
    },
    '&:hover fieldset': {

      color: COLORS.white,
    },
    '&.Mui-focused fieldset': {
      outline: 0,
      border: 'none',
      //borderBottom: '1px solid #1890ff',
      borderWidth: '0 0 2px',
      borderColor: COLORS.white,

    },
  },
});