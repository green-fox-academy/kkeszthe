const button = document.querySelector('button');

button.addEventListener('click', (event) => {
	const p = document.createElement('p');
	p.textContent = '2 seconds ellapsed';
	const body = document.querySelector('body');
	setTimeout(() => {
		body.appendChild(p);
	}, 2000);
});
