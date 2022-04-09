import Random from "../components/Random";
import Popular from "../components/Popular";
import Quote from "../components/Quote";

import React from "react";

function Home() {
  return (
    <div>
      <Popular />
      <Random />
      <Quote />
    </div>
  );
}

export default Home;
