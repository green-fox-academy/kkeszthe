window.addEventListener('keyup', () => {
	console.log(event);
	document.querySelector(
		'h1'
	).textContent = `Last pressed key code is: ${event.keyCode}`;
});
