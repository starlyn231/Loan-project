import axios from "axios";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./components/Card";
import "swiper/css";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { popularProducts } from "./ContanstPokemons";
import { Grid, useMediaQuery } from "@mui/material";
export const CardSlider = () => {
  const small = useMediaQuery("(min-width:600px)");
  const medium = useMediaQuery("(min-width:900px)");
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=64")
      .then(({ data }) => setPokemons(data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPokemons();
  }, []);


  return (
    <div className='App'>
      <h1 style={{ textAlign: "center" }}>Departamento</h1>

      <div>
        <div className='swiperContainer'>
          <Swiper
            spaceBetween={30}
            slidesPerView={medium ? 3 : 1}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loopedSlides={popularProducts.length}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className='mySwiper'
          // slidesPerView={4}
          >
            {popularProducts?.map((item) => (
              <SwiperSlide key={item.id}>
                <Card data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='pagination' />
      </div>
    </div>
  );
};
