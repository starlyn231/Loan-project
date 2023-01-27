
import { Card } from '@mui/material';
import { styled } from '@mui/system';
import COLORS from '../../../themes/Colors';
import FONTS_FAMILY from '../../../themes/FontsFamily';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1920px',
  alignItems: 'center',

});


export const Title = styled('h1')({
  //margin: '20px 0 20px 0',
  color: '#1D1D1D',
  fontWeight: 'bold',

  fontFamily: 'Mont',
  lineHeight: '39px',
  letterSpacing: '0.1em',
  '@media (min-width:320px)': {
    fontSize: '20px',
  },
  '@media (min-width:768px)': {
    fontSize: '  29px',
  },
  '@media (min-width:1200px)': {
    fontSize: '39px',
  },
});

export const StyledCardMedia = styled('div')({

});

export const StyledCover = styled('img')({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
export const ImageContainer = styled("div")((props) => ({
  display: 'flex',
  position: 'relative',
  height: '100%',
  padding: '10px',
  width: '100%',
  opacity: '80%',
  objecFit: 'cover',
  background: `url(${props.image})`,
  backgroundSize: "cover",
  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",


}));


export const CardContainer = styled(Card)({
  height: '300px',
  display: "flex",
  position: 'relative',
  flexDirection: "column",


  ' &:after': {
    borderRadius: "10px",
    boxShadow: "0px 10px 15px 0px rgba(0,0,0,0.1)",
    background: '#fff',
    borderRadius: '50%',
    boxShadow:
      ` 500px 0 0 0 #fff  0 180px 0 0 #fff  500px 180px 0 0 #fff
    0 40px 0 -20px #fff
    0 60px 0 -20px #fff
    0 80px 0 -20px #fff
    0 100px 0 -20px #fff
    0 120px 0 -20px #fff
    0 140px 0 -20px #fff
    500px 40px 0 -20px #fff
    500px 60px 0 -20px #fff
    500px 80px 0 -20px #fff
    500px 100px 0 -20px #fff
    500px 120px 0 -20px #fff
    500px 140px 0 -20px #fff`,

    display: 'block',
    height: ' 50px',
    left: '-25px',
    position: 'absolute',
    top: '-25px',
    width: '50px',
  },
  '@media (min-width:320px)': {
    width: '95%',
  },
  '@media (min-width:768px)': {
    width: '90%',
  },
  '@media (min-width:1200px)': {
    width: '70%',

    //height: '300px',
    margin: '10px 0 10px 50px',
  },
  //fontFamily: FONTS_FAMILY.regular.body,
  '&:hover,&:focus,&:active': {

  }
});


export const Titleimage = styled('h3')({
  //margin: '20px 0 20px 0',
  color: 'white',


  fontFamily: 'Mont',
  lineHeight: '39px',
  letterSpacing: '0.1em',
  '@media (min-width:320px)': {
    fontSize: '18px',
  },
  '@media (min-width:768px)': {
    fontSize: '  20px',
  },
  '@media (min-width:1200px)': {
    fontSize: '25px',
  },
});