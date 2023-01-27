import { Grid } from '@mui/material'
import React from 'react'
import { ButtonGeneral, MediumHeightDivider, SmallHeightDivider } from '../../themes/Styles'
import { BodyText, ButtonAuth, ButtonContainer, Container, LinkText, TextFieldContainer, Title } from './styles/viewAuthStyles'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
export const ViewAuthComponent = ({ children, title, bodyText, messageRegister, message, btnTitle, onClickPress, condicionRenderIcon }) => {
  const navigation = useNavigate();
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', width: '80%', minHeight: '100vh' }}>
        {condicionRenderIcon ? <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px', }}> <CancelIcon onClick={() => navigation("/")} sx={{ fontSize: '35px' }} />
        </div> : <SmallHeightDivider />}
        <div style={{}} >


          <Title> {title}</Title>
          <BodyText>
            {bodyText}

          </BodyText>
          <SmallHeightDivider />

          {
            children
          }


        </div>
      </div>
    </Container >
  )
}
