import React from 'react'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Circle, Container, Icon, Info } from './style/StyleProduct';
import { Image } from '../Slider/style/SliderStyle';
export const Product = ({ item }) => {

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartCheckoutOutlinedIcon />
        </Icon>
        <Icon>
          <ZoomOutOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  )
}
