import React from 'react'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Circle, Container, Icon, Info } from './style/StyleProduct';
import { Image } from '../Slider/style/SliderStyle';
import { Link } from 'react-router-dom';
export const Product = ({ item }) => {
  console.log(item)
  return (
    <Container>
      <Circle style={{ zIndex: 1 }} />
      <Image style={{ zIndex: 2 }} src={item.img} />
      <Info className="parentClass" style={{ zIndex: 3, }}>
        <Icon>
          <ShoppingCartCheckoutOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`} >
            <ZoomOutOutlinedIcon />
          </Link  >
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon sx={{ color: 'red' }} />
        </Icon>
      </Info>
    </Container>
  )
}
