import { memo } from 'react';
import Dialog from '@mui/material/Dialog';
import TextInformation from '../TextInformation/TextInformation';
import IconButton from '@mui/material/IconButton';
import { ButtonGeneral, Row, SmallHeightDivider } from '../../themes/Styles';
import {
  BodyText,
  ButtonContainer,
  Container,
  ContentContainer,
  Image,
  StyledCloseIcon,
  Title
} from './styles/FormModalStyles';

function FormModal({ children, title, btnText, icon, bodyText, open, onClose,
  conditionalClose, fullWidth, fullScreen, maxWidth = 'sm',
  backgroundColorPropBtn, colorProp, onPress, dialogBackground }) {
  //conditionalClose - The modal doesn't close on backdrop click or close button click
  return (
    <Dialog
      open={open}
      onClose={conditionalClose ? null : onClose}
      onBackdropClick={conditionalClose ? null : onClose}
      maxWidth='sm'
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      sx={{
        display: 'flex', justifyContent: "center",

      }}
    >
      <Container maxWidth={maxWidth} backgroundColor={dialogBackground}>

        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',

        }}>

          {
            !conditionalClose &&
            <IconButton onClick={onClose} sx={{ marginLeft: '5%' }}>
              <StyledCloseIcon />
            </IconButton>
          }
        </div>
        <ContentContainer>

          {
            title ?
              <Title>{title}</Title>
              :
              <div style={{ width: '100%' }} />
          }

          <Image src={icon} />
          <BodyText>{bodyText}</BodyText>

          <SmallHeightDivider />

          <ButtonContainer>
            <ButtonGeneral
              backgroundColor={backgroundColorPropBtn}
              color={colorProp}
              onClick={onPress}
            >{btnText}</ButtonGeneral>

          </ButtonContainer>
          <SmallHeightDivider />
        </ContentContainer>
      </Container>


    </Dialog>
  );
}

export default memo(FormModal)