
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "@mui/material"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div style={{
                display: 'flex',
                height: '50vh', justifyContent: 'center', alignItems: 'center'
              }} key={index}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h1 style={{ fontSize: '60px' }}>{value.title}</h1>
                  <p>{value.desc}</p>
                  <div style={{ width: '100%', }}>

                    <Button variant="outlined" >Visit Collections</Button>
                  </div>





                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img style={{
                    width: '350px',
                    height: ' 80%',
                    objectFit: 'cover',
                    '@media only screen and  (max-width:380px)': {
                      height: "20vh"
                    },
                  }} src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard