import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Image, Info, Title } from './style/StyleItemCategory'


export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <div style={{
          width: '100%'
        }}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </Info>
        </div>
      </Link>
    </Container>
  );
};