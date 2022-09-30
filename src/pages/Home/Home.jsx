import React from 'react'
import Announcement from '../../components/Announcement/Announcemnet'
import { Categories } from '../../components/categories/Categories'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import { Newsletter } from '../../components/newsLestter/Newsletter'

import { Products } from '../../components/product/Products'
import Slider from '../../components/Slider/Slider'

export const Home = () => {


  return (
    <div>


      <Slider />
      <Categories />
      <Products />
      <Newsletter />

    </div>
  )
}
