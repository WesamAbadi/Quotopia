import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Got() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      "https://game-of-thrones-quotes.herokuapp.com/v1/random/5"
    );
    const data = await api.json();
    setPopular(data);
    console.log(data);
  };
  let image;
  return (
    <Main>
      <h1>I AM GAME OF THRONES!</h1>
      <br />
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
            line.image = require("../images/GOT2.png");
            console.log(`No image for ${images}.`);
        }

        return (
          <Block key={line.sentence}>
            <T1>
              <p>{line.sentence}</p>
            </T1>
            <T2>
              <img src={line.image} alt="" />
            </T2>

            <img src={require("../images/line.png")} alt="" />
          </Block>
        );
      })}
    </Main>
  );
}
const Main = styled.div`
  font-family: "GOTfont";
`;
const Block = styled.div`
  text-align: center;
  font-family: "GOTfont";
  font-weight: bold;
`;
const T1 = styled.div`
  float: right;
  text-align: justify;
  width: 80%;
`;
const T2 = styled.div`
  text-align: left;
`;

export default Got;
