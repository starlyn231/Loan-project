import { styled } from '@mui/system';
import { StyledTextInput } from '../../../themes/Styles';

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});

export const StyledTextInputSelect = styled(StyledTextInput)({
    width: '30%',
});

export const Separator = styled('div')({
    width: '10px',
});
