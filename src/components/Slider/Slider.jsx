
import React, { useRef, useState } from "react";
import { sliderItems } from "../../util/Data/Data";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
//import { mobile } from "../responsive";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Arrow, Container, Slide, ImgContainer, Image, InfoContainer, Title, Desc, Button, Wrapper, ImageContainer } from "./style/SliderStyle";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Autoplay, Parallax, Pagination, Mousewheel, Keyboard } from "swiper";

export const Slider = () => {
  const [parallaxSwiper, setparallaxSwiper] = useState(null)
  const parallaxAumount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  console.log(sliderItems)
  return (
    <Container>

      <Swiper
        parallax={true}
        spaceBetween={30}
        speed={500}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {sliderItems.map((item) => (

          < SwiperSlide bg={item.bg} key={item.id} >
            <Slide>
              {/*   <div style={{
                backgroundColor: 'pink', width: '100%',
                height: '100%',
                display: 'flex',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center'
              }}>*/}

              <div style={{

                position: ' absolute',
                height: '100%', width: '100%',

              }} data-swiper-parallax={parallaxAumount}
                data-swiper-parallax-opacity={parallaxOpacity}>

                <ImageContainer image={item.img} />
              </div>
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