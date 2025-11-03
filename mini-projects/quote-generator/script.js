const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Happiness is not by chance, but by choice.", author: "Unknown" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "It doesn't matter how slow you go as long as you don't stop."}
];

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.getElementById('quote-btn');

function setQuote(q) {
    quote.style.opacity = 0;
    quote.style.transform = 'translateY(6px)';
    author.style.opacity = 0;
    setTimeout(() => {
        quote.textContent = q.text;
        author.textContent = `— ${q.author || 'Unknown'}`;
        quote.style.opacity = 1;
        quote.style.transform = 'translateY(0)';
        author.style.opacity = 1;
    }, 200);
}

let lastIdx = 0; 
function randomQuote() {
    let idx;

    do {
        idx = Math.floor(Math.random() * quotes.length);
    } while (idx === lastIdx);

    lastIdx = idx;
    return quotes[idx];
}

btn.addEventListener('click', () => {
    setQuote(randomQuote());
});

// set initial
setQuote(quotes[0]);


