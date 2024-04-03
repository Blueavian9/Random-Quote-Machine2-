const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");

async function getRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quoteText.textContent = data.content;
    quoteAuthor.textContent = `- ${data.author}`;
  } catch (error) {
    console.log("Error:", error);
  }
}

// Fetch a random quote on page load
getRandomQuote();

const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", getRandomQuote);

const tweetQuoteLink = document.getElementById("tweet-quote");

function updateTweetLink() {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    quote
  )}%20${encodeURIComponent(author)}`;
  tweetQuoteLink.setAttribute("href", tweetUrl);
}

// Update the tweet link whenever a new quote is fetched
newQuoteButton.addEventListener("click", updateTweetLink);
