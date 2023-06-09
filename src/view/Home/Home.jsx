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

      <Box
        sx={{
          marginTop: '30px',
          display: "flex",
          justifyContent: "center",

        }}
      >

    
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
       
      </Stack >
    </>
  );
};
