
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
export const Image = styled('div')({
  display: 'flex',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  minHeight: '100vh',
  justifyContent: 'center',
  '@media (min-width:320px)': {
    display: 'none',
  },
  '@media (min-width:768px)': {
    display: 'flex',
  },
  '@media (min-width:1200px)': {
    display: 'flex',
    width: '85%',
  },
});


export const ImgLayoutLeft = () => {
  const { img } = useSelector((state) => state.imgAuth);
  console.log(img)
  return (
    <Image style={{
      backgroundImage: `url(${img})`
    }} />

  )
}
