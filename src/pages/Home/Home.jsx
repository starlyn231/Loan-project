import React from 'react'
import Announcement from '../../components/Announcement/Announcemnet'
import { Categories } from '../../components/categories/Categories'
import { Navbar } from '../../components/navbar/Navbar'

import { Products } from '../../components/product/Products'
import Slider from '../../components/Slider/Slider'

export const Home = () => {


  return (
    <div>

      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}
