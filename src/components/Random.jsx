import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Random() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      "https://game-of-thrones-quotes.herokuapp.com/v1/random/4"
    );
    const data = await api.json();
    setPopular(data);
    console.log(data);
  };
  let image;
  return (
    <div>
      <h1>I am Game of thrones!</h1>
      {popular.map((line) => {
        const images = line.character.house.slug;
        //start the switch
        switch (images) {
          case "lannister":
            line.image = require("../images/Lannister.png");
            break;
          case "baratheon":
            line.image = require("../images/Baratheon.png");
            break;
          case "stark":
            line.image = require("../images/Stark.png");
            break;
          case "targaryen":
            line.image = require("../images/Targaryen.png");
            break;
          default:
            line.image = require("../images/GOT.png");
            console.log(`No image for ${images}.`);
        }

        return (
          <Block key={line.sentence}>
            <p>{line.sentence}</p>
            <img src={line.image} alt="" />
            <h3>----------------</h3>
          </Block>
        );
      })}
    </div>
  );
}

const Block = styled.div`
  text-align: center;
  font-family: "GOTfont";
`;
export default Random;
