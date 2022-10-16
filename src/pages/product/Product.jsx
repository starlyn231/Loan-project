import React, { useEffect, useState } from 'react'
import Announcement from '../../components/Announcement/Announcemnet'
import { Navbar } from '../../components/navbar/Navbar'
import { FilterContainer } from '../ProductList/style/ProductList'
import { AddContainer, Amount, AmountContainer, Button, Container, Desc, Filter, FilterColor, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from './style/ProductStyle'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Newsletter } from '../../components/newsLestter/Newsletter'
import { Footer } from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { publicRequest } from '../../services/RequestMethods'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/CartRedux'
export const Product = () => {
  const location = useLocation();
  const id = (location.pathname.split("/")[2]);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {

    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if (type === "desc") {
      setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }

  }

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));

  }

  return (
    <Container>

      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>   ${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}

              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantity("desc")} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={() => handleClick()}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />

    </Container>
  )
}
