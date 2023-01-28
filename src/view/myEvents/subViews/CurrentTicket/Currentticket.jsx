import { BodyText, ButtonContainer, Container, IconTicketImg, Title } from "../../styles/MyeventStyles";
import IconTicketBlack from "../../../../assets/icon/IconTicketBlack.svg";
import { ButtonGeneral, MediumHeightDivider } from "../../../../themes/Styles";

export const Currentticket = () => {
  return (
    <Container style={{}} >


      <IconTicketImg src={IconTicketBlack} />
      <MediumHeightDivider />
      <div style={{
        flexDirection: 'column',
        width: '90%', textAlign: 'center',
        display: 'flex', justifyContent: 'center'
      }}>


        <Title> No dispone de Tickets  actualmente </Title>
        <BodyText>Aún no se han realizado Compras de Tickets ultimaste
          Descubre y ordena ahora.</BodyText>


        <MediumHeightDivider />
        <ButtonContainer style={{}}>
          <ButtonGeneral backgroundColor='black' color='white'>
            Agregar al carrito
          </ButtonGeneral>
        </ButtonContainer>
      </div>
    </Container>
  )
}
