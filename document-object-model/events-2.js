function createList(htmlElement, list, elementType) {
	list.forEach((element) => {
		const tempListElement = document.createElement(elementType);
		tempListElement.textContent = element;
		htmlElement.appendChild(tempListElement);
	});
}

const body = document.querySelector('body');

const rightList = document.createElement('select');
const middleList = document.createElement('ul');
const leftList = document.createElement('select');

rightList.setAttribute('multiple', 'multiple');
leftList.setAttribute('multiple', 'multiple');

body.appendChild(rightList);
body.appendChild(middleList);
body.appendChild(leftList);

const availableItems = ['bread', 'milk', 'orange', 'tomato'];
const buttonList = ['Up', '>', 'X', 'Down'];
const shoppingCart = [];
// buttonList.forEach((element) => {
// 	const tempListElement = document.createElement('li');
// 	tempListElement.textContent = element;
// 	middleList.appendChild(tempListElement);
// });
createList(rightList, availableItems, 'option');
createList(middleList, buttonList, 'button');
