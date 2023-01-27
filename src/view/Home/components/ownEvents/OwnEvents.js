import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FONTS_FAMILY from "../../../../themes/FontsFamily";
import { SmallHeightDivider } from "../../../../themes/Styles";
import {
  BoxBlackText,
  Container,
  DateText,
  StyletImg,
  SubtitleText,
} from "./styles/OwnEventsStyles";

export const OwnEvents = ({ mockEvents }) => {
  const { title, subTitle, img, id } = mockEvents;
  console.log(mockEvents);
  return (
    <Container sx={{}}>
      <Grid justifyContent='center' container height='100%'>
        <Grid xs={12} sm={12} md={12} height='45%' sx={{ width: "100%", }}>
          <StyletImg src={img} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} container>
          <Grid item xs container direction='column'>
            <Grid>

              <Typography
                fontSize={{ xs: "16px", sm: "16px", md: "19px", xl: "20px" }}
                variant='caption'
                fontWeight='700'
                color=' #242565'
                sx={{
                  fontFamily: FONTS_FAMILY.bold.title,
                  LineHeight: " 30px",

                  flexWrap: "wrap",
                }}
              >
                {title}
              </Typography>

              <SubtitleText>{subTitle}</SubtitleText>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems={"center"}
              >
                <DateText>12 Mar - jhon Doe</DateText>

                <BoxBlackText>
                  <p style={{ margin: "auto" }}>Gratis</p>
                </BoxBlackText>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* 
      
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          spacing={2}
          margin='5px'
          display='flex'
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{}}
        >
          <Stack direction={"column"} alignItems={"center"} >
            <p style={{ margin: 0, fontWeight: 700, fontSize: '10px', color: '#407ECC' }}>AUG</p>
            <p style={{ margin: 0, fontWeight: 700, fontSize: '14px', color: '#0000000', }}>20</p>
          </Stack>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              width: "40px",
              fontSize: "09px",
              border: "1px solid black",
              alignSelf: "center",
              justifySelf: "center",
              backdropFilter: "blur(5px)",
              borderRadius: "7px",
              textAlign: "center",
            }}
          >
            <p>Gratis</p>
          </div>
        </Grid>
      
      */}
    </Container>
  );
};
