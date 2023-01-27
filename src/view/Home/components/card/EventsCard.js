import PropTypes from "prop-types";
// @mui
import { Box, Card, Link, Typography, Stack, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils

import Label from "./label/Label";
import COLORS from "../../../../themes/Colors";
import { BoxBlackText, CardContainer } from "./styles/CardStyles";
import FONTS_FAMILY from "../../../../themes/FontsFamily";
import { SmallHeightDivider } from "../../../../themes/Styles";
// components

// ----------------------------------------------------------------------

const StyledProductImg = styled("img")({
  //top: 0,
  width: "100%",
  height: "100%",

  objectFit: "cover",
  // position: "absolute",

});

// ----------------------------------------------------------------------

export default function EventsCard({ events }) {
  const { title, subTitle, img, id, iconName } = events;
  console.log(events);
  // const status = 'new';
  return (
    <CardContainer sx={{}}>
      <Grid container height='100%'>
        <Grid
          xs={12}
          sm={12}
          md={12}


          sx={{ width: "100%", }} >
          <StyledProductImg alt='example' src={img} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}

          margin='5px'
          display='flex'
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{}}
        >
          <Stack direction={"column"} alignItems={"center"} >
            <p style={{ margin: 0, fontWeight: 700, fontSize: '14px', color: '#407ECC' }}>AUG</p>
            <p style={{ margin: 0, fontWeight: 700, fontSize: '17px', color: '#0000000', }}>20</p>
          </Stack>
          <BoxBlackText >
            <p style={{ margin: "auto" }}>Gratis</p>
          </BoxBlackText>
        </Grid>
        <Grid item xs={12} sm={12} md={9} container>
          <SmallHeightDivider />
          <Grid direction='column' padding='10px'>
            <Typography
              variant='p'
              fontSize={{ xs: "15px", sm: "17px", md: "19px" }}

              sx={{
                fontFamily: FONTS_FAMILY.bold.title,

                fontWeight: '700'
              }}
            >
              {title}
            </Typography>

            <p style={{ fontSize: "15px", fontFamily: FONTS_FAMILY.regular.body, marginTop: '8px' }}>{subTitle}</p>

          </Grid>
        </Grid>
      </Grid>


    </CardContainer>
  );
}
