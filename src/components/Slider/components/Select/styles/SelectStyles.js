import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const StyledOption = styled('option')({
  fontSize: '18px',

});

export const MenuContainer = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxHeight: '15vh',

});