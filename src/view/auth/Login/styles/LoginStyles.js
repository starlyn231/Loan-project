import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import COLORS from '../../../../themes/Colors';
import FONTS_FAMILY from '../../../../themes/FontsFamily';
import Button from '@mui/material/Button';





export const TextFieldContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 0,


});



export const ButtonContainer = styled('div')(props => ({

  display: 'flex', alignSelf: 'center',

  '@media (min-width:768px)': {
    width: '150px',
    backgroundColor: 'yelow',
  },
  '@media (min-width:1200px)': {
    width: '230px'
  },

}))



export const ButtonAuthContainer = styled('div')(props => ({


  '@media (min-width:320px)': {
    width: '33%',
  },
  '@media (min-width:768px)': {
    width: '33%',

  },
  '@media (min-width:1200px)': {
    width: '33%',
  },

}))


export const ButtonAuth = styled(Button)(props => ({
  border: '1.5px solid #1D1D1D',
  borderRadius: ' 50px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  width: '100%',

  lineHeight: '24px',
  color: props.color === 'white' ? COLORS.white : 'black',
  backgroundColor: props.backgroundColor === 'black' ? COLORS.primary : 'transparent',
  cursor: ' pointer',
  //margin: '2px',
  ':hover': {
    color: 'black'
  },

  '@media (min-width:320px)': {
    fontSize: '13px',
  },
  '@media (min-width:768px)': {
    fontSize: '11px',
  },
  '@media (min-width:1200px)': {
    fontSize: '15px',
  },

}))
export const Image = styled("img")({
  // marginRight: '3px',
  ':hover': {
    // cursor: 'pointer',
  },
  "@media (min-width:320px)": {
    // width: "50px",
    // marginBottom: '10px',
  },
  "@media (min-width:768px)": {
    // width: "35px",
  },
  "@media (min-width:1200px)": {
    // width: "45px",
  },

  "@media (min-width:1800px)": {
    width: "45px",
  },
});
export const LinkText = styled(Link)({
  color: COLORS.primary,
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  fontFamily: FONTS_FAMILY.bold.body,
  margin: '3px',
  letterSpacing: '-0.25',
  textDecoration: 'none'
});