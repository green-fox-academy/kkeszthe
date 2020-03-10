let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].innerHTML = paragraphs[paragraphs.length - 1].innerHTML;
}
