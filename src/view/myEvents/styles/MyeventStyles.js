
import { styled } from '@mui/system';
import COLORS from '../../../themes/Colors';
import FONTS_FAMILY from '../../../themes/FontsFamily';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1920px',
  alignItems: 'center',


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

export const Title = styled('h1')({
  //margin: '20px 0 20px 0',
  color: '#1D1D1D',
  fontWeight: 600,
  letterSpacing: '-0.5px',
  fontFamily: 'Inter',
  lineHeight: '22px',
  marginBottom: '2rem',
  '@media (min-width:320px)': {
    fontSize: '20px',
  },
  '@media (min-width:768px)': {
    fontSize: '  22px',
  },
  '@media (min-width:1200px)': {
    fontSize: '24px',
  },

  '@media (min-width:1800px)': {
    fontSize: '30px',
  },
});


export const BodyText = styled('p')({
  color: COLORS.primary,
  margin: 0,
  color: '#8E8E90',
  fontWeight: 400,
  lineHeight: '21px',
  fontFamily: 'Inter',
  '@media (min-width:320px)': {
    fontSize: '14px',
  },
  '@media (min-width:768px)': {
    fontSize: ' 17px',
  },
  '@media (min-width:1200px)': {
    fontSize: '19px',
  },
});
export const ButtonContainer = styled('div')(props => ({
  marginRight: '5px',
  display: 'flex', alignSelf: 'center',

  '@media (min-width:768px)': {
    width: '180px',

  },
  '@media (min-width:1200px)': {
    width: '270px'
  },

}))