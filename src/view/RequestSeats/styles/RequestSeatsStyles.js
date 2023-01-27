
import { styled } from '@mui/system';
import COLORS from '../../../themes/Colors';
import FONTS_FAMILY from '../../../themes/FontsFamily';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1920px',
  alignItems: 'center',

});



export const ContainerIcon = styled('div')({
  padding: '3px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '20%',
  minHeight: '40px',

  background: '#FFFFFF',

  border: `1px solid ${COLORS.lightGray} `,
  borderRadius: '20px',
  color: COLORS.primary,

  '@media (min-width:768px)': {
    width: '190px',

  },
  '@media (min-width:1200px)': {
    width: '270px'
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

export const ButtonGeneral = styled('button')(props => ({
  border: '1.5px solid #1D1D1D',
  borderRadius: ' 50px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  width: '100%',
  fontWeight: 500,
  padding: '10px',
  fontSize: '16px',
  lineHeight: '24px',
  //color: props.color === 'white' ? COLORS.white : 'black',
  color: props.active ? COLORS.white : COLORS.primary,
  backgroundColor: props.active ? COLORS.primary : 'transparent',
  // backgroundColor: props.backgroundColor === 'black' ? COLORS.primary : 'transparent',
  cursor: ' pointer',
  //margin: '2px'

}))

export const TitleCategory = styled('p')({
  fontWeight: 700,
  letterSpacing: '0.1em',
  color: COLORS.fieldGray,
  lineHeight: " 29px",
  margin: 'auto'
});



