import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { SubHeaderLayout } from "../../Layout/public/components/subHeader/SubHeaderLayout";
import { MediumHeightDivider } from "../../themes/Styles";
import { ButtonGeneral } from "../RequestSeats/styles/RequestSeatsStyles";
import { MapWithDirections } from "./components/MapWithDirections";
import {
  BodyText,
  ButtonContainer,
  Container,
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
            <ButtonGeneral style={{ backgroundColor: "black", color: "white" }}>
              General RD$ 2,000.00
            </ButtonGeneral>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ m: "5px" }}>
            <ButtonGeneral>Vip Platinum RD$ 4,000.00</ButtonGeneral>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ m: "5px" }}>
            <ButtonGeneral>Special Guest RD$ 4,000.00</ButtonGeneral>
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
            //justifyContent='center'
            alignItems={"center"}
          >
            <div
              style={{
                display: "flex",

                width: "100%",
                flexDirection: "column",
                alignItems: "center",

                marginTop: "30px",
              }}
            >
              <BodyText>
                Selecciona una fecha y una hora para asistir a tu evento.{" "}
              </BodyText>

              <div
                style={{
                  display: "flex",

                  width: "100%",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <ButtonContainer
                  style={{
                    marginRight: "15px",
                  }}
                >
                  <ButtonGeneral>Viernes 30 de diciembre 9:30 PM</ButtonGeneral>
                </ButtonContainer>

                <ButtonContainer style={{}}>
                  <ButtonGeneral>Sabado 31 de diciembre 9:30 PM</ButtonGeneral>
                </ButtonContainer>
              </div>
            </div>
            <MediumHeightDivider />
            <BodyText style={{ textAlign: "center" }}>
              The Weeknd ha anunciado una gira mundial para 2021, que comenzará
              en abril y se prolongará hasta octubre.
              <br /> <br />
              La gira comenzará en Europa y llegará a Estados Unidos y Canadá.
              Incluirá paradas en las principales ciudades como Londres, París,
              Berlín,
            </BodyText>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.27967210508!2d-69.91336948579662!3d18.470986875511187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea561ff4e14d6a1%3A0x7b65dd57804288eb!2sTeatro%20Nacional%20Eduardo%20Brito!5e0!3m2!1sen!2sdo!4v1675108772649!5m2!1sen!2sdo'
              width='100%'
              height='450'
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
            width: '290px',

          }}>
          <ButtonGeneral style={{
            backgroundColor: 'black',
            color: 'white'

          }}>Comprar Ticket</ButtonGeneral>
        </ButtonContainer>

        <MediumHeightDivider />
      </Stack>
    </Container>
  );
};
