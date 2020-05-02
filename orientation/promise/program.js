'use strict';
// Ex. 1
//setTimeout(() => console.log('TIMED OUT!'), 300);

require('es6-promise');

//Ex. 2
// const promise = new Promise(function (fulfill, reject) {
// 	setTimeout(() => fulfill('FULFILLED!'), 300);
// });

// promise.then(console.log);

//Ex. 3
// const promise = new Promise(function (fulfill, reject) {
// 	setTimeout(() => reject(new Error('REJECTED!')), 300);
// });

// promise.then(null, onReject);

// function onReject(error) {
// 	console.log(error.message);
// }

//Ex. 4
// const promise = new Promise(function (fulfill, reject) {
// 	fulfill('I FIRED');
// 	reject(new Error('I DID NOT FIRE'));
// });

// promise.then(console.log, onRejected);

// function onRejected(error) {
// 	console.log(error.message);
// }

//Ex. 5
// const promise = new Promise((fulfill, reject) => {
// 	fulfill('PROMISE VALUE');
// });

// promise.then(console.log).then(console.log('MAIN PROGRAM'));

//Ex. 6
// const promise1 = new Promise((fulfill, reject) => {
// 	reject(new Error('REJECTD'));
// });
// promise1.catch((error) => console.log(error.message));

// const promise2 = Promise.resolve('RESOLVED');
// const promise3 = Promise.reject(new Error('REJECTED'));

//Ex. 7
//first().then(second).then(console.log);

//Ex. 8

// function attachTitle(arg1) {
// 	return 'DR. ' + arg1;
// }

// const promise = new Promise((fulfill, reject) => {
// 	fulfill('MANHATTAN');
// });
// promise.then(attachTitle).then(console.log);

//Ex. 9
function parsePromised(input) {
	return JSON.parse(input);
}

try {
	parsePromised(process.argv[2]);
} catch (error) {
	console.log(console.log(error.message));
}
