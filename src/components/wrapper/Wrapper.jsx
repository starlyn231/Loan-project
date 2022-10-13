

import { BodyText, Container, ContainerIcon, GridContainer, ImageContainer } from "./style/Wrapper";
import { Grid } from "@mui/material";
import { data } from "./DataWrapper";

export const Wrapper = () => {
  return (

    <Container>
      <Grid
        gap={"10px"}
        justifyContent={"center"}
        sx={{ maxWidth: '100% ', }} container={true}>
        {data.map((val, index) => {
          return (

            <Grid sx={{
              background: '#fff',

              padding: ' 20px',
              position: 'relative',
              borderRadius: ' 8px',
              boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
              margin: '5px',
            }} item key={index} xs={12} sm={6} md={4} xl={4}>

              <ImageContainer >
                <ContainerIcon>{val.cover}</ContainerIcon>
              </ImageContainer>
              <h3 style={{ fontWeight: 800 }}>{val.title}</h3>
              <BodyText>{val.decs}</BodyText>
            </Grid>
          )
        })}
      </Grid>
    </Container>

  )
}

export default Wrapper
