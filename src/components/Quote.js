import React, { useEffect, useState } from "react";

function Quote({ title, author }) {
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

  const getQuotes = async () => {
    const api = await fetch("https://breakingbadapi.com/api/quotes");
    const data = await api.json();
    setQuotes(data);
    console.log(data);
  };
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
    //setSearch(""); //sets the search bar empty again
  };

  return (
    <div>
      <h1>I am breaking bad</h1>
      {quotes.map((quote) => {
        if (quote.quote_id <= 4) {
          return (
            <div>
              <p>{quote.quote}</p>
            </div>
          );
        }
      })}
      <h1>{title}</h1>
      <p>{author}</p>
      <img src="" alt="" />
    </div>
  );
}

export default Quote;
