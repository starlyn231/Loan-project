import React from "react"
import { ContainerImg, ContainerSection, Image, RowContainer } from "./style/AnnocementStyle"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <ContainerSection     >
        <RowContainer style={{}}  >
          <ContainerImg style={mystyle}>
            <Image src='./images/banner-1.png' />
          </ContainerImg>
          <ContainerImg className='img' style={mystyle1}>
            <Image src='./images/banner-2.png' />
          </ContainerImg>
        </RowContainer>
      </ContainerSection>
    </>
  )
}

export default Annocument
