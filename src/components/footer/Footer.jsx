import React from "react";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
  Image,
  SearchTextInput,
  ButtonSearch
} from "./style/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import { ListItemData, TveoData } from "./Data";
import LogoSecondaryWhite from '../../assets/image/tveo-logo-type-01.svg'

export const Footer = () => {
  return (
    <Container>
      <Grid container={true} width='100%'>
        <Grid item xs={12} sm={6} md={3}>
          <Left>
            <Image src={LogoSecondaryWhite} />
            <Desc>
              Tveo es una plataforma global de venta de entradas de autoservicio para experiencias
              en vivo que permite a cualquier persona crear, compartir, encontrar y asistir a eventos
              que alimentan sus pasiones y enriquecen sus vidas.
            </Desc>
            <SocialContainer>
              <SocialIcon color='white'>
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon color='white'>
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon color='white'>
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon color='white'>
                <PinterestIcon />
              </SocialIcon>
            </SocialContainer>
          </Left>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Right>
            <Title>Planificar Eventos</Title>

            {ListItemData.map((item) => (
              <ContactItem>
                {item.title}</ContactItem>
            ))}

          </Right>
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Right>
            <Title>Tveo  </Title>

            {TveoData.map((item) => (
              <ContactItem>
                {item.title}</ContactItem>
            ))}

          </Right>
        </Grid>
        <Grid xs={12} sm={7} md={3}>
          <Right>
            <Title>Permanecer siempre informado</Title>
            <ContactItem>

              Únase a nuestra lista de correo para mantenerse al tanto de lo más
              nuevo para eventos y conciertos.
            </ContactItem>

            <ContactItem>

              <SearchTextInput
                id="standard-name"
                fullWidth
                placeholder="Ingrese correo electronico"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="flex-end" >
                    <ButtonSearch sx={{ backgroundColor: 'blue' }} >Subcribase</ButtonSearch>
                  </InputAdornment>
                }}
              />
            </ContactItem>

          </Right>
        </Grid>
      </Grid>
    </Container>
  );
};
