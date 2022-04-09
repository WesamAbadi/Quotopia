import React, { useEffect, useState } from "react";

function Random() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      "https://game-of-thrones-quotes.herokuapp.com/v1/random/3"
    );
    const data = await api.json();
    setPopular(data);
    console.log(data);
  };

  return (
    <div>
      <h1>RANDOM GOT</h1>
      {popular.map((line) => {
        return (
          <div>
            <p>{line.sentence}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Random;
