//define your messages - it may be more than 5 per variable and many be more than 2 variables
const quotes = ['Be great today!', 'Walk a mile in anothers shoes.', 'Live a fabulous life.', 'Life is a highway!', 'You only live once!'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['6:00 PM', '1:00 PM', '8:00 PM', '12:00 AM', '8:00 AM', '4:00 AM']

//define variables that will randomize your arrays above
const randomQuote = Math.floor(Math.random() * quotes.length);
const randomDay = Math.floor(Math.random() * days.length);
const randomTime = Math.floor(Math.random() * times.length);

//run your code to see results - It should pick a random day and a random quote, run several times to make sure results vary
console.log(days[randomDay], times[randomTime], ':' , quotes[randomQuote]);
