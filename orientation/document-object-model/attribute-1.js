let image = document.querySelector('img');
console.log(image.getAttribute('src'));
image.setAttribute(
	'src',
	'http://www.seniorplus.hu/wp-content/uploads/2019/01/szala2.jpg'
);
let link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

let secondButton = document.querySelector('.this-one');
secondButton.setAttribute('type', 'button');
secondButton.setAttribute('disabled', '');
secondButton.textContent = "Don't click me!";
