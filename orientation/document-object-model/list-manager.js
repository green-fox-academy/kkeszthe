function createList(htmlElement, list, elementType) {
	list.forEach((element) => {
		const tempListElement = document.createElement(elementType);
		tempListElement.textContent = element;
		htmlElement.appendChild(tempListElement);
	});
}
function getSelection() {
	return document.querySelector('select').selectedIndex;
}
function setSelection(number) {
	document.querySelector('select').selectedIndex = number;
}
function moveSelectionRight() {
	document
		.querySelectorAll('select')[1]
		.add(document.querySelectorAll('select')[0].options[getSelection()]);
}
function removeSelection() {
	document.querySelector('select').remove(getSelection());
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

setSelection(0);

document.querySelectorAll('button').forEach((element) => {
	if (element.textContent === buttonList[0]) {
		element.onclick = () => {
			if (getSelection() === 0) {
				setSelection(availableItems.length - 1);
			} else {
				setSelection(getSelection() - 1);
			}
		};
	} else if (element.textContent === buttonList[1]) {
		element.onclick = () => {
			moveSelectionRight();
			removeSelection();
			setSelection(0);
		};
	} else if (element.textContent === buttonList[2]) {
		element.onclick = () => {
			removeSelection();
			setSelection(0);
		};
	} else if (element.textContent === buttonList[3]) {
		element.onclick = () => {
			if (getSelection() === availableItems.length - 1) {
				setSelection(0);
			} else {
				setSelection(getSelection() + 1);
			}
		};
	}
});
