import React from 'react'
import { Button, Container, Image, Info, Title } from './style/StyleItemCategory'


export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <div style={{
        width: '100%'
      }}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </div>

    </Container>
  );
};