const API_KEY = 'n1PPfs7C7QATmzdwzGxVjbIUgJCOdJaG';
let request = new XMLHttpRequest();

request.onreadystatechange = () => {
	if (request.readyState === 4 && request.status === 200) {
		let body = document.querySelector('body');
		let parsedGifs = JSON.parse(request.response);
		parsedGifs.data.forEach((element) => {
			let img = document.createElement('img');
			img.setAttribute('src', element.images.original_still.url);
			img.onclick = () => {
				img.classList.toggle('static');
				if (img.classList.value === 'static') {
					img.setAttribute('src', element.images.original.url);
				} else {
					img.setAttribute('src', element.images.original_still.url);
				}
			};
			body.appendChild(img);
		});
	}
};
request.open(
	'GET',
	`http://api.giphy.com/v1/gifs/search?q=pumped+gabo&api_key=${API_KEY}&limit=16`
);
request.send(null);
