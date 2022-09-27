
import { styled } from '@mui/system';


export const Container = styled('div')({
  //backgroundColor: 'green',
  display: 'flex',
  padding: '20px',
  justifyContent: ' space-between',
  '&:hover,&:focus': {
    //  boxShadow: boxShadowConfig,
    //cursor: 'pointer'
  },


  '@media only screen and  (max-width:380px)': {
    padding: '0px',
    diflexDirection: 'column'
  },

});


