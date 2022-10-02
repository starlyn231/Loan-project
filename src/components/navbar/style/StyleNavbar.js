import { Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { mobile } from '../../../util/Utility';

//import styled from "styled-components";

export const Container = styled('div')({
  display: "flex",
  flexDirection: "row",
  backgroundColor: 'white',
  justifyContent: "space-around",
  //alignItems: "center",
  height: "60px",
  width: "100%",
  '@media only screen and (max-width:380px)': {
    height: '50px'
  }

});

export const Wrapper = styled('div')({
  padding: '10px 20px',
  display: 'flex',

  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  //  ${mobile({ padding: "10px 0px" })}

  '@media only screen and  (max-width:380px)': {
    padding: '10px 0px'
  },

});

export const Left = styled('div')({

  display: 'flex',
  alignItems: 'center',

});
export const Language = styled('div')({
  fontSize: '14px',
  cursor: 'pointer',
  '@media only screen and  (max-width:380px)': {
    display: 'none'
  },
});

export const SearchContainer = styled('div')({
  border: '0.5px solid lightgray',
  borderRadius: '8px',

  display: 'flex',
  alignItems: 'center',
  marginLeft: '25px',
  padding: ' 5px'

});
export const Input = styled('input')({
  border: 'none',
  '@media only screen and  (max-width:380px)': {
    width: "50px"
  },
  //  ${mobile({ width: "50px" })}
})


export const StyledTextInput = styled('input')(props => ({
  width: "90%",


  alignSelf: 'center',
  borderWidth: props.hiddenBorder ? 0 : '5px',

  '& .MuiInputBase-input ': {
    width: '100%',
    fontSize: '17px',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: '10px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: "#202a5d",
      borderRadius: '10px',
      minHeight: '45px',
      borderWidth: props.hiddenBorder ? 0 : '1px',
    },

    '&:hover fieldset': {
      //    borderColor: COLORS.secondary,
    },
    '&.Mui-focused fieldset': {
      // borderColor: '#202a5d',
      borderWidth: props.hiddenBorder ? 0 : '1px',
    },
  },
}));

export const Center = styled('div')({
  //flex: 1,

  textAlign: 'center'

})

export const Logo = styled('h1')({
  fontWeight: 'bold',
  // ${mobile({ fontSize: "24px" })}
  fontSize: "24px",

  '@media only screen and  (max-width:780px)': {
    fontSize: "19px"
  },
  '@media only screen and  (max-width:380px)': {
    fontSize: "15px"
  },
})
export const Right = styled('div')({
  //flex: 1,
  display: 'flex',
  alignItems: 'center',

  '@media only screen and  (max-width:380px)': {

    justifyContent: "center"
  },
})


export const MenuItem = styled(Button)((props) => ({

  fontSize: "17px",
  cursor: 'pointer',
  marginLeft: '15px',
  color: 'black',

  '@media only screen and  (max-width:780px)': {
    fontSize: "10px", marginLeft: "5px"
  },
  '@media only screen and  (max-width:380px)': {
    fontSize: "12px", marginLeft: "5px"
  },

}))


