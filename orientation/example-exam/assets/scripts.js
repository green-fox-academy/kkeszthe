const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let url = document.getElementById('url').value;
	let alias = document.getElementById('alias').value;
	const values = {
		url: url,
		alias: alias,
	};
	fetch('http://localhost:3000/api/links', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	})
		.then((res) => res.json())
		.then((res) => console.log('bambi'))
		.catch(console.log);

	const body = document.querySelector('body');
	const oldP = document.querySelector('p');
	if (oldP) {
		oldP.textContent = `Your URL is aliased to ${alias} and your secret code is {secretCode}.`;
	}
	const p = document.createElement('p');
	p.textContent = `Your URL is aliased to ${alias} and your secret code is {secretCode}.`;
	body.insertBefore(p, document.querySelector('form'));
	form.reset();
});
