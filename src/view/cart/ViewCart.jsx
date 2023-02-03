import {
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  RadioGroup,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonGeneral,
  MediumHeightDivider,
  SmallHeightDivider,
} from "../../themes/Styles";
import {
  CardContainer,
  Container,
  ImageContainer,
  StyledCardMedia,
  StyledCover,
  Title,
  Titleimage,
} from "./styles/ViewCartStyles";
import cover from "../../assets/image/arttistImage.jpg";
//import { decrease, increase, remove } from "./redux/feature/cartSlice";
import LocationOffOutlinedIcon from "@mui/icons-material/LocationOffOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import {
  ButtonContainer,
  ContainerIcon,
} from "../RequestSeats/styles/RequestSeatsStyles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useState } from "react";
import TextField from "../../components/TextField/TextField";
import { SubHeaderLayout } from "../../Layout/public/components/subHeader/SubHeaderLayout";

export const ViewCart = () => {
  // const { totalAmount, items } = useSelector((state) => state.cart);
  const [value, setValue] = useState("Tc");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const dispatch = useDispatch();

  return (
    <Container>
      <SubHeaderLayout conditionRender={true} />
      <Stack width='95%'>
        <MediumHeightDivider />
        <Grid
          container
          spacing={{ xs: 1.5, md: 1 }}
          columns={{ xs: 8, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={6} md={6} position={"relative"}>
            <Title> Artist Name Here </Title>
            <p> Optional Guests / Info</p>
            <CardContainer sx={{}}>
              <ImageContainer image={cover}>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    color: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Titleimage>Artist Name Here</Titleimage>
                    <p style={{}}>Optional Guests / Info</p>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      flexDirection: "column",
                      width: "80%",

                      bottom: 0,
                    }}
                  >
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <LocationOffOutlinedIcon />
                      Location{" "}
                    </p>
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <AccessTimeOutlinedIcon />
                      19:30 BST - 23:00 BST
                    </p>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      flexDirection: "column",
                      margin: "3px",

                      bottom: 0,
                      right: 3,
                    }}
                  >
                    <p>Thursday</p>
                    <p>30</p>

                    <p>November 21</p>
                  </div>
                </Stack>
              </ImageContainer>
            </CardContainer>

            {/* other components*/}
            <SmallHeightDivider />
            <Stack width='100%' alignItems='center'>
              <p
                style={{
                  fontSize: "2px",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                Cantidad de ticket
              </p>

              <ContainerIcon>
                <AddBoxIcon />
                <p style={{ display: "flex", alignSelf: "center" }}>1</p>
                <IndeterminateCheckBoxIcon sx={{ justifySelf: "flex-end" }} />
              </ContainerIcon>

              <h3
                style={{
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  fontSize: " 24px",
                  lineHeight: " 29px",
                  marginBottom: "2rem",
                }}
              >
                Total: $ 2000
              </h3>

              <ButtonContainer>
                <ButtonGeneral backgroundColor='black' color='white'>
                  Agregar al carrito
                </ButtonGeneral>
              </ButtonContainer>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <a href="https://twitter.com/intent/tweet?url=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig&text=Beginner's%20Guide%20to%20Jest%20Testing%20in%20React&via=dannysasse" target="_blank" rel="noreferrer">Share on Twitter</a>

            <FormControl>
              <h1 style={{ fontSize: "16px", fontWeight: 500 }}>
                Seleccionar un método de pago
              </h1>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='Tc'
                  control={<Radio />}
                  label='Tarjeta de Crédito O Débito '
                />
                <FormControlLabel
                  value='paypal'
                  control={<Radio />}
                  label='PayPal'
                />
              </RadioGroup>
            </FormControl>
            <SmallHeightDivider />
            <Grid item xs={12} sm={12} md={10}>
              <TextField
                title='Nombre Completo'
                type='text'
                mask='9999-9999-9999-9999'
                unMaskedValue={true}
                id='creditCardNumber'
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={10}>
              <TextField
                title='Numero de Tarjeta'
                type='text'
                mask='9999-9999-9999-9999'
                unMaskedValue={true}
                id='creditCardNumber'
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                title='Fecha de vencimiento '
                type='text'
                mask='9999-9999-9999-9999'
                unMaskedValue={true}
                id='creditCardNumber'
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                title='CVV'
                type='text'
                mask='9999-9999-9999-9999'
                unMaskedValue={true}
                id='creditCardNumber'
                required
              />
            </Grid>

            <Grid item xs={12} sm={4} md={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='Guarde de forma segura la tarjeta y los detalles'
                />
              </FormGroup>
            </Grid>
            <SmallHeightDivider />

            <ButtonContainer style={{ margin: "auto" }}>
              <ButtonGeneral backgroundColor='black' color='white'>
                Realizar pago
              </ButtonGeneral>
            </ButtonContainer>
          </Grid>
        </Grid>

        <MediumHeightDivider />
      </Stack>
    </Container>
  );
};
