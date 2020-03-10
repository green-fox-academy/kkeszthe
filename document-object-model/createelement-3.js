const kids = [
	{ petName: 'Wattled crane', owner: 'Bryant' },
	{ petName: 'Devil, tasmanian', owner: 'Alejandro' },
	{ petName: 'Mynah, common', owner: 'Nelie' },
	{ petName: 'Dolphin, common', owner: 'Mariele' },
	{ petName: 'Gray duiker', owner: 'Maddalena' },
	{ petName: 'Crab (unidentified)', owner: 'Lucine' },
	{ petName: 'Ant (unidentified)', owner: 'Lorianna' },
	{ petName: 'Bison, american', owner: 'Tommie' },
	{ petName: 'Yellow mongoose', owner: 'Vivyan' },
	{ petName: 'Carpet snake', owner: 'Veda' },
	{ petName: 'Lesser mouse lemur', owner: 'Isidor' },
];

kids.forEach((element) => {
	const tempArticle = document.createElement('article');
	const tempH3 = document.createElement('h3');
	const tempP = document.createElement('p');
	tempH3.textContent = element.owner;
	tempP.textContent = element.petName;
	tempArticle.appendChild(tempH3);
	tempArticle.appendChild(tempP);
	pets.appendChild(tempArticle);
});
