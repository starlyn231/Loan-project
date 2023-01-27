import React from "react";

import LikeIcon from "../../../../assets/icon/Favorite.svg";
import AssistIcon from "../../../../assets/icon/Assist.svg";
import ShareIcon from "../../../../assets/icon/Share.svg";

import { BoxContainer } from "../../../../themes/Styles";
import { Stack } from "@mui/material";
import {
  BodySpanText,
  BodyText,
  IconTicketImg,
  SubHeaderIcon,
  TextDate,
  TextDayNumber,
  TextShare,
  Title,
} from "./styles/SubHeaderLayoutStyles";
import FONTS_FAMILY from "../../../../themes/FontsFamily";
export const SubHeaderLayout = ({ icon, title, conditionRender }) => {
  //const conditionRender = false;
  return (
    <BoxContainer sx={{ padding: "8px" }}>
      <Stack direction={"row"} width='100%' height='100%'>
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

                <span style={{ display: "flex", alignItems: "flex-end" }}>
                  <SubHeaderIcon src={ShareIcon} />
                  <TextShare> compartir</TextShare>
                </span>
              </Stack>
            </Stack>
          </>
        ) : (
          <div style={{
            display: 'flex', margin: '10px',
            justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',

          }}>
            <Stack
              display='flex'
              direction='row'
              alignItems='center'
              width='90%'

              justifyContent='center'  >

              <IconTicketImg src={icon} />
              <Title>{title}</Title>
            </Stack>
          </div>
        )}
      </Stack>
    </BoxContainer>
  );
};
