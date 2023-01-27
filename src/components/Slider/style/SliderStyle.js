import { styled } from '@mui/system';
import COLORS from '../../../themes/Colors';



export const ContainerSection = styled('div')({
  //position: 'relative',
  display: "flex",
  alignItems: 'center',
  flexDirection: 'column',
  // minHeight: "100vh",

  minWidth: "100%",
});

export const Container = styled('div')({
  display: "flex",
  // position: 'relative',
  // overflow: 'hidden',

  height: '700px',
  width: "100%",
});


export const Arrow = styled('div')((props) => ({
  width: '50px',
  height: '50px',
  backgroundColor: '#fff7f7',
  borderRadius: ' 50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  //color: props.color === 'white' ? COLORS.white : COLORS.black,
  left: props.direction === "left" && "10px",
  right: props.direction === "right" && "10px",
  margin: 'auto',
  cursor: 'pointer',
  opacity: '0.5',
  zIndex: 2

}))

export const Wrapper = styled('div')((props) => ({
  height: '100%',
  display: 'flex',
  transition: 'all 1.5s ease',
  transform: (`translateX${(props) => props.slideIndex * -100}vw`),


  // transform: translateX(${(props) => props.slideIndex * -100}vw);
}))
//  color: props.color === 'white' ? COLORS.white : COLORS.black,
export const Slide = styled('div')((props) => ({
  display: 'flex',
  zIndex: 5,
  position: ' relative',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  overflow: 'hidden',

  "@media (min-width:320px)": {
    justifyContent: 'center',
    alignItems: 'center',

  },
  "@media (min-width:768px)": {
    display: 'flex', justifyContent: 'center',
    alignItems: 'center',

  },
  "@media (min-width:1000px)": {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  "@media (min-width:1200px)": {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //  backgroundColor: props.bg === 'first' ? '#f5fafd ' : '#fbf0f4'
}))

export const ImageContainer = styled("div")((props) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  minHeight: "800px",
  //paddingTop:'300px',
  // paddingBottom:'100px',
  background: `url(${props.image})`,
  backgroundSize: "cover",
  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'

}));


export const InfoContainer = styled('div')({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  alignItems: 'flex-end',
  "@media (min-width:360px)": {
    height: "65%",
    width: '90%'
  },
  "@media (min-width:768px)": {
    height: "65%",
  },
  "@media (min-width:1200px)": {
    height: "75%",
    width: '90%'
  },
})
export const Row = styled('div')({
  display: 'flex', flexDirection: 'column',
  "@media (min-width:360px)": {
    width: '95%'
  },
  "@media (min-width:768px)": {
    width: '55%'
  },
  "@media (min-width:1200px)": {
    height: "75%",

    width: '55%'


  },
})
export const Title = styled('h1')({

  zIndex: 10,

  color: 'white',
  fontFamily: "Fira Sans",
  "@media (min-width:320px)": {
    fontSize: "17px",
  },
  "@media (min-width:768px)": {
    fontSize: "25px",
  },
  "@media (min-width:1000px)": {
    fontSize: "30px",

  },
  "@media (min-width:1200px)": {
    fontSize: "60px",
  },
})

export const Desc = styled('p')({

  margin: '20px 0px',
  fontWeight: '500',
  letterSpacing: '3px',


  width: "55%",
  color: 'white',
  fontFamily: "Fira Sans",
  "@media (max-width:320px)": {
    fontSize: "17px",
  },
  "@media (min-width:768px)": {
    fontSize: "17px",
  },
  "@media (max-width:1200px)": {
    fontSize: '20px',
    margin: '20px 0px',
  },

})
export const Image = styled('img')({
  height: ' 80%',
})
export const Button = styled('button')(props => ({
  border: '1px solid white',
  borderRadius: ' 50px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  width: '184.18px',
  height: '60px',
  padding: '10px',
  fontSize: '16px',
  lineHeight: '24px',
  color: COLORS.white,
  backgroundColor: props.backgroundColor === 'blue' ? COLORS.tertiary : 'transparent',
  cursor: ' pointer',
  margin: '2px'

}))

export const LogoTVEO = styled("img")({
  ':hover': {
    cursor: 'pointer',
  },
  "@media (min-width:320px)": {
    width: "200px",

  },
  "@media (min-width:768px)": {
    width: "320px",
  },
  "@media (min-width:1200px)": {
    width: ' 571px',

  },
});

