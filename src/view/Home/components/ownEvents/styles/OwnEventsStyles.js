
import { styled } from '@mui/system';

import { Card, } from "@mui/material";
import FONTS_FAMILY from '../../../../../themes/FontsFamily';

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
});

export const StyletImg = styled("img")({
  //top: 0,
  width: "100%",
  height: "100%",
  borderRadius: "20px",

  //objectFit: "cover",
  // position: "absolute",

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
  '@media (min-width:320px)': {
    fontSize: '9px',
  },
  '@media (min-width:768px)': {
    fontSize: '10px',
  },
  '@media (min-width:1200px)': {
    fontSize: '12px',
  },
});




