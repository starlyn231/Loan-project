import { styled } from '@mui/system';
import COLORS from '../../../../../components/styleGeneric/Colors';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: ' 2rem 0',
  borderRadius: '8px',
  margin: ' 5px',
  height: '280px',
  Width: ' 140px',
  //minWidth: ' 140px',
  justifyContent: 'center',
  backgroundColor: 'rgb(231, 231, 232, 0.4)',
  //position: 'relative',
  /*
  parentClass: {
    "&:hover $childClass": {
      display: 'flex'
    }*/

  '&:hover,&:focus': {
    transitionDuration: ' 0.3s',
    backgroundColor: 'rgb(231, 231, 230)',
    transform: 'scale(1.1)'
  },
});

export const Image = styled('img')({
  width: "40%",

});

export const BodyText = styled('p')({
  fontWeight: 'bold',
  textTransform: 'capitalize',
  textAlign: 'center'
});


export const BodyData = styled('div')({
  display: 'flex',
  justifyContent: 'center',



  position: 'absolute',
  bottom: 10,

});

export const TypeContainer = styled('div')({
  display: 'flex',
  textAlign: 'center',
  gap: '22px',

  "@media (max-width:350px)": {
    flexDirection: "column",
    gap: '10px'
  },

});

export const LinkText = styled('a')({
  marginTop: '5px',
  color: 'teal',
  width: '100%',
  padding: '3px',
  fontWeight: 800,
  textDecoration: 'none',

  '&:hover,&:focus': {
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  fontSize: '19px',

}); 