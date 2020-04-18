const button = document.querySelector('button');
let clickCounter = 0;

window.addEventListener('load', () => {
	setTimeout(createClickEvent(), 5000);
});
function createClickEvent() {
	button.addEventListener('click', (event) => {
		clickCounter += 1;
		const p = document.createElement('p');
		p.textContent = '5 seconds elapsed and clicked 3 times';
		const body = document.querySelector('body');

		if (clickCounter === 3) {
			body.appendChild(p);
		}
	});
}
