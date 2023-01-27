import { Box, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import COLORS from '../../../../../themes/Colors';

export const Container = styled('div')({

  display: "flex",

  flexDirection: "column",

  '@media (min-width:320px)': {
    //height: '240px',
  },
  '@media (min-width:768px)': {
    // height: '320px',
  },
  '@media (min-width:1200px)': {
    // height: '320x',
  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {

  }
})


export const ItemMenu = styled(MenuItem)(props => ({
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid white',
  borderRadius: ' 50px',
  margin: '5px',
  textAlign: 'center',
  //font-family: 'DM Sans';
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '18px',


  // color: props.active ? COLORS.white : COLORS.primary,
  // backgroundColor: props.active ? COLORS.primary : 'transparent',
  '@media (min-width:320px)': {
    //height: '240px',
  },
  '@media (min-width:768px)': {
    width: '100px',
  },
  '@media (min-width:1200px)': {
    width: '170px',

  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {
    color: COLORS.primary,
    backgroundColor: COLORS.white
  }
}))


export const BoxContainer = styled(Box)({
  backgroundColor: 'black', color: 'white',
  borderRadius: ' 10px', display: 'flex',
  zIndex: 4000,
  '@media (min-width:320px)': {
    //height: '240px',
  },
  '@media (min-width:768px)': {
    width: '400px', height: '220px'
  },
  '@media (min-width:1200px)': {
    width: '600px', height: '240px'

  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {

  }
})


export const IconExpandButton = styled(ExpandMoreIcon)({
  color: COLORS.white,

  // fontSize: '35px'
});

