import React from "react"


import { Container, ContainerSection } from "./style/FlashDeals"
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FlashCard from "./components/FlashCard";
const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <ContainerSection >
        <Container>

          <div style={{ display: 'flex', padding: '10px', alignItems: 'center' }} >
            <BoltOutlinedIcon sx={{ color: 'teal', fontSize: '27px' }} />
            <h1>Ofertas</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </Container>
      </ContainerSection>
    </>
  )
}

export default FlashDeals
