import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import COLORS from '../../../../themes/Colors';
import FONTS_FAMILY from '../../../../themes/FontsFamily';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


export const Container = styled("div")({
  display: "flex",
  width: "100vw",
  position: "relative",
    minHeight: "100vh",
  background:
    'linear-gradient( rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5) ), url("https://images.pexels.com/photos/4968637/pexels-photo-4968637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&h=650&w=940")   center',
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
  "@media only screen and  (max-width:680px)": {},
});

export const Wrapper =  styled('div')(({ theme }) => ({
  display:'flex',
  width: ' 25%',
  padding: '20px',
  backgroundColor: 'white',
  alignItems: "center",
  flexDirection:'column',
padding: '40px 30px 30px 30px',
  borderRadius: '10px',
//  background: 'linear-gradient(90deg, #5D54A4, #7C78B8)',
  boxShadow: '0px 0px 24px #5C5696',
background:'#E3F4F4', 
 // boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',

  "@media (min-width:320px)": {
    width: "75%",
  },
  "@media (min-width:768px)": {
    width: "50%",
    // height: "50%",
  },
  "@media (min-width:1200px)": {
    width: "30%",

  }

}));


export const Form = styled("form")({
  display: 'flex',
  flexDirection: 'column',
 
});
export const Input = styled(TextField)({
 

});

export const ButtonLogin = styled(Button)((props) => ({

  width: '100%',
  padding: "15px 20px",
  border: 'none',
  color: "white",
  //backgroundColor: (theme) =>  `${theme.palette.primary.main}!important`,

  cursor: "pointer",
  color: 'white',
  fontWeight: 500,
  marginBottom: '10px',
  '&:disabled': {

    cursor: 'not-allowed',
    padding: "22px 22px",
  }



  
  //color: props.disabled === false ? "red" : "blue",
  //disabledprops.type === "filled" ? "black" : "transparent",

  //cursor:props.disabled === false ? "red" : "blue"
}));

export const LinkText = styled(Link)({
  margin: '5px 0px',
  fontsize: '12px',
  textDecoration: 'underline',
  cursor: 'pointer'
})


export const Error = styled('span')({
  color: 'red',
  fontSize: '15px',
  fontWeight: 'bold',
  margin: '0'
})




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
/*
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

*/