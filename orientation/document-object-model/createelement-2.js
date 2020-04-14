const asteroidList = document.querySelector('.asteroids');
asteroidList.removeChild(document.querySelector('li'));
const planetData = [
	{ category: 'inhabited', content: 'Foxes', asteroid: true },
	{ category: 'inhabited', content: 'Whales and Rabbits', asteroid: true },
	{ category: 'uninhabited', content: 'Baobabs and Roses', asteroid: true },
	{ category: 'inhabited', content: 'Giant monsters', asteroid: false },
	{ category: 'inhabited', content: 'Sheep', asteroid: true },
];

planetData.forEach((element) => {
	let tempElement = document.createElement('li');
	if (element.asteroid) {
		tempElement.setAttribute('class', element.category);
		tempElement.textContent = element.content;
		asteroidList.appendChild(tempElement);
	}
});
