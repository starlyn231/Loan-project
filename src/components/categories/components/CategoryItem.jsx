import React from 'react'

import { Button, Container, Image, Info, Title } from './style/StyleItemCategory'


export const CategoryItem = ({ item }) => {
  return (
    <Container to={`/products/${item.cat}`}>


      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>


    </Container>
  );
};