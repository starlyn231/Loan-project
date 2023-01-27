import React from 'react'
import { MediumHeightDivider, SmallHeightDivider, StyledStartButton } from '../../../themes/Styles'
import { BodyText, Container, ContainerButton, ContainerIcon, ContainerText, Image, Title } from './style/StartLoginViewStyles'
import { Button } from '@mui/material';
import TwoTicket from '../../../assets/icon/TwoTickets.svg'
import EventAccepted from '../../../assets/icon/EventAccepted.svg'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useNavigate } from 'react-router-dom';
import SaveIcon from "@mui/icons-material/Save";

export const StartLoginView = () => {
  const navigation = useNavigate();

  return (
    <Container>
      <MediumHeightDivider />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '85%', minHeight: '100vh', }}>

        <Title> Bienvenido a Tveo plataforma de boletas y Administración de evento. </Title>
        <BodyText>¿Como deseas iniciar sesión  ? </BodyText>
        <MediumHeightDivider />

        <ContainerButton onClick={() => navigation("/login")} >
          <ContainerIcon>
            <Image src={TwoTicket} />
          </ContainerIcon>
          <ContainerText>
            <Title>    Usuario </Title>
          </ContainerText>
        </ContainerButton>


        <ContainerButton onClick={() => navigation("/registerEvents")}>
          <ContainerIcon>
            <Image src={EventAccepted} />
          </ContainerIcon>
          <ContainerText>
            <Title>    Administrador de eventos </Title>
          </ContainerText>
        </ContainerButton>

        {/* 
      <StyledStartButton> { <Image src={TwoTicket} />} Usuario</StyledStartButton>
      <StyledStartButton ><span style={{ width: '50px', backgroundColor: 'yellow', }}><SaveIcon /></span>Administrador de evento</StyledStartButton>
       <StyledStartButton startIcon={<ContainerIcon><SaveIcon src={TwoTicket} /></ContainerIcon>} >Administrador de evento</StyledStartButton>
    */}

      </div>
    </Container>
  )
}
