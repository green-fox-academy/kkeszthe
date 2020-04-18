const nav = document.querySelector('nav');
const imgInspector = document.querySelector('.img-inspector');
const backgroundPosition = [0, 0];
let backgroundSize = 200;
nav.addEventListener('click', (event) => {
	const buttonText = event.srcElement.innerText;
	if (buttonText === 'Up') {
		imgInspector.style.backgroundPositionY = `${(backgroundPosition[1] += 10)}px`;
	} else if (buttonText === 'Down') {
		imgInspector.style.backgroundPositionY = `${(backgroundPosition[1] -= 10)}px`;
	} else if (buttonText === 'Right') {
		imgInspector.style.backgroundPositionX = `${(backgroundPosition[0] += 10)}px`;
	} else if (buttonText === 'Left') {
		imgInspector.style.backgroundPositionX = `${(backgroundPosition[0] -= 10)}px`;
	}
});

nav.addEventListener('click', (event) => {
	const buttonText = event.srcElement.innerText;
	if (buttonText === 'Zoom in') {
		imgInspector.style.backgroundSize = `${(backgroundSize += 20)}%`;
	} else if (buttonText === 'Zoom out') {
		imgInspector.style.backgroundSize = `${(backgroundSize -= 20)}%`;
	}
});
