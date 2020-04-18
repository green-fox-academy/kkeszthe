'use strict';

const button = document.querySelector('button');
const result = document.querySelector('.result');
button.addEventListener('click', () => {
	result.textContent = document.querySelector('ul').childElementCount;
});
