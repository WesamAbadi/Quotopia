import Got from "../components/Got";
import Popular from "../components/Popular";
import Breaking from "../components/Breaking";
import styled from "styled-components";
import "./Home.css";
import React, { useState, useEffect } from "react";

function Home() {
  const [stateB, setStateB] = useState(false);
  const [stateG, setStateG] = useState(false);
  const [clear, setclear] = useState(false);

  //Make UseEffect on a refresh button, fetch only first time.

  function renderMe(show) {
    if (show === "G") {
      setStateG(true);
      setStateB(false);
      setclear(true);
    } else if (show === "B") {
      setStateG(false);
      setStateB(true);
      setclear(true);
    }
  }
  let initialState = () => {
    setStateG(false);
    setStateB(false);
    setclear(false);
  };

  return (
    <Body>
      <Test>
        <Title>
          <h1>Quotopia!</h1>
          {!clear && <h4>Choose your show</h4>}
        </Title>
        <button onClick={() => renderMe("G")}>Game of Thrones</button>
        <button onClick={() => renderMe("B")}>Breaking Bad</button>
        {clear === true && (
          <button id="clear-btn" onClick={() => initialState()}>
            Clear
          </button>
        )}
        <button id="info">i</button>

        <Main>
          {(stateG || stateB) && (
            <Container>
              <Popular />
              {stateG && <Got />}
              {stateB && <Breaking />}
            </Container>
          )}
        </Main>
      </Test>
    </Body>
  );
}
const Main = styled.div``;
const Test = styled.div`
  padding-top: 10%;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Title = styled.div`
  padding-bottom: 30px;
`;

const Container = styled.div`
  animation: appear;
  animation-duration: 1.1s;
  margin: auto;
  padding: 15px;
  border: 0.3rem solid whitesmoke;
  border-radius: 1rem;
  max-height: 800px;
  width: 90%;
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export default Home;
