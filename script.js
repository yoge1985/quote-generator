let apiQuotes = [];

const quoteContainer = document.querySelector('.quote-container');
const quoteTxt = document.querySelector('.quote-txt');
const quoteAuthor = document.querySelector('.quote-author');
const printBtn = document.getElementById('print');
const newQouteBtn = document.getElementById('new-quote');

newQouteBtn.addEventListener('click',async function() {

   let currentQuote = await newQuote();
   //set the quote text
   quoteTxt.innerHTML = currentQuote.text;
   console.log(currentQuote);
   //set the quote author
   quoteAuthor.innerHTML = currentQuote.author;
});


//provide a new quote from the apiQuotes array
function newQuote() {
   //provide a random number
   let random = Math.floor(Math.random() * apiQuotes.length);
   return apiQuotes[random];
}

// Get quotes from API
async function getQuotes() {
     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
     try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
     } catch (error) {

     }
}

getQuotes();