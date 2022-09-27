
import { styled } from '@mui/system';

export const Info = styled('div')({
  opacity: 0,
  width: ' 100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  zIndex: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.5s ease',
  cursor: 'pointer',
  background: 'green'

});

export const Container = styled('div')({
  //backgroundColor: 'red',
  background: 'red',

  display: 'flex',
  margin: ' 5px',
  height: '350px',

  minWidth: ' 280px',
  alignItems: 'center',
  justifyContent: 'center',
  //backgroundColor: '#f5fbfd',
  //position: 'relative',

  '&:hover': {
    opacity: 1
  }

});


export const Circle = styled('div')({
  width: ' 200px',
  height: '200px',
  borderRadius: ' 50%',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 1,
})

const Image = styled('img')({
  position: 'absolute',
  height: ' 75%',
  zIndex: 2,

})


export const Icon = styled('div')({

  width: ' 40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px',
  transition: 'all 0.5s ease',

  '&:hover': {
    backgroundColor: '#e9f5f5',
    transform: ' scale(1.1)'
  }

})


