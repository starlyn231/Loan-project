
import { styled } from '@mui/system';

export const ContainerSection = styled('section')({
  // background: '#f6f9fc',
  padding: '50px 0',
  fontFamily: '"Poppins" sans-serif',
  backgroundColor: 'yellow',

  // padding: 0,
  margin: 0,
  boxSizing: ' border-box'
});

export const Container = styled('div')({
  maxWidth: '90%',
  margin: 'auto',
  '@media only screen and  (max-width:680px)': {
  },
});