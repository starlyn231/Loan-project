import React, { useState } from "react";
import { SubHeaderLayout } from "../../Layout/public/components/subHeader/SubHeaderLayout";
import { Container, IconTicketImg } from "./styles/MyeventStyles";
import IconTicket from "../../assets/icon/IconTicketr.svg";

import {
  ButtonsMenuContainer,
  MediumHeightDivider,
  StyledButtonOutlined,
} from "../../themes/Styles";
import { Stack } from "@mui/system";
import { ButtonGroup } from "@mui/material";
import { History } from "./subViews/history/History";
import { MenuOptions } from "./MyeventsContanst";
import { Currentticket } from "./subViews/CurrentTicket/Currentticket";

export const MyEvents = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleChangeMenu = (menuID) => {
    setActiveMenu(menuID);
    window.location.hash = "";
  };

  return (
    <Container>
      <SubHeaderLayout
        icon={IconTicket}
        title='Mis Eventos'
        conditionRender={false}
      />

      <Stack
        width={{ xs: "100%", sm: "80%", md: "60%", xl: "40%" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          margin: "20px 20px",
        }}
      >
        <ButtonsMenuContainer>
          <ButtonGroup sx={{ margin: "10px", borderRadius: 50 }}>
            <StyledButtonOutlined
              active={activeMenu == MenuOptions.events}
              onClick={() => handleChangeMenu(MenuOptions.events)}
            >
              Tickets actuales
            </StyledButtonOutlined>
            <StyledButtonOutlined
              active={activeMenu == MenuOptions.historyView}
              onClick={() => handleChangeMenu(MenuOptions.historyView)}
            >
              Historiar
            </StyledButtonOutlined>
          </ButtonGroup>
        </ButtonsMenuContainer>
        <MediumHeightDivider />
        {activeMenu == MenuOptions.events ? (
          <Currentticket />
        ) : (
          activeMenu == MenuOptions.historyView && <History />
        )}



        <MediumHeightDivider />
      </Stack>
    </Container>
  );
};
