const paragraphs = document.querySelectorAll('p');

if (paragraphs[3].classList.value === 'dolphin') {
	document.querySelector('.apple').textContent = 'pear';
}

if (paragraphs[0].classList.value === 'apple') {
	document.querySelector('.cat').textContent = 'dog';
}

document.querySelector('.apple').classList.add('red');

console.log(document.querySelector('style').innerHTML);

document.querySelector('.balloon').classList.remove('balloon');
