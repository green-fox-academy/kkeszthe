const body = document.querySelector('body');

function setBodyAttributes() {
	body.style.backgroundImage =
		'url(https://loremflickr.com/g/1280/800/hungary/?v=' +
		Math.floor(Math.random() * 10000000000000000) +
		')';
}
setBodyAttributes();
setInterval(() => {
	setBodyAttributes();
}, 5000);
