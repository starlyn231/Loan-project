
import { styled } from '@mui/system';


export const Container = styled('div')({
  //backgroundColor: 'red',
  display: 'flex',
  flex: 1,
  margin: ' 3px',
  height: '70vh',
  position: 'relative',

  '@media only screen and  (max-width:380px)': {

  },

});



export const Image = styled('img')({

  width: '100%',
  height: '100%',
  objectFit: 'cover',
  '@media only screen and  (max-width:380px)': {
    height: "20vh"
  },

});


export const Info = styled('div')({
  // backgroundColor: 'gray',
  display: 'flex',

  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media only screen and  (max-width:380px)': {
    width: '90%',
    height: '50%',
  },

});

export const Title = styled('h1')({
  color: 'white',
  marginBottom: '20px',

  '@media only screen and  (max-width:380px)': {
    marginBottom: '5px',
    fontSize: '15px'
  },

});


export const Button = styled('button')({
  border: 'none',
  padding: '10px',
  backgroundColor: 'white',
  color: 'gray',
  cursor: 'pointer',
  fontWeight: 600,
});