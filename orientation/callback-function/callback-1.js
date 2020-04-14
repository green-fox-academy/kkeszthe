'use strict';

const mapWith = (array, callback) => {
	let output = [];

	// The mapWith() function should iterate over the given array and call the callback function on every element.
	// It stores the callback return values in the output.
	// The mapWith() should return with the output array.

	for (const element of array) {
		output.push(callback(element));
	}
	return output;
};

const addOne = (number) => {
	return number + 1;
};
const removeSecondLetter = (word) => {
	const tempArray = [];

	word.split('').forEach((element, index) => {
		if (index % 2 !== 0) {
			element = '';
		}
		tempArray.push(element);
	});

	word = tempArray.join('');

	return word;
};
// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
