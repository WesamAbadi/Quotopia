import React, { useEffect, useState } from "react";
import Quote from "./Quote";
import "./App.css";
const App = () => {
  const apiUrl = "https://type.fit/api/quotes";
  const bbApi = "https://breakingbadapi.com/api/quote";
  const bbRandom = "/random";
  const bbAll = "s";
  //make it that every button className has the api url var, like "/random" and "s"
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("out");
  //Run on page load
  useEffect(() => {
    getQuotes([]);
  }, []);

  async function getQuotes(url) {
    // Storing response
    const response = await fetch(bbApi + bbAll);

    // Storing data in form of JSON
    var data = await response.json();
    setQuotes(data);
    console.log(data[0]);
  }
  //getQuotes([]);
  //Fetch from the API, doesnt work for some
  /* const getQuots2 = async () => {
    setQuotes();
    const request = await fetch(bbApi);
    var data = request.json();
    setQuotes(data);
    console.log(data[1]);
  };
*/
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      {quotes.map((quote) => (
        <Quote title={quote.quote} author={quote.author} key={quote.quote_id} />
      ))}
    </div>
  );
};
export default App;

//!siiiuu
