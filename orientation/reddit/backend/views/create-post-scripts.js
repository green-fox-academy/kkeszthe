const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	//event.preventDefault();
	const title = document.getElementById('title').value;
	const url = document.getElementById('url').value;
	const values = {
		title: title,
		url: url,
	};
	fetch('http://localhost:3000/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	});
});
