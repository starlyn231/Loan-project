
import { Button, Rating } from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';


export const ContainerProduct = styled('div')({
  background: '#fff',

  // padding: '20px',
  position: 'relative',
  borderRadius: '8px',
  boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
  margin: '10px',
  '@media only screen and  (max-width:680px)': {
  },


  '&:hover': {
    opacity: 1
  }
});

export const ContainerImage = styled('div')({
  display: 'flex',

  justifyContent: 'center'
});


export const IconStartRating = styled(StarIcon)({
  opacity: 0.55,
  color: '#ffcd4e',
  margin: '5px 5px 5px 0',


  '@media (min-width:320px)': {
    display: 'none'
  },
  '@media (min-width:768px)': {
    fontSize: '10px',
  },
  '@media (min-width:1200px)': {
    fontSize: '20px',
  }
});
export const RatingComponent = styled(Rating)({



  '@media (min-width:320px)': {
    display: 'none'
  },
  '@media (min-width:768px)': {
    display: 'flex'
  },
  '@media (min-width:1200px)': {
    display: 'flex'
  }
});

export const ContainerDiscount = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  background: ' #e94560',
  padding: ' 3px 10px',
  fontSize: '12px',
  borderRadius: ' 50px',
  color: '#fff',
  margin: '10px',

});


export const ProductLike = styled('div')({
  position: ' absolute',
  top: 0,
  right: 0,
  margin: '10px',
  opacity: 0,
  transition: '0.5s',
  opacity: 1,
  '&:hover': {

  }
});


export const ProductLikeLabel = styled('label')({
  backgroundColor: ' #0f3460',
  padding: ' 1px 10px',
  fontsize: ' 12px',
  color: 'white',
  borderRadius: '50px',
});

export const ButtonProduct = styled(Button)({

  background: 'none',
  color: ' #e94560',
  fontSize: ' 20px',
  transition: '0.5s',
  border: '1px solid rgb(3 0 71 / 9%)',
  width: ' 35px',
  height: ' 35px',
  borderRadius: '5px',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: ' #e94560',
    color: '#fff'
  }
});

export const ProductPrice = styled('div')({

  display: ' flex',
  justifyContent: 'space-between',
  color: ' #e94560',

  '&:hover': {

  }
});


export const TitleName = styled('h3')({

  fontWeight: '400',
  fontSize: '17px'
});



