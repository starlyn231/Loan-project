import { Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { MediumHeightDivider } from '../../themes/Styles'
import { MapWithDirections } from './components/MapWithDirections'

export const Information = () => {
  return (
    <Stack display='flex' justifyContent='center' mt='20px'
      alignItems='center' width='100%' backgroundColor='LightBlue'>


      <Grid
        width='95%'
        backgroundColor='gray'
        direction={'row'}
        container
        item
      >
        <Grid item display='flex' xs={12} sm={6} md={6} justifyContent='center' >
          <div style={{ backgroundColor: 'red', width: '80%' }}>
            The Weeknd ha anunciado una gira mundial para 2021, que comenzará en abril y se prolongará hasta octubre.

            La gira comenzará en Europa y llegará a Estados Unidos y Canadá. Incluirá paradas en las principales ciudades como Londres, París, Berlín,


          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={6}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.27967210508!2d-69.91336948579662!3d18.470986875511187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea561ff4e14d6a1%3A0x7b65dd57804288eb!2sTeatro%20Nacional%20Eduardo%20Brito!5e0!3m2!1sen!2sdo!4v1675108772649!5m2!1sen!2sdo"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/*  <MapWithDirections />*/}

        </Grid>

      </Grid>
      <MediumHeightDivider />
    </Stack>
  )
}
