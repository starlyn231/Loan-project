import { useEffect, useMemo, useState } from "react";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { arraySeat2, test, test2 } from "./MockRequest";
import {
  ButtonContainer,
  ButtonGeneral,
  Container,
  ContainerIcon,
  TitleCategory,
} from "./styles/RequestSeatsStyles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import {
  BoxContainer,
  MediumHeightDivider,
  SmallHeightDivider,
} from "../../themes/Styles";
import { styled } from "@mui/system";
import COLORS from "../../themes/Colors";
import { Grid, Stack } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, increase } from "../../Redux/feature/CartSlices";
import Tooltip from "@mui/material/Tooltip";
import { SubHeaderLayout } from "../../Layout/public/components/subHeader/SubHeaderLayout";


export const RequestSeats = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticket, setticketSelected] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [dataTicket, setdataTicket] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [ActiveMenu, setActiveMenu] = useState("");
  const [products, setFilteredProducts] = useState([]);
  const IconEventSeatIcon = styled(EventSeatIcon)({
    "&:nth-child(2)": {
      marginRight: "30px",
    },
    "&:nth-child(10)": {
      marginLeft: "30px",
    },

    "@media (min-width:320px)": {
      fontSize: "23px",
    },
    "@media (min-width:768px)": {
      fontSize: "25px",
    },
    "@media (min-width:1200px)": {
      fontSize: "35px",
    },
  });

  const itemTicket = [];

  const handleClick = (subItem) => {
    // setticketSelected(subItem);

    const { id, costo, cat, ocupado } = selectedSeats;
    console.log(ocupado, costo, cat, id);
    // .c   ;
    dispatch(addToCart({ id, costo, cat, ocupado, quantity }));
    console.log(selectedSeats.costo);
  };

  console.log(cart);

  /*
    const getTotalQuantity = () => {
      let total = 0
      cart.forEach(item => {
        total += item.quantity
      })
      return total
    }
  */

  const filterArrayByCategory = () => {
    ///TO DO DONT FILTER WHEN SELECTED CATEGORY IS EQUAL THAN todas
    let arrayFiltered = [];

    if (selectedCategory === "todas") {
      const filteredIdsInArraysAll = test.map((item) =>
        item.seat.map((subItem) => {
          return subItem.id;
        })
      );
      filteredIdsInArraysAll.map((item) => {
        if (item === undefined) {
          return undefined;
        }
        item.filter((subItem) => {
          if (subItem !== undefined) arrayFiltered.push(subItem);
        });
      });

      return arrayFiltered;
    } else {
      const filteredIdsInArrays = test.map((item) =>
        item.seat.map((subItem) => {
          if (subItem.cat === selectedCategory) return subItem.id;
        })
      );

      filteredIdsInArrays.map((item) => {
        if (item === undefined) {
          return undefined;
        }
        item.filter((subItem) => {
          if (subItem !== undefined) arrayFiltered.push(subItem);
        });
      });

      return arrayFiltered;
    }
  };

  const filteredArrayByCategory = useMemo(
    () => filterArrayByCategory(),
    [selectedCategory]
  );
  // console.log(filteredArrayByCategory);

  // console.log(selectedCategory);
  const handleTypeChange = (value) => {
    setActiveMenu(value);
    setSelectedCategory(value);
  };

  //let result = test.filter((subItem) => subItem.id == 1);

  const renderedSeats = test.map((item) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TitleCategory>{item.category}</TitleCategory>
      {item.seat.map((subItem) => (
        <Tooltip
          style={subItem.ocupado ? { pointerEvents: "none" } : {}}
          title={subItem.cat + " " + subItem.costo}
          placement='top-start'
        >
          <IconEventSeatIcon
            onClick={() => {
              subItem.ocupado ? console.log("busy") : setSelectedSeats(subItem);
            }}
            sx={{
              color: subItem.ocupado
                ? "black"
                : !filteredArrayByCategory?.includes(subItem?.id)
                  ? COLORS.fieldGray
                  : "green",
              margin: "10px",
              //  pointerEvents: subItem.ocupado ? "none" : "auto",
              cursor: subItem.ocupado ? "not-allowed" : "pointer",
              /*   backgroundColor: selectedSeats?.includes(subItem.id)
                   ? "yellow"
                   : null*/
            }}
          />
        </Tooltip>
      ))}
      <TitleCategory>{item.category}</TitleCategory>
    </div>
  ));

  console.log(selectedSeats);
  useEffect(() => {
    setSelectedCategory("todas");
  }, []);

  const handleQuantity = (type) => {
    if (type === "desc") {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    // action on update of selectedSeats
  }, [selectedSeats]);
  const [count, setCount] = useState(0);
  const updateCount = () => {

    dispatch(increase(count));
  }

  return (
    <Container>
      <SubHeaderLayout conditionRender={true} />
      <Stack
        width={{ xs: "100%", sm: "100%", md: "85%" }}
        sx={{
          display: "flex",
          flexDirection: "column",

          margin: "20px 20px",
        }}
      >
        <Grid
          container={true}
          width='100%'
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <ButtonGeneral
              active={ActiveMenu == "todas"}
              onClick={() => handleTypeChange("todas")}
              //onClick={() => setSelectedCategory("todas")}
              // onClick={() => setSelectedCategory("todas")}
              color='black'
            >
              Todas
            </ButtonGeneral>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ButtonGeneral
              active={ActiveMenu == "general"}
              onClick={() => handleTypeChange("general")}
              color='white'
            >
              General RD$ 2,000.00
            </ButtonGeneral>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ButtonGeneral
              active={ActiveMenu == "VP"}
              onClick={() => handleTypeChange("VP")}
            >
              Vip Platinum RD$ 4,000.00
            </ButtonGeneral>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ButtonGeneral
              active={ActiveMenu == "SG"}
              onClick={() => handleTypeChange("SG")}
            >
              Special Guest RD$ 4,000.00
            </ButtonGeneral>
          </Grid>
        </Grid>

        <MediumHeightDivider />
        <p>{/* getTotalQuantity() || 0 */}</p>
        <Grid
          container={true}
          width='100%'
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            item
            xs={12}
            sm={12}
            md={8}
          >
            {renderedSeats}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginTop: "40px",
              }}
            >
              {arraySeat2.map((itemSeat) => (
                <>
                  <IconEventSeatIcon
                    sx={{ color: itemSeat.color, marginRight: "5px" }}
                  />
                  <p
                    style={{
                      display: "flex",
                      letterSpacing: "-0.24px ",
                      lineHeight: "15px",
                      fontSize: "11px",
                      alignSelf: "center",
                      marginTop: "auto",
                      marginRight: "10px",
                    }}
                  >
                    {itemSeat.status}
                  </p>
                </>
              ))}
            </div>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            item
            xs={12}
            sm={12}
            md={4}
          >
            <p
              style={{
                fontSize: "2px",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
              }}
            >
              Cantidad de ticket
            </p>

            <ContainerIcon>
              <AddBoxIcon onClick={() => updateCount()} />
              <p
                style={{ display: "flex", alignSelf: "center", margin: "auto" }}
              >
                {cart.quantity}
              </p>
              <IndeterminateCheckBoxIcon
                onClick={() => handleQuantity("desc")}
                sx={{ justifySelf: "flex-end" }}
              />
            </ContainerIcon>

            <h3
              style={{
                fontWeight: 400,
                letterSpacing: "0.1em",
                fontSize: " 24px",
                lineHeight: " 29px",
                margin: "1.5rem 0 2rem 0",
              }}
            >
              Total: $ {cart.total}
            </h3>

            <ButtonContainer>
              <ButtonGeneral
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => {
                  handleClick();
                }}
                backgroundColor='black'
                color='white'
              >
                Agregar al carrito
              </ButtonGeneral>
            </ButtonContainer>
          </Grid>
        </Grid>
        <MediumHeightDivider />
      </Stack>
    </Container >
  );
};
