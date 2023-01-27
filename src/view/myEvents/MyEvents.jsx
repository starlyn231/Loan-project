import React from 'react'
import { SubHeaderLayout } from '../../Layout/public/components/subHeader/SubHeaderLayout'
import { Container, IconTicketImg } from './styles/MyeventStyles'
import IconTicket from "../../assets/icon/IconTicketr.svg";
import IconTicketBlack from "../../assets/icon/IconTicketBlack.svg";
import { MediumHeightDivider } from '../../themes/Styles';

export const MyEvents = () => {
  return (
    <Container>  <SubHeaderLayout icon={IconTicket} title='Mis Eventos' conditionRender={false} />
      <MediumHeightDivider />
      <IconTicketImg src={IconTicketBlack} />

    </Container>
  )
}
