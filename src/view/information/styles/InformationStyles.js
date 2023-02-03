
import { styled } from '@mui/system';
import COLORS from '../../../themes/Colors';
import FONTS_FAMILY from '../../../themes/FontsFamily';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1920px',
  alignItems: 'center',

});

export const BodyText = styled('p')({
  margin: 0,
  color: '#1D1D1D',
  letterSpacing: '0.1em',
  fontWeight: 400,
  lineHeight: '24px',
  fontFamily: 'Inter',
  '@media (min-width:320px)': {
    fontSize: '14px',
  },
  '@media (min-width:768px)': {
    fontSize: ' 16px',
  },
  '@media (min-width:1200px)': {
    fontSize: '20px',
  },
});

export const ButtonContainer = styled('div')(props => ({
  marginRight: '5px',
  display: 'flex', alignSelf: 'center',
  '@media (min-width:320px)': {
    width: '100%',
  },
  '@media (min-width:768px)': {
    width: '170px',

  },
  '@media (min-width:1200px)': {
    width: '180px'
  },

}))
