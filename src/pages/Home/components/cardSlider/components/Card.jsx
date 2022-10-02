import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

//import "./Card.scss";
import { BodyData, BodyText, Container, Image, LinkText, TypeContainer } from "./styleCard";

const Card = ({ data }) => {
  const [pokemon, setPokemon] = useState(null);
  /*
    const getPokemon = async () => {
      await axios
        .get(url)
        .then(({ data }) => setPokemon(data))
        .catch((error) => console.error(error));
    };
  
    useEffect(() => {
      getPokemon();
    }, []);
  */
  console.log(data)
  return (
    <Container >
      <div style={{
        display: 'flex',
        alignItems: 'center', flexDirection: 'column',

      }}>
        <Image src={data.img} />



        <BodyData >


          <LinkText >Informacion Del Departamento</LinkText>

        </BodyData>
      </div>
    </Container>
  );
};

export default Card;