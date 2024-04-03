import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import QuoteButton from "./components/QuoteButton";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleTweetQuote = () => {
    return `${quote} - ${author}`;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <QuoteBox quote={quote} author={author} />
          <QuoteButton
            onNewQuote={handleNewQuote}
            onTweetQuote={handleTweetQuote()}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
