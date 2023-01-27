
import { styled } from '@mui/system';
import COLORS from '../../../themes/Colors';
import Button from '@mui/material/Button';

import FONTS_FAMILY from '../../../themes/FontsFamily';


export const Container = styled('div')({




  '@media (min-width:320px)': {
    //height: '240px',
  },
  '@media (min-width:768px)': {
    // height: '320px',
  },
  '@media (min-width:1200px)': {
    // height: '320x',
  },


})


export const ButtonPrice = styled('button')(props => ({
  border: '1.5px solid #1D1D1D',
  borderRadius: ' 50px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  padding: '10px',

  lineHeight: '24px',
  color: props.color === 'white' ? COLORS.white : 'black',
  backgroundColor: props.backgroundColor === 'black' ? COLORS.primary : 'transparent',
  cursor: ' pointer',
  margin: '2px',
  '@media (min-width:320px)': {
    fontSize: '12px',
    width: '100px',
  },
  '@media (min-width:768px)': {
    fontSize: '12px',
    width: '200px',

  },
  '@media (min-width:1200px)': {
    fontSize: '18px',
    lineHeight: '23px',
    width: '220px',
    height: '50px',
  },

}))


export const ButtonFilter = styled(Button)({

  borderRadius: ' 50px',

  // width: '292px',



  textAlign: 'center',
  color: COLORS.white,
  backgroundColor: '#1D1D1D;',
  cursor: ' pointer',
  margin: '2px',

  '@media (min-width:320px)': {
    fontSize: '12px',
  },
  '@media (min-width:768px)': {
    fontSize: '12px',
    lineHeight: '24px',
  },
  '@media (min-width:1200px)': {
    fontSize: '13px',
    lineHeight: '24px',
    height: '50px',
    padding: '10px',
  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {

  }
});


export const Title = styled('h1')({
  fontFamily: FONTS_FAMILY.regular.body,
  fontStyle: "normal",
  fontWeight: 700,

  lineHeight: " 52px",
  color: "#000000",
  '@media (min-width:320px)': {
    fontSize: '20px',
  },
  '@media (min-width:768px)': {
    fontSize: "22px",
  },
  '@media (min-width:1200px)': {
    fontSize: "40px",
  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {

  }


});

export const Img = styled("img")({
  //top: 0,
  marginTop: '-50px',
  marginRight: '70px',


  '@media (min-width:320px)': {
    width: "50%",
    height: "100%",
  },
  '@media (min-width:768px)': {
    width: "50%",
    height: "200px",
  },
  '@media (min-width:1200px)': {
    width: "40%",
    height: "220px",
  },

});


export const BodyTitle = styled('h3')({
  fontFamily: FONTS_FAMILY.bold.title,
  fontStyle: "normal",
  fontWeight: 700,
  margin: 0,
  lineHeight: " 44px",
  color: "#FFFFFF",
  '@media (min-width:320px)': {
    fontSize: '20px',
  },
  '@media (min-width:768px)': {
    fontSize: "22px",
  },
  '@media (min-width:1200px)': {
    fontSize: "30px"
  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {
  }
});

export const BodyText = styled('p')({
  fontFamily: FONTS_FAMILY.regular.body,
  fontStyle: "normal",
  fontWeight: 400,

  margin: 0,
  color: "#FFFFFF",
  '@media (min-width:320px)': {
    fontSize: '17px',
  },
  '@media (min-width:768px)': {
    fontSize: "19px",
  },
  '@media (min-width:1200px)': {
    fontSize: "22px",
  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {

  }


});



export const ButtonContainer = styled('div')(props => ({

  display: 'flex',

  '@media (min-width:768px)': {
    width: '200px',
    backgroundColor: 'yelow',
  },
  '@media (min-width:1200px)': {
    width: '250px'
  },

}))
