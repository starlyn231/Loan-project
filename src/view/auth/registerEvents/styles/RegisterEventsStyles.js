import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import COLORS from '../../../../themes/Colors';
import FONTS_FAMILY from '../../../../themes/FontsFamily';
import Button from '@mui/material/Button';


export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'

  // minHeight: '100vh',

});
export const Title = styled('h1')({
  margin: '20px 0 20px 0',
  color: '#1D1D1D',
  fontWeight: 700,

  fontFamily: 'Mont',
  lineHeight: '40px',
  letterSpacing: '0.1em',
  '@media (min-width:320px)': {
    fontSize: '17px',
  },
  '@media (min-width:768px)': {
    fontSize: '  18px',
  },
  '@media (min-width:1200px)': {
    fontSize: '20px',
  },
});


export const BodyText = styled('p')({
  margin: 0,
  color: '#8E8E90',
  //fontWeight: 400,
  lineHeight: '22px',
  fontFamily: 'Poppins',
  '@media (min-width:320px)': {
    fontSize: '12px',
  },
  '@media (min-width:768px)': {
    fontSize: ' 15px',
  },
  '@media (min-width:1200px)': {
    fontSize: '16px',
  },
});


export const TextFieldContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});



export const ButtonContainer = styled('div')(props => ({

  display: 'flex', alignSelf: 'center',

  '@media (min-width:768px)': {
    width: '150px',
    backgroundColor: 'yelow',
  },
  '@media (min-width:1200px)': {
    width: '270px'
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
    width: "45px",
  },
  "@media (min-width:1200px)": {
    width: "75px",
    margin: 0
  },

  "@media (min-width:1800px)": {
    width: "75px",
  },
});
