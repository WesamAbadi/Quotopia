import Random from "../components/Random";
import Popular from "../components/Popular";
import Quote from "../components/Quote";
import styled from "styled-components";

import React from "react";

function Home() {
  return (
    <Main>
      <Title>
        <h1>API APP!</h1>
      </Title>
      <Container>
        <div>
          <Popular />
          <Random />
          <Quote />
        </div>
      </Container>
    </Main>
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
