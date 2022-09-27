
import { styled } from '@mui/system';


export const Container = styled('div')({
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




