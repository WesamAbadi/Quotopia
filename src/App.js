import React, { useEffect } from "react";
import "./App.css";
const App = () => {
  useEffect(() => {}, []);
  const getQuots = async () => {
    const request = await fetch("https://type.fit/api/quotes");
    const data = request.json();
    console.log(data);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default App;
