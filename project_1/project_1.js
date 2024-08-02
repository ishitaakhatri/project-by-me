// Variable declarations
let btn = document.querySelector(".new_quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

let quotes = [{
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    person: 'Franklin D. Roosevelt'
}, {
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    person: 'Martin Luther King Jr.'
}, {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    person: 'Ralph Waldo Emerson'
}, {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: 'Winston Churchill'
}, {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: 'Eleanor Roosevelt'
}, {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: 'Confucius'
}, {
    quote: "The best way to predict your future is to create it.",
    person: 'Peter Drucker'
}, {
    quote: "Life is what happens when you're busy making other plans.",
    person: 'John Lennon'
}, {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: 'Nelson Mandela'
}, {
    quote: "Your time is limited, don't waste it living someone else's life.",
    person: 'Steve Jobs'
}];

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
