const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes=[];

//Show New Quote
function newQuote(){
 //Pick a random quote from apiQuotes array
 const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
 authorText.textContent = quote.author;
 quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes(){
    const apiURL='https://type.fit/api/quotes';
    try{
         const response = await fetch(apiURL);
         apiQuotes = await response.json();
         console.log(apiQuotes);
         newQuote();
    }catch(error){
        
        // Catch Error Here
    }

getQuotes();
}
