import React, { useState, useEffect } from "react";
import "./quote.css";

const Quote = () => {
  const [quote, setQuote] = useState([
    "It's not too late to change ourselves and have a meaningful life.",
  ]);
  const [Author, setAuthor] = useState("Hanamichi Sakuragi");
  const [Anime, setAnime] = useState("Gintama");
  const infoQuote = async () => {
    const data = await fetch("https://animechan.vercel.app/api/random");
    const response = await data.json();
    setAuthor(response.character.trim());
    setQuote(response.quote);
    setAnime(response.anime);
  };
  return (
    <div className="main">
      <h1>Anime Quote Generator</h1>
      <div className="quote-main">
        <div>
          <p className="quote-text">&ldquo;{quote}&rdquo;</p>
          <h3 id="author">-{Author}</h3>
        </div>

        <div id="anime-name">
          <h2 id="anime-text">Anime:</h2>
          <h2 id="anime-title">{Anime}</h2>
        </div>
        <div className="views">
          <button id="button" onClick={infoQuote}>
            Generate Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
