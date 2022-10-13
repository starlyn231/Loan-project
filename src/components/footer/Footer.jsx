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
} from "./style/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid } from "@mui/material";
import { ListItemData } from "./Data";
export const Footer = () => {
  return (
    <Container>
      <Grid container={true} width='100%'>
        <Grid xs={12} sm={12} md={4}>
          <Left>
            <Logo>LAMA.</Logo>
            <Desc>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </Desc>
            <SocialContainer>
              <SocialIcon color='#3B5999'>
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon color='#E4405F'>
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon color='#55ACEE'>
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon color='#E60023'>
                <PinterestIcon />
              </SocialIcon>
            </SocialContainer>
          </Left>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <Center>
            <Title>Useful Links</Title>
            <List>
              {ListItemData.map((item) => (
                <ListItem>{item.title}</ListItem>
              ))}
            </List>
          </Center>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <Right>
            <Title>Contact</Title>
            <ContactItem>
              <RoomIcon style={{ marginRight: "10px" }} /> 622 Dixie Path ,
              South Tobinchester 98336
            </ContactItem>
            <ContactItem>
              <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
            </ContactItem>
            <ContactItem>
              <MailOutlineIcon style={{ marginRight: "10px" }} />{" "}
              contact@lama.dev
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
          </Right>
        </Grid>
      </Grid>
    </Container>
  );
};
