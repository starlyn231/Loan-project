import { TextField, Button } from "@mui/material";
import { styled } from "@mui/system";


export const Container = styled("div")({
  display: "flex",
  width: "100vw",
  height: "100vh",
  background:
    'linear-gradient( rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5) ), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")   center',
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
  "@media only screen and  (max-width:680px)": {},
});

export const Wrapper = styled("div")({
  width: ' 25%',
  padding: '20px',
  backgroundColor: 'white',


  "@media (min-width:320px)": {
    width: "75%",
  },
  "@media (min-width:768px)": {
    width: "45%",
    // height: "50%",
  },
  "@media (min-width:1200px)": {
    width: "35%",

  },

});
export const Title = styled("h1")({
  fontsize: '24px',
  fontWeight: 300,
});

export const Form = styled("form")({
  display: 'flex',
  flexDirection: 'column'
});
export const Input = styled(TextField)({
  flex: 1,
  minWidth: '40%',
  margin: '10px 0',
  padding: '10px',

});


export const ButtonLogin = styled(Button)({
  width: '40%',
  padding: "15px 20px",
  border: 'none',

  backgroundColor: "teal",
  cursor: "pointer",
  color: 'white',
  fontWeight: 500,
  marginBottom: '10px'

});

export const Link = styled('a')({
  margin: '5px 0px',
  fontsize: '12px',
  textDecoration: 'underline',
  cursor: 'pointer'
})
