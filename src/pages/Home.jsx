import Random from "../components/Random";
import Popular from "../components/Popular";
import Quote from "../components/Quote";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

function Home() {
  const [stateB, setStateB] = useState(false);
  const [stateG, setStateG] = useState(false);
  const [clear, setclear] = useState(false);

  function renderMe(show) {
    if (show === "G") {
      setStateG(true);
      setStateB(false);
    } else if (show === "B") {
      setStateG(false);
      setStateB(true);
    }
    if (stateG || stateB) setclear(true);
    else setclear(false);
  }
  let initialState = () => {
    setStateG(false);
    setStateB(false);
    setclear(false);
  };

  return (
    <div>
      <Title>
        <h1>API APP!</h1>
      </Title>
      <button onClick={() => renderMe("G")}>GOT</button>
      <button onClick={() => renderMe("B")}>BRBA</button>
      {clear === true && (
        <button id="clear-btn" onClick={() => initialState()}>
          Clear
        </button>
      )}

      <Main>
        <Container>
          <Popular />
          {stateG === true && <Random />}
          {stateB === true && <Quote />}
        </Container>
      </Main>
    </div>
  );
}
const Main = styled.div``;

const Title = styled.div`
  padding-bottom: 30px;
`;

const Container = styled.div`
  margin: auto;
  padding: 15px;
  border: 0.3rem solid darkkhaki;
  border-radius: 1rem;
  max-width: 90%;
  max-height: 50%;
  height: 800px;
`;

export default Home;
