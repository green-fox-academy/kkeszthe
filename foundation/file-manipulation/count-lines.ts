// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
const fs = require('fs');
function read(filename: string): number {
	const content = fs.readFileSync(filename, 'utf8');
	const lines = content.split('\n');
	return lines.length;
}
try {
	console.log(read('./text.txt'));
} catch {
	console.log(0);
}

export {};
