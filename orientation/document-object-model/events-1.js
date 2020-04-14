const button = document.querySelector('button');
const body = document.querySelector('body');
button.onclick = () => {
	body.classList.toggle('party');
};
