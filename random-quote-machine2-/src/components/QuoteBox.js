import React from "react";

const QuoteBox = ({ quote, author }) => {
  return (
    <div id="quote-box" className="text-center">
      <p id="text" className="lead">
        {quote}
      </p>
      <p id="author" className="text-muted">
        - {author}
      </p>
    </div>
  );
};

export default QuoteBox;
