const button = document.querySelector('button');
button.addEventListener('click', () => {
	console.log(Date.now());
	//button.disabled = true;
	button.hidden = true;
});
