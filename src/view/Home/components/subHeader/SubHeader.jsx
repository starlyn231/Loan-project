import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { Autocomplete } from "@mui/material";
import { Grid } from "@mui/material";
import { hourEvent, placeEvent, SearchEvents } from "../../HomeMock";
import { BoxContainer, FieldTitle } from "../../../../themes/Styles";
import { SearchTextInput } from "../../../../components/Slider/components/BreadcrumbSelectStyles";

export default function SubHeader() {
  const [values, setValues] = useState("");

  const handleChange = (event) => {
    setValues(event.target.value);
  };

  const defaultProps = {
    options: placeEvent,
    getOptionLabel: (option) => option.label,
  };
  const flatProps = {
    options: placeEvent.map((option) => option.label),
  };
  const [value, setValue] = React.useState(null);

  return (
    <BoxContainer padding='20px' justifyContent='center' alignItems='center'>
      <div style={{ width: '100%', }}>
        <Grid
          alignItems='center'
          justifyContent='flex-start'
          container
          direction='row'
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 8, sm: 8, md: 12 }}
        >
          <Grid item xs={8} sm={4} md={4}>
            <FieldTitle style={{ color: 'white', marginBottom: 0 }}>Buscar Evento</FieldTitle>
            <Autocomplete
              getOptionLabel={(option) => option.label}
              sx={{ width: '100%' }}
              options={SearchEvents}
              id="size-small-outlined"
              size="small"
              onChange={handleChange}

              renderInput={(params) =>
                <SearchTextInput

                  {...params}
                  fullWidth



                />}
            />
          </Grid>
          <Grid item xs={8} sm={4} md={4}>
            <FieldTitle style={{ color: 'white', marginBottom: 0 }}>Sitio</FieldTitle>
            <Autocomplete
              getOptionLabel={(option) => option.label}
              sx={{ width: '100%' }}
              options={placeEvent}
              id="size-small-outlined"
              size="small"
              disableCloseOnSelect
              renderInput={(params) =>
                <SearchTextInput

                  {...params}
                  fullWidth



                />}
            />
          </Grid>

          <Grid item xs={6} sm={4} md={4}>
            <FieldTitle style={{ color: 'white', marginBottom: 0 }}>Hora</FieldTitle>
            <Autocomplete
              getOptionLabel={(option) => option.label}
              sx={{ width: '100%' }}
              options={hourEvent}
              id="size-small-outlined"
              size="small"
              disableCloseOnSelect
              renderInput={(params) =>
                <SearchTextInput

                  {...params}
                  fullWidth



                />}
            />
          </Grid>
        </Grid>
      </div>
    </BoxContainer>
  );
}
