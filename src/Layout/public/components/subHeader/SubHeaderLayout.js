import React, { useState } from "react";

import LikeIcon from "../../../../assets/icon/Favorite.svg";
import AssistIcon from "../../../../assets/icon/Assist.svg";
import ShareIcon from "../../../../assets/icon/Share.svg";

import { BoxContainer } from "../../../../themes/Styles";
import { Stack } from "@mui/material";
import {
  BodySpanText,
  BodyText,
  IconTicketImg,
  StyledEmailIcon,
  StyledFacebookIcon,
  StyledTwitterIcon,
  SubHeaderIcon,
  TextDate,
  TextDayNumber,
  TextShare,
  Title,
} from "./styles/SubHeaderLayoutStyles";
import FONTS_FAMILY from "../../../../themes/FontsFamily";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
export const SubHeaderLayout = ({ icon, title, conditionRender }) => {
  //const conditionRender = false;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <BoxContainer sx={{ padding: "8px" }}>
      <Stack direction={"row"} width='100%' height='100%'>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >

          <IconButton
            onClick={() =>
              window.open(
                `http://www.facebook.com/sharer.php?u=${window.location.href}`,
                "name",
                "width=600,height=400"
              )
            }
          >
            <StyledFacebookIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              window.open(
                `https://twitter.com/share?text=Ahora es mas facil solicitar tramites con el Portal de TVEO &url=${window.location.href}&hashtags=EDEEsteRD`,
                "name",
                "width=600,height=400"
              )
            }
          >
            <StyledTwitterIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              window.open(
                `mailto:?subject=Ahora es mas facil solicitar tramites con el Portal dE TVEO &body=${window.location.href}`
              )
            }
          >
            <StyledEmailIcon />
          </IconButton>
        </Popover>

        {conditionRender ? (
          <>
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent='flex-end'
              width='20%'
              margin='3px'
            >
              <TextDate>Martes</TextDate>
              <TextDayNumber>20</TextDayNumber>
              <TextDate> November 2021 </TextDate>
            </Stack>

            <Stack
              direction={"row"}
              width='80%'
              alignItems={"flex-end"}
              justifyContent='space-between'
            >
              <Stack
                direction={"column"}
                justifyContent={"flex-end"}
                margin='2px'
              >
                <BodyText>Concierto</BodyText>
                <BodySpanText> The Weekend</BodySpanText>
                <span
                  style={{
                    lineHeight: "24px",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    fontSize: "16px",
                  }}
                >
                  190 Personas Asistirán
                </span>
              </Stack>

              <Stack
                display={{ xs: "none", sm: "flex", md: "flex", xl: "flex" }}
                direction={{
                  xs: "column-reverse",
                  sm: "column",
                  md: "row",
                  xl: "row",
                }}
                width='70%'
                justifyContent='center'
                alignItems={{
                  xs: "flex-start",
                  sm: "center",
                  md: "flex-end",
                  xl: "center",
                }}
              >
                <span style={{ display: "flex", alignItems: "flex-end" }}>
                  <SubHeaderIcon src={LikeIcon} />
                  <TextShare>Te interesa</TextShare>{" "}
                </span>
                <span style={{ display: "flex", alignItems: "flex-end" }}>
                  <SubHeaderIcon src={AssistIcon} />
                  <TextShare> Asistiré</TextShare>
                </span>

                <span
                  onClick={handleClick}
                  style={{ display: "flex", alignItems: "flex-end" }}
                >
                  <SubHeaderIcon src={ShareIcon} />
                  <TextShare> compartir</TextShare>
                </span>
              </Stack>
            </Stack>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              margin: "10px",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Stack
              display='flex'
              direction='row'
              alignItems='center'
              width='90%'
              justifyContent='center'
            >
              <IconTicketImg src={icon} />
              <Title>{title}</Title>
            </Stack>
          </div>
        )}
      </Stack>
    </BoxContainer>
  );
};
