
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import COLORS from '../../../themes/Colors';
import Button from '@mui/material/Button';

export const Container = styled('div')({
  /*display: 'flex',
  height: '60vh',
  minWidth: ' 280px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fcf5f5',
  alignItems: 'center',
  flexDirection: 'column',*/



  backgroundColor: COLORS.primary,
  display: 'flex',
  '@media only screen and  (max-width:680px)': {
    display: 'flex',

    flexDirection: "column"
  },
});

export const Left = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: "column",
  padding: '20px',

})

export const Logo = styled('h1')({

})

export const Desc = styled('p')({
  display: 'flex',
  color: COLORS.white,
  fontWeight: 400,
  fontSize: '14px',
  LineHeight: '22.4px',
  fontFamily: 'Abel'

})
export const SocialContainer = styled("div")({
  //  background: 'blue',
  display: 'flex'
})

export const SocialIcon = styled("div")((props) => ({
  // backgroundColor: 'red',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  color: COLORS.primary,
  backgroundColor: props.color,
  //backgroundColor: #${(props) => props.color};
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '20px',
}))

export const Center = styled('div')({
  flex: 1,
  padding: '20px',

  '@media only screen and  (max-width:380px)': {
    display: "none"
  },
  //${mobile({ display: "none" })}
})

export const Title = styled('h3')({
  marginBottom: '30px',
  color: COLORS.white

})

export const List = styled('ul')({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap'
})

export const ListItem = styled('li')({
  width: '50%',
  marginBottom: '10px'
})

export const Right = styled('div')({
  flex: 1,
  padding: '20px',

  '@media only screen and  (max-width:380px)': {
    backgroundColor: "#fff8f8"
  },
  //${mobile({ backgroundColor: "#fff8f8" })}
})

export const ContactItem = styled('div')({
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  color: COLORS.white
})

export const Payment = styled('img')({
  width: '50%',

})

export const Image = styled("img")({
  ':hover': {
    cursor: 'pointer',
  },
  "@media (min-width:320px)": {
    width: "120px",
    marginBottom: '10px',
  },
  "@media (min-width:768px)": {
    width: "120px",
  },
  "@media (min-width:1200px)": {
    width: "130px;",
  },
});


export const SearchTextInput = styled(TextField)({

  alignSelf: 'center',
  borderWidth: '5px',
  color: COLORS.gray,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  '& .MuiInputBase-input ': {


    backgroundColor: COLORS.white,
    padding: 10,
    color: COLORS.gray,
    borderRadius: '50px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: COLORS.white,
      borderRadius: '50px',
      backgroundColor: COLORS.white,
      minHeight: '45px',
      color: COLORS.black,
    },
    '&:hover fieldset': {
      borderColor: COLORS.white,
      color: COLORS.white,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.white,
      borderWidth: '1px',
    },
  },
});

export const ButtonSearch = styled(Button)({
  border: '1.5px solid #1D1D1D',
  borderRadius: ' 50px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  // width: '292px',
  //height: '60px',
  //padding: '15px 30px 15px 30px',
  zIndex: 500,
  lineHeight: '24px',
  color: COLORS.white,
  backgroundColor: '#407ECC',
  cursor: ' pointer',
  // margin: '2px',

  '@media (min-width:320px)': {
    fontSize: '12px',
  },
  '@media (min-width:768px)': {
    fontSize: '13.5px',
  },
  '@media (min-width:1200px)': {
    fontSize: '15px',
  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {
    backgroundColor: COLORS.primary,
    color: COLORS.white
  }
});
