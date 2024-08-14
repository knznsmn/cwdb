// Bindings
const _ = {
	blockquote: document.getElementsByTagName('blockquote')[0],
	quote: document.getElementsByTagName('p')[0],
	author: document.getElementsByTagName('p')[1],
	cite: document.getElementsByTagName('cite')[0],
}

const quotations = [
{
	author: 'Albert Einstein',
	quote: 'Tiktok is stupid.',
	cite: 'Science Toilet',
},
{
	author: 'Julius Cesar',
	quote: 'Indeed, Tiktok is stupid.',
	cite: 'Adventures, Really',
},
]
// Function Hall

function updateQuotes() {
	
	let i = 0;
	const {author, quote, cite} = quotations[i];
	
	_.quote.innerHTML = quote;
	// _.cite.innerText = cite;
	_.author.innerHTML = `&mdash;${author}, <cite>${cite}</cite>`;
	
	i++;
	if (i > quotations.length) {
		i = 0;
	}
}
// main()
updateQuotes();
