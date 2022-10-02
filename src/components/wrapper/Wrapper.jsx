import React from "react"
import "./style.css"
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
const Wrapper = () => {
  console.log('ss')
  const data = [
    {
      cover: <DeliveryDiningOutlinedIcon />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <CreditScoreOutlinedIcon />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <SecurityOutlinedIcon />,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <RecommendOutlinedIcon />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
