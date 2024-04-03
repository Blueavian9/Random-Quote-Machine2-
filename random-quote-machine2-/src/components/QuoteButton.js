import React from "react";

const QuoteButton = ({ onNewQuote, onTweetQuote }) => {
  return (
    <div className="d-flex justify-content-between">
      <button id="new-quote" className="btn btn-primary" onClick={onNewQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        className="btn btn-twitter"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          onTweetQuote
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteButton;
