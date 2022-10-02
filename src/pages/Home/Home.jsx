import React from 'react'
import Announcement from '../../components/Announcement/Announcemnet'
import { Categories } from '../../components/categories/Categories'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import FlashDeals from '../../components/flashDeals/FlashDeals'
import { Newsletter } from '../../components/newsLestter/Newsletter'

import { Products } from '../../components/product/Products'
import Slider from '../../components/Slider/Slider'
import SliderHome from '../../components/SliderCard/Slider'
import { CardSlider } from './components/cardSlider/CardSlider'
import Data from './Data'
import Wrapper from '../../components/wrapper/Wrapper'
import Annocument from '../../components/annocument/Annocument'

export const Home = () => {

  const { productItems } = Data;
  return (
    <>


      <Slider />
      <Categories />
      <FlashDeals productItems={productItems} />

      <Products />
      <CardSlider />
      <Annocument />
      <Wrapper />
      <SliderHome />
    </>
  )
}
