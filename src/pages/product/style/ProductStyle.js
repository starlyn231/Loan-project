import { styled } from "@mui/system";

export const Container = styled("div")({
  /*display: 'flex',
  height: '60vh',
  minWidth: ' 280px',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fcf5f5',
  alignItems: 'center',
  flexDirection: 'column',*/
  //display: 'flex',
  "@media only screen and  (max-width:680px)": {},
});

export const Wrapper = styled("div")({
  padding: "50px",
  display: " flex",
  "@media only screen and  (max-width:680px)": {
    padding: "10px",
    flexDirection: "column",
  },
});

export const ImgContainer = styled("div")({
  flex: 1,
});
export const Image = styled("img")({
  width: "100%",
  height: "90vh",
  objectFit: "cover",
  "@media only screen and  (max-width:680px)": {
    height: "40vh",
  },
});

export const InfoContainer = styled("div")({
  flex: 1,
  padding: "0px 50px",
  "@media only screen and  (max-width:680px)": {
    padding: "10px",
  },
});

export const Title = styled("h1")({
  fontWeight: 200,
});

export const Desc = styled("p")({
  margin: "20px 0px",
});
export const Price = styled("span")({
  fontWeight: "100",
  fontSize: "40px",
});

export const FilterContainer = styled("div")({
  width: " 50%",
  margin: "30px 0px",
  display: "flex",
  justifyContent: " space-between",

  "@media only screen and  (max-width:680px)": {
    width: "100%",
  },
});

export const Filter = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: '25pxs'
});

export const FilterTitle = styled('span')({
  fontSize: "20px",
  fontWeight: "200",
});

export const FilterColor = styled("div")((props) => ({
  width: "20px",
  height: " 20px",
  borderRadius: "50%",
  backgroundColor: props.color,
  margin: "0px 5px",
  cursor: "pointer",
}));

export const FilterSize = styled("select")({
  marginLeft: "10px",
  padding: " 5px",
});

export const FilterSizeOption = styled("option")({});

export const AddContainer = styled("div")({
  width: " 50%",
  display: "flex",
  alignItems: "center",
  justifyContent: " space-between",
  "@media only screen and  (max-width:680px)": {
    width: "100%",
  },
});

export const AmountContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
});

export const Amount = styled("span")({
  width: "30px",
  height: "30px",
  borderRadius: "10px",
  border: "1px solid teal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0px 5px",
});

export const Button = styled("button")({
  padding: "15px",
  border: "2px solid teal",
  backgroundColor: "white",
  cursor: "pointer",
  fontWeight: 500,
  "  &:hover ": {
    backgroundColor: "#f8f4f4",
  },
});
