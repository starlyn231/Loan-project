import { Box, Button, Grid, Stack } from "@mui/material";
import { useState } from "react";
import Slider from "../../components/Slider/Slider";
import {
  BodyText,
  BodyTitle,
  ButtonContainer,
  ButtonFilter,
  ButtonPrice,
  Img,
  Title,
} from "./style/StyleHome";
import EventsCard from "./components/card/EventsCard";
import { ListEvents, MockEventsCreated } from "./HomeMock";
import {
  ButtonGeneral,
  MediumHeightDivider,
  Row,
  SmallHeightDivider,
} from "../../themes/Styles";
import { FilterEvents } from "./components/filterEvents/FilterEvents";
import ImageHomeOffice from "../../assets/image/ImageHomeOffice.png";
import { OwnEvents } from "./components/ownEvents/OwnEvents";
import SubHeader from "./components/subHeader/SubHeader";


export const Home = () => {


  return (
    <>
      <SubHeader />
      <Box
        sx={{
          marginTop: '30px',
          display: "flex",
          justifyContent: "center",

        }}
      >

        <ButtonPrice backgroundColor='black' color='white'>
          Gratis
        </ButtonPrice>
        <ButtonPrice>Pago</ButtonPrice>
      </Box>
      <Stack
        direction={"column"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
          width: "100%",
          marginTop: "20px",
          padding: "10px",
        }}
      >
        <FilterEvents />
        <Grid
          container={true}
          spacing={2}
          width={{ xs: "100%", sm: "100%", md: "90%" }}
          marginTop={"20px"}
        >
          {ListEvents.map((item) => (
            <Grid
              direction='row'
              justifyContent='center'
              alignItems='center'

              key={item.id}
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
            >
              <EventsCard events={item} />
            </Grid>
          ))}
        </Grid>
        <MediumHeightDivider />
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "10px",
            backgroundColor: "#407ECC",
          }}
        >
          <Img src={ImageHomeOffice} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Stack width={{ xs: "100%", sm: "100%", md: "400px" }}>
              <BodyTitle>Haz tu propio evento </BodyTitle>
              <BodyText>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </BodyText>
            </Stack>
            <SmallHeightDivider />
            <ButtonContainer>
              {" "}
              <ButtonGeneral color='white' backgroundColor='black'>
                {" "}
                Create Events
              </ButtonGeneral>
            </ButtonContainer>
          </div>


        </Stack>


        <Grid
          container={true}
          spacing={2}
          width={{ xs: "100%", sm: "100%", md: "90%" }}
          marginTop={"20px"}
        >
          {MockEventsCreated.map((item) => (
            <Grid
              direction='row'
              justifyContent='center'
              alignItems='center'
              padding='20px'
              key={item.id}
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
            >
              <OwnEvents mockEvents={item} />
            </Grid>
          ))}
        </Grid>
        <MediumHeightDivider />
      </Stack >
    </>
  );
};
