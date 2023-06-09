import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { SubHeaderLayout } from "../../Layout/public/components/subHeader/SubHeaderLayout";
import { MediumHeightDivider, SmallHeightDivider } from "../../themes/Styles";

import {
  BodyText,
  ButtonContainer,
  Container,
  Content,
} from "./styles/InformationStyles";

export const Information = () => {
  return (
    <Container>
      <SubHeaderLayout conditionRender={true} />

      <Stack
        display='flex'
        justifyContent='center'
        mt='20px'
        alignItems='center'
        width='100%'
      >
        <Grid
          width='80%'
          direction={"row"}
          justifyContent='center'
          container
          item
          mb='20px'
        >
          <Grid item xs={12} sm={6} md={3} sx={{ m: "5px" }}>
            <p style={{ backgroundColor: "black", color: "white" }}>
              General RD$ 2,000.00
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ m: "5px" }}>
            <p>Vip Platinum RD$ 4,000.00</p>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ m: "5px" }}>
            <p>Special Guest RD$ 4,000.00</p>
          </Grid>
        </Grid>
        <Grid
          width='95%'
          direction={"row"}
          justifyContent='center'
          container
          item
        >
          <Grid
            item
            direction={"column"}
            display='flex'
            xs={12}
            sm={6}
            md={6}
            alignItems={"center"} >

            <div style={{
              display: "flex",
              width: "80%",
              flexDirection: "column",
              marginTop: "30px",
            }}
            >
              <BodyText style={{ textAlign: "center" }}>
                Selecciona una fecha y una hora para asistir a tu evento.{" "}
              </BodyText>

              <Content>
                <ButtonContainer
                  style={{
                    marginRight: "15px",
                  }}
                >
                  <p>Viernes 30 de diciembre 9:30 PM</p>
                </ButtonContainer>

                <ButtonContainer style={{}}>
                  <p>Sabado 31 de diciembre 9:30 PM</p>
                </ButtonContainer>
              </Content>

              <MediumHeightDivider />

              <BodyText style={{}}>
                The Weeknd ha anunciado una gira mundial para 2021, que
                comenzará en abril y se prolongará hasta octubre.
                <SmallHeightDivider />
                La gira comenzará en Europa y llegará a Estados Unidos y Canadá.
                Incluirá paradas en las principales ciudades como Londres,
                París, Berlín,
              </BodyText>
            </div>
          </Grid>
          <MediumHeightDivider />
          <Grid item xs={12} sm={6} md={5}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.27967210508!2d-69.91336948579662!3d18.470986875511187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea561ff4e14d6a1%3A0x7b65dd57804288eb!2sTeatro%20Nacional%20Eduardo%20Brito!5e0!3m2!1sen!2sdo!4v1675108772649!5m2!1sen!2sdo'
              width='80%'
              height='430px'
              style={{ border: "0" }}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
            {/*  <MapWithDirections />*/}
          </Grid>
        </Grid>

        <MediumHeightDivider />
        <ButtonContainer
          style={{
            width: "290px",
          }}
        >
          <p
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Comprar Ticket
          </p>
        </ButtonContainer>

        <MediumHeightDivider />
      </Stack>
    </Container>
  );
};
