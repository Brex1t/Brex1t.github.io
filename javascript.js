var quotes = [
	'Trilby',
	'Warp',
	'Golden Brexit - A Brexit whereby everything works perfectly',
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() *(quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}