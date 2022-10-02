import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
//import PersonIcon from '@mui/icons-material/Person';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import COLORS from '../../styleGeneric/Colors';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',

});

export const UserImage = styled('img')({

  '@media (min-width:768px)': {
    height: '45px',
    width: '45px',
  },
  '@media (min-width:1200px)': {
    height: '60px',
    width: '60px',
  },
});

export const StyledPaper = styled(Paper)({
  boxShadow: '0 8px 10px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.30)',
  marginTop: '10px',
  minWidth: '200px',

});

export const IconUser = styled(Person2OutlinedIcon)((props => ({
  cursor: 'pointer',

  //color: COLORS.black,

  fontSize: '38px',
  '&:hover,&:focus': {
    // fontSize: '50px',
  },
  '@media (min-width:768px)': {
    //alignItems: 'center',
  }
})));