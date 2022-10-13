
import { styled } from '@mui/system';


export const Container = styled('div')({
  /*display: 'flex',
  height: '60vh',
  minWidth: ' 280px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fcf5f5',
  alignItems: 'center',
  flexDirection: 'column',*/
  display: 'flex',
  '@media only screen and  (max-width:680px)': {
    display: 'flex',

    flexDirection: "column"
  },
});

export const Left = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: "column",
  padding: '20px',

})

export const Logo = styled('h1')({

})

export const Desc = styled('p')({
  display: 'flex'
})
export const SocialContainer = styled("div")({
  //  background: 'blue',
  display: 'flex'
})

export const SocialIcon = styled("div")((props) => ({
  // backgroundColor: 'red',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  color: 'white',
  backgroundColor: props.color,
  //backgroundColor: #${(props) => props.color};
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '20px',
}))

export const Center = styled('div')({
  flex: 1,
  padding: '20px',

  '@media only screen and  (max-width:380px)': {
    display: "none"
  },
  //${mobile({ display: "none" })}
})

export const Title = styled('h3')({
  marginBottom: '30px'

})

export const List = styled('ul')({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap'
})

export const ListItem = styled('li')({
  width: '50%',
  marginBottom: '10px'
})

export const Right = styled('div')({
  flex: 1,
  padding: '20px',

  '@media only screen and  (max-width:380px)': {
    backgroundColor: "#fff8f8"
  },
  //${mobile({ backgroundColor: "#fff8f8" })}
})

export const ContactItem = styled('div')({
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center'
})

export const Payment = styled('img')({
  width: '50%',

})
