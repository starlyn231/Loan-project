import { styled } from '@mui/system';
import COLORS from '../../../../themes/Colors';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',



});



export const Title = styled('h1')({
  margin: '20px 0 20px 0',
  color: '#1D1D1D',
  fontWeight: 400,

  fontFamily: 'Mont',
  lineHeight: '24px',
  letterSpacing: '0.1em',
  '@media (min-width:320px)': {
    fontSize: '18px',
  },
  '@media (min-width:768px)': {
    fontSize: '18px',
  },
  '@media (min-width:1200px)': {
    fontSize: '24px',
  },
});


export const BodyText = styled('p')({
  margin: 0,
  color: '#8E8E90',
  //fontWeight: 400,
  lineHeight: '24px',
  fontFamily: 'Poppins',
  '@media (min-width:320px)': {
    fontSize: '18px',
  },
  '@media (min-width:768px)': {
    fontSize: '18px',
  },
  '@media (min-width:1200px)': {
    fontSize: '20px',
  },
});

export const Image = styled("img")({
  // marginRight: '3px',
  ':hover': {
    // cursor: 'pointer',
  },
  "@media (min-width:320px)": {
    // width: "50px",
    // marginBottom: '10px',
  },
  "@media (min-width:768px)": {
    // width: "35px",
  },
  "@media (min-width:1200px)": {
    // width: "45px",
  },

  "@media (min-width:1800px)": {
    width: "45px",
  },
});

export const ContainerButton = styled('div')({
  position: 'relative',
  display: 'flex',
  marginBottom: '10px',
  alignItems: 'center',

  width: '80%',
  cursor: 'pointer',
  minHeight: '68px',
  background: '#FFFFFF',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  border: `1px solid ${COLORS.lightGray} `,
  borderRadius: '10px',
  color: COLORS.primary,
  padding: 0

});

export const ContainerText = styled('div')({
  width: '70%',

  justifyContent: 'center',
  alignItems: 'center',


});
export const ContainerIcon = styled('div')({
  width: '30%',
  alignItems: 'center',
  backgroundColor: COLORS.primary,
  height: '100%',
  minWidth: '70px',

  borderRadius: '10px',

});


/*

    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inter',
    marginBottom: '10px',
    minHeight: '68px',
    width: '80%',
    borderRadius: '10px',
    color: COLORS.primary,
    lineHeight: '24px',
    letterSpacing: '0.1em',

*/