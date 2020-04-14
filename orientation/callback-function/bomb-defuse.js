const button = document.querySelector('button');
const display = document.querySelector('.display');

button.onclick = () => {
	display.textContent = 'Bomb defused ';
};

for (let i = 0; i <= 10; i++) {
	setTimeout(() => {
		if (display.textContent !== 'Bomb defused ' && i !== 10) {
			display.textContent = 10 - i;
		} else if (i === 10) {
			display.textContent = 'Bomb exploded';
		}
	}, 1000 * i);
}
