
import { styled } from '@mui/system';

import { Card, } from "@mui/material";
import FONTS_FAMILY from '../../../../../themes/FontsFamily';

export const CardContainer = styled(Card)({

  display: "flex",

  flexDirection: "column",
  borderRadius: "10px",
  boxShadow: "0px 10px 15px 0px rgba(0,0,0,0.1)",
  '@media (min-width:320px)': {
    height: '390px',
  },
  '@media (min-width:768px)': {
    height: '390px',
  },
  '@media (min-width:1200px)': {
    height: '370px',

  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {

  }
});


export const DateText = styled("p")({
  margin: 0, fontWeight: 700,
  color: '#407ECC', LineHeight: ' 30px',
  fontFamily: FONTS_FAMILY.bold.title,

  '@media (min-width:320px)': {
    fontSize: '16px',
  },
  '@media (min-width:768px)': {
    fontSize: '18px',
  },
  '@media (min-width:1200px)': {
    fontSize: '20px',
  },
});
export const SubtitleText = styled("p")({
  LineHeight: ' 24px',
  fontWeight: 400,
  fontFamily: FONTS_FAMILY.regular.body,
  marginTop: '10px',
  '@media (min-width:768px)': {
    fontSize: '15px',
  },
  '@media (min-width:1200px)': {
    fontSize: '17px',
  },
});


export const BoxBlackText = styled("div")({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: "black",
  color: "white",
  borderRadius: "7px",
  padding: '10px',
  marginTop: '3px',
  '@media (min-width:320px)': {
    fontSize: '10px',
  },
  '@media (min-width:768px)': {
    fontSize: '12px',
  },
  '@media (min-width:1200px)': {
    fontSize: "17px",
  },
});
