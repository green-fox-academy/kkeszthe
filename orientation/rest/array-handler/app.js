const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(express.static('./assets'));
app.use(bodyParser.json());

app.post('/arrays', (req, res) => {
	const what = req.body.what;
	const numbers = req.body.numbers;

	if (what === undefined || numbers === undefined) {
		res.send({
			error: 'Please provide what to do with the numbers!',
		});
	} else if (what === 'sum') {
		let sum = 0;
		numbers.forEach((number) => {
			sum += number;
		});
		res.send({ result: sum });
	} else if (what === 'multiply') {
		let multiplied = 1;
		numbers.forEach((number) => {
			multiplied *= number;
		});
		res.send({ result: multiplied });
	} else if (what === 'double') {
		let doubled = [];
		numbers.forEach((number) => doubled.push((number *= 2)));
		res.send({ result: doubled });
	}
});

app.listen(PORT, () => {
	console.log(`The server is up and running on ${PORT}`);
});
