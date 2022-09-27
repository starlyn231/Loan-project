import { Grid } from '@mui/material'
import React from 'react'
import { popularProducts } from '../../util/Data/Data'
import { Product } from './Product'
import { Container } from './style/Products'


export const Products = () => {

  return (
    <Container>
      <Grid
        container={true}
        spacing={2}


        sx={{
          width: "100%",

          alignItems: "center",

        }}
      >
        {popularProducts.map((item) => (


          <Grid item key={item.id} xs={12} sm={6} md={4} xl={3}>
            <Product item={item} key={item.id} />

          </Grid>
        ))}

      </Grid>
    </Container >
  )
}
