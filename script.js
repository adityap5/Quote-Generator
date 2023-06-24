let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote:'"A rose by any other name would smell as sweet."',
    person: 'William Shakespeare'
},
{
    quote: '"Ask, and it shall be given you, seek, and you shall find."',
    person: 'the Bible'
}, {
    quote:'"Ask not what your country can do for you, ask what you can do for your country."',
    person: 'John Kennedy'
}, {
    quote:'"Eighty percent of success is showing up."',
    person: 'Woody Allen'
}, {
    quote:'"Genius is one percent inspiration and ninety-nine percent perspiration."',
    person: 'Thomas Edison'
}, {
    quote: '"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."',
    person: 'Martin Luther King'
}, {
    quote: '"I think therefore I am."',
    person: 'Rene Descartes'
}, {
    quote:'"Life is like riding a bicycle. To keep your balance, you must keep moving."',
    person: 'Albert Einstein'
}, {
    quote: '"There is no place like home."',
    person: 'The Wizard of Oz,'
}, {
    quote:'"You must be the change you wish to see in the world."',
    person: 'Mahatma Ghandi'
}, {
    quote: '"What does not kill us makes us stronger."',
    person: 'Friedrich Nietzsche'
}, {
    quote: '"To err is human; to forgive, divine."',
    person: 'Alexander Pope'
},];

btn.addEventListener('click', function () {

    let Random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[Random].quote;
    person.innerText = quotes[Random].person;

})