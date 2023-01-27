import { Fragment, memo } from 'react';
import Dialog from '@mui/material/Dialog';
import { useMediaQuery } from '@mui/material';
import { SmallHeightDivider, StyledButton } from '../../themes/Styles'
import {
  Container,
  BodyText,
  Title,
  ButtonsContainer,
  Header,
  StyledAnnouncementOutlinedIcon,
  CenterContainer,
  TextContainer,
  IconDivider
} from './styles/ImportantInformationModalStyles';


function ImportantInformationModal({ open, content, buttonTitle, buttonClick, onBackDropClick, onCloseClick, CloseTitle, CloseButton }) {
  const matchesWidth = useMediaQuery('(min-width:768px)');


  return (
    <Dialog
      open={open}
      onClose={onCloseClick}
    //onBackdropClick={onBackDropClick}

    >
      <Container>

        <Header>
          <CenterContainer>
            <StyledAnnouncementOutlinedIcon />
            <IconDivider />
            <Title>Información Importante</Title>
          </CenterContainer>
        </Header>
        <CenterContainer>
          <TextContainer>
            <BodyText>
              {content}
            </BodyText>
          </TextContainer>
        </CenterContainer>
        <CenterContainer>
          <ButtonsContainer CloseButton={CloseButton}>
            <StyledButton onClick={buttonClick}>{buttonTitle}</StyledButton>

            {CloseButton &&
              <Fragment>
                <div style={{ width: '50%' }} />
                <StyledButton onClick={onCloseClick}>{CloseTitle}</StyledButton>
              </Fragment>
            }

          </ButtonsContainer>
        </CenterContainer>
        <SmallHeightDivider />
      </Container>
    </Dialog>
  );
}

export default memo(ImportantInformationModal)