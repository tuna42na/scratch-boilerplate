import React, { useState, useEffect } from "react";

const Philosophy = () => {
  const [quote, setQuote] = useState({});

  const philoURL = "http://philosophy-quotes-api.glitch.me/quotes";

  useEffect(() => {
    fetch(philoURL)
      .then((response) => response.json())
      .then((data) => {
        let i = Math.floor(Math.random() * data.length);
        setQuote(data[i]);
      });
  }, [philoURL]);

  return (
    <>
      <h1>Today's Quote</h1>
      <figure>
        <blockquote>
          <p>{quote ? quote.quote : "Loading...."}</p>
        </blockquote>
        <figcaption> - {quote ? quote.source : "Loading...."}</figcaption>
      </figure>
    </>
  );
};

export default Philosophy;
