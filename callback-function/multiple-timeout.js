'use strict';

const words = ['apple', 'pear', 'melon', 'grapes'];
const time = [0, 1000, 3000, 5000];

words.forEach((word, index) => {
	setTimeout(() => {
		console.log(word);
	}, time[index]);
});
// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds
