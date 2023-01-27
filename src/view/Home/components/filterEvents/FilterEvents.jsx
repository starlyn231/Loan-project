import { Grid, Grow, MenuList } from "@mui/material";
import { Stack } from "@mui/system";

import { useState } from "react";

import { Row } from "../../../../themes/Styles";
import { ButtonFilter, IconExpandButton, Title } from "../../style/StyleHome";

import Popper from "@mui/material/Popper";
import { BoxContainer, ItemMenu } from "./styles/FilterEventsStyles";
import { useRef } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Select from "../../../../components/Select/Select";
import {
  TitleData,
  DayOfWeek,
  EventType,
  EventCategory,
} from "./MockFilterHome";
import { SelectPopper } from "./subComponents/SelectPopper/SelectPopper";
export const FilterEvents = () => {
  return (
    <Stack
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
      sx={{
        display: "flex",
        width: "90%",
        justifyContent: "space-between",
      }}
    >
      <Stack
        width={{ xs: "100%", sm: "100%", md: "35%" }}
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <Title>Próximos Eventos</Title>
      </Stack>
      <Stack
        justifyContent={{ xs: "center", sm: "flex-end'", md: "flex-end'" }}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <SelectPopper Title='Días de semana' data={DayOfWeek} />
        <SelectPopper Title='Tipo de evento' data={EventType} />
        <SelectPopper Title='Cualquier categoría' data={EventCategory} />
      </Stack>
    </Stack>
  );
};
