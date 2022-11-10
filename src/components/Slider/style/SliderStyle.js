import { styled } from '@mui/system';

export const Container = styled('div')({
  display: "flex",
  position: 'relative',
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
  minHeight: "100vh",
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
  height: "500px",
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: "column",
  /*  display: 'flex',
  //flexDirection: "column",
  zIndex: '10000',
  marginLeft: "15%",
  marginTop: "15%",
  height: "500px",
  alignSelf: "center",



  "@media (min-width:360px)": {
    width: "100%",
  },
  "@media (min-width:768px)": {
    width: "100%",
  },
  "@media (min-width:1200px)": {
    fontSize: "15px",

    width: "100%",
  },
*/
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
export const Button = styled('button')({
  padding: '10px',
  fontSize: '20px',
  backgroundColor: 'teal',
  cursor: ' pointer',
})

