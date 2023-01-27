
import { styled } from '@mui/system';
import COLORS from '../../../themes/Colors';
import FONTS_FAMILY from '../../../themes/FontsFamily';

export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'GrayText'

});

export const IconTicketImg = styled("img")({
  marginRight: '10px',
  "@media (min-width:320px)": {
    width: "60px",

  },
  "@media (min-width:768px)": {
    width: "80px",
  },
  "@media (min-width:1200px)": {
    width: "112px",
  },
});