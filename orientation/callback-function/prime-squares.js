'use strict';

const section = document.querySelector('section');

for (let i = 1; i <= 100; i++) {
	const tempElement = document.createElement('div');
	tempElement.textContent = i;
	section.appendChild(tempElement);
}

function checkIfPrimeNumber(number) {
	let PrimeState = true;

	if (
		number % 2 === 0 ||
		number % 3 === 0 ||
		number % 5 === 0 ||
		number % 7 === 0
	) {
		PrimeState = false;
	}
	if (number === 2 || number === 3 || number === 5 || number === 7) {
		PrimeState = true;
	}

	return PrimeState;
}
function setClass(htmlElement) {
	const number = parseInt(htmlElement.textContent);
	if (checkIfPrimeNumber(number)) {
		htmlElement.setAttribute('class', 'not-prime');
	} else {
		htmlElement.setAttribute('class', 'prime');
	}
}
const listOfDivs = document.querySelectorAll('div');

//listOfDivs.forEach((item, index) => {
let counter = 0;
setInterval(() => {
	setClass(listOfDivs[counter]);
	counter++;
}, 100);
//});
