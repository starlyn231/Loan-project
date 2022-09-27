
import { styled } from '@mui/system';

export const Info = styled('div')({
  opacity: 1,
  width: ' 100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,

  // backgroundColor: 'rgba(0, 0, 0, 0.2)',

  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  transition: 'all 0.5s ease',
  cursor: 'pointer',
  flexDirection: 'column',

  '&:hover ': {
    opacity: 1,
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.1)",
    //backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }

});

export const Container = styled('div')({
  //backgroundColor: 'red',


  display: 'flex',

  height: '60vh',

  minWidth: ' 280px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fcf5f5',
  alignItems: 'center',
  flexDirection: 'column'




});

export const Title = styled('h1')({
  fontSize: '70px',
  marginBottom: '20px'
})

export const Desc = styled('div')({
  fontSize: '24px',
  fontWeight: '300',
  marginBottom: '20px',
  '@media only screen and  (max-width:380px)': {
    textAlign: 'center'
  },
})


export const InputContainer = styled('div')({

  width: ' 50%',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  //alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid lightgray',
  '@media only screen and  (max-width:380px)': {
    width: "80%"
  },

})

export const Input = styled('input')({
  border: 'none',
  flex: 8,
  paddingLeft: '20px'
})



export const Button = styled('button')({
  flex: 1,
  border: 'none',
  backgroundColor: 'teal',
  color: 'white'

})




