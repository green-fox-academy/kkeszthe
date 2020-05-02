const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(express.static('./assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`The server is up and running on ${PORT}`);
});

app.get('/doubling', (req, res) => {
	if (req.query.input === undefined) {
		res.send({
			error: 'Please provide an input!',
		});
	} else {
		res.send(`{"received": ${req.query.input},
        "result": ${req.query.input * 2}}`);
	}
});

app.get('/greeter', (req, res) => {
	if (req.query.name !== undefined && req.query.title !== undefined) {
		res.send(
			`{
            "welcome_message": "Oh, hi there ${req.query.name}, my dear ${req.query.title}!"
          }`
		);
	} else if (req.query.name === undefined && req.query.title !== undefined) {
		res.send({
			error: 'Please provide a name!',
			staus: 400,
		});
	} else if (req.query.name !== undefined && req.query.title === undefined) {
		res.send({
			error: 'Please provide a title!',
			status: 400,
		});
	} else {
		res.send({
			error: 'Please provide a name and a title!',
			status: 400,
		});
	}
});

app.get('/appenda/:appendable', (req, res) => {
	if (req.params.appendable !== undefined) {
		res.send({
			appended: `${req.params.appendable}a`,
		});
	} else {
		res.send({ status: 404 });
	}
});
function addUntil(number) {
	let sum;
	if (number === 1) {
		return 1;
	} else {
		return parseInt(number) + addUntil(number - 1);
	}
}
function multiplyUntil(number) {
	if (number === 1) {
		return 1;
	} else {
		return parseInt(number) * multiplyUntil(number - 1);
	}
}

app.post('/dountil/:action', (req, res) => {
	let until = req.body.until;
	let action = req.params.action;
	if (action === 'sum') {
		if (until !== undefined) {
			res.send({ result: addUntil(until) });
		} else {
			res.send({ error: 'Please provide a number!' });
		}
	} else if (action === 'factor') {
		if (until !== undefined) {
			res.send({ result: multiplyUntil(until) });
		} else {
			res.send({ error: 'Please provide a number!' });
		}
	} else {
		res.send({ error: 'Please provide an action and a number!' });
	}
});
