const url = 'http://api.icndb.com/jokes/random';
const button = document.querySelector('button');
button.addEventListener('click', () => {
	fetch(url)
		.then(getResponse)
		.then(getJoke)
		.then(addJokeToDOM)
		.catch((error) => addJokeToDOM(error.message));
});

function getResponse(response) {
	if (response.status.ok) {
		return response.json();
	}
	throw new Error('Nem műkszik');
}

function getJoke(response) {
	return response.value.joke;
}
function addJokeToDOM(response) {
	const div = document.querySelector('div');
	const p = document.createElement('p');
	p.textContent = response;
	div.appendChild(p);
}
