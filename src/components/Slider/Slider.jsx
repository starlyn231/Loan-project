
import React, { useRef, useState } from "react";
import { sliderItems } from "../../util/Data/Data";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
//import { mobile } from "../responsive";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Arrow, Container, Slide, ImgContainer, Image, InfoContainer, Title, Desc, Button, Wrapper } from "./style/SliderStyle";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export const Slider = () => {

  return (
    <Container>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

        {sliderItems.map((item) => (

          < SwiperSlide bg={item.bg} key={item.id} >

            <Slide>


              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>

    </Container >
  );
};

export default Slider;