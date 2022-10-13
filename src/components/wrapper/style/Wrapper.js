
import { styled } from '@mui/system';

export const Container = styled('section')({

  padding: '50px 0',
  fontFamily: '"Poppins" sans-serif',
  textAlign: 'center',
  background: '#f6f9fc',
});

export const GridContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
  '@media only screen and  (max-width:680px)': {
  },
});

export const ImageContainer = styled('div')({
  margin: 'auto',
  width: '70px',
  height: '70px',
  lineHeight: '50px',
  background: ' #f3f5f9',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: 'gray',
    transform: ' scale(1.1)'
  }
})


export const ContainerIcon = styled('i')({
  fontSize: ' 50px',
  color: 'teal',

})


export const BodyText = styled('p')({

  fontSize: '15px',
  marginTop: ' 20px',
  color: 'grey',
})


