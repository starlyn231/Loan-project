
import { styled } from '@mui/system';


export const Container = styled('div')({

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


