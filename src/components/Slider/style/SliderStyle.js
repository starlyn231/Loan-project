import { styled } from '@mui/system';

export const Container = styled('div')({
  display: "flex",
  // position: 'relative',
  // overflow: 'hidden',
  height: "100vh",
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
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: props.bg === 'first' ? '#f5fafd ' : '#fbf0f4'
}))


export const ImgContainer = styled('div')({
  height: '100%',
  //flex: 1,

})

export const Image = styled('img')({
  height: ' 80%',
})

export const InfoContainer = styled('div')({
  // flex: 1,
  padding: '50px',

})
export const Title = styled('h1')({
  fontSize: '70px'
})

export const Desc = styled('p')({
  margin: '50px 0px',
  fontSize: '20px',
  fontWeight: '500',
  letterSpacing: '3px'
})

export const Button = styled('button')({
  padding: '10px',
  fontSize: '20px',
  backgroundColor: 'transparent',
  cursor: ' pointer',
})

