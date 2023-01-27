import { styled } from '@mui/system';



export const Item = styled('div')({
  display: 'flex',

  width: ' 100px',
  flexGrow: 1,
  flexShrink: 1,

  backgroundColor: 'pink'

});

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  //height: '100vh',

});

export const Title = styled('h1')({
  //margin: '20px 0 20px 0',
  color: '#1D1D1D',
  fontWeight: 700,
  letterSpacing: '-0.5px',
  fontFamily: 'Mont',
  lineHeight: '40px',
  letterSpacing: '0.1em',
  '@media (min-width:320px)': {
    fontSize: '20px',
  },
  '@media (min-width:768px)': {
    fontSize: '  25px',
  },
  '@media (min-width:1200px)': {
    fontSize: '33px',
  },
});


export const BodyText = styled('p')({
  margin: 0,
  color: '#8E8E90',
  //fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '-0.25PX',
  fontFamily: 'Poppins',
  '@media (min-width:320px)': {
    fontSize: '12px',
  },
  '@media (min-width:768px)': {
    fontSize: ' 15px',
  },
  '@media (min-width:1200px)': {
    fontSize: '16px',
  },
});
export const SubTitle = styled('p')({
  //margin: '20px 0 20px 0',
  color: '#1D1D1D',
  fontWeight: 700,
  margin: 0,
  fontFamily: 'Mont',
  lineHeight: '40px',
  letterSpacing: '0.02em',

  '@media (min-width:768px)': {
    fontSize: '  15px',
  },
  '@media (min-width:1200px)': {
    fontSize: '20px',
  },
});


export const BodyContent = styled('p')({
  margin: 0,
  color: '#1D1D1D',
  fontWeight: 500,
  letterSpacing: '-0.5px',
  fontFamily: 'Mont',
  lineHeight: '40px',
  letterSpacing: '0.02em',
  textAlign: 'start',
  fontSize: '16px',
});
