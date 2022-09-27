import React from 'react'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Circle, Container, Icon, Info } from './style/StyleProduct';
import { Image } from '../Slider/style/SliderStyle';
export const Product = ({ item }) => {

  return (
    <Container>
      <Circle style={{ zIndex: 1 }} />
      <Image style={{ zIndex: 2 }} src={item.img} />
      <Info className="parentClass" style={{ zIndex: 3, }}>
        <Icon>
          <ShoppingCartCheckoutOutlinedIcon />
        </Icon>
        <Icon>
          <ZoomOutOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon sx={{ color: 'red' }} />
        </Icon>
      </Info>
    </Container>
  )
}
