const list = ['apple', 'banana', 'cat', 'dog'];
const placeholders = document.querySelectorAll('li');
placeholders.forEach((element, index) => {
	element.textContent = list[index];
});
document.querySelector('ul').setAttribute('class', 'green');
