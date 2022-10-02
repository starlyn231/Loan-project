import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import StarIcon from '@mui/icons-material/Star';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ButtonProduct, ContainerDiscount, ContainerImage, ContainerProduct, ProductLike, ProductLikeLabel, ProductPrice, TitleName } from "./style/FlashCardStyle";
import { Box, Rating } from "@mui/material";
import { SampleNextArrow, SamplePrevArrow } from "./Button";

const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const value = 5;

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div >
              <ContainerProduct >
                <ContainerImage>
                  <ContainerDiscount>{productItems.discount}% Off</ContainerDiscount>
                  <img src={productItems.cover} alt='' />
                  <ProductLike>
                    <ProductLikeLabel>{count}</ProductLikeLabel> <br />
                    <FavoriteBorderOutlinedIcon sx={{ color: 'red' }} onClick={increment} />
                  </ProductLike>
                </ContainerImage>
                <div >
                  <TitleName >{productItems.name}</TitleName>


                  <Box
                    sx={{

                      display: 'flex',
                      alignItems: 'center',
                    }}>



                    <Rating
                      name="text-feedback"
                      value={value}
                      readOnly
                      precision={0.5}
                      emptyIcon={<StarIcon style={{
                        opacity: 0.55, fontSize: '20px',
                        color: '#ffcd4e',
                        margin: '5px 5px 5px 0'
                      }} fontSize="inherit" />}

                    />
                    <Box sx={{ ml: 2 }}>{labels[value]}</Box>

                  </Box>
                  <ProductPrice  >
                    <h4>${productItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <ButtonProduct onClick={() => addToCart(productItems)}>
                      <AddOutlinedIcon sx={{ fontSize: '20px', margin: ' 10px 3px' }}
                        onClick={() => addToCart(productItems)} />
                    </ButtonProduct>
                  </ProductPrice>
                </div>
              </ContainerProduct>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
