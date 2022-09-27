import React from 'react'
import { categories } from '../../util/Data/Data'
import { CategoryItem } from './components/CategoryItem'
import { Container } from './style/StyleCategories'

export const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}
