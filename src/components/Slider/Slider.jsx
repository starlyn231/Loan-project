
import React, { useRef, useState } from "react";
import { sliderItems } from "../../util/Data/Data";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
//import { mobile } from "../responsive";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Arrow, Container, Slide, ImgContainer, Image, InfoContainer, Title, Desc, Button, Wrapper, ImageContainer, LogoTVEO, ContainerSection, Row } from "./style/SliderStyle";
import Header from "../Header/Header";
import LogoSecondaryWhite from '../../assets/image/tveo-logo-type-01.svg'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Autoplay, Parallax, Pagination, Mousewheel, Keyboard } from "swiper";
import Select from "./components/BreadcrumbSelect";
import { useNavigate } from "react-router-dom";
import BreadcrumbSelect from "./components/BreadcrumbSelect";

export const Slider = () => {
  const navigation = useNavigate();
  const [parallaxSwiper, setparallaxSwiper] = useState(null)
  const parallaxAumount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <ContainerSection>
      <Container>
        <Header />
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
                  <Row >
                    <LogoTVEO src={LogoSecondaryWhite} />
                    <p style={{ color: 'white', fontSize: '18px', lineHeight: '24px', fontWeight: '400' }}>"Compra tus entradas de Tickets, Reservaciones y realiza Citas con Tveo de forma fácil
                      y sencilla y disfruta el espectáculo!"</p>

                    <div style={{ display: 'flex' }}  >

                      <Button backgroundColor='blue' onClick={() => navigation('/requestseats')}>Obtener boletos</Button>
                      <Button onClick={() => navigation('/register')}>Registrarse</Button>

                    </div>

                  </Row>
                </InfoContainer>

              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>




    </ContainerSection >
  );
};

export default Slider;