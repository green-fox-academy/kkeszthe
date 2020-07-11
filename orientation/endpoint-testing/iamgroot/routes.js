const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
	const message = req.query.message;
	if (message === undefined) {
		res.send({
			error: 'I am Groot!',
		});
	} else {
		res.send({ received: message, translated: 'I am Groot!' });
	}
});

app.get('/yondu', (req, res) => {
	let distance = req.query.distance;
	let time = req.query.time;
	let speed = (distance / time).toFixed(1);
	if (time == 0) {
		res.status(400).send({ error: 'Zero is not acceptable to time' });
	} else if (!time || !distance) {
		res.status(400).send({ error: 'Time or/and distance is missing' });
	}

	res.send({
		distance: parseInt(parseInt(distance).toFixed(1)),
		time: parseInt(parseInt(time).toFixed(1)),
		speed: parseInt(speed),
	});
});

const inventory = {
	25: 0,
	30: 0,
	50: 0,
	shipstatus: 'empty',
	ready: false,
};

app.get('/rocket', (req, res) => {
	res.send({
		caliber25: inventory[25],
		caliber30: inventory[30],
		caliber50: inventory[50],
		shipstatus: inventory.shipstatus,
		ready: inventory.ready,
	});
});

app.get('/rocket/fill', (req, res) => {
	const caliber = req.query.caliber;
	const amount = parseInt(req.query.amount);

	if (caliber == 0.25) {
		inventory[25] += amount;
	} else if (caliber == 0.3) {
		inventory[30] += amount;
	} else if (caliber == 0.5) {
		inventory[50] += amount;
	}

	let shipstatus =
		((inventory[25] + inventory[30] + inventory[50]) / 12500) * 100;

	if (shipstatus === 0) {
		inventory.shipstatus = 'empty';
	} else if (shipstatus < 100) {
		inventory.shipstatus = `${shipstatus}%`;
	} else if (shipstatus === 100) {
		inventory.shipstatus = 'full';
		inventory.ready = true;
	} else {
		inventory.shipstatus = 'overloaded';
	}
	if (caliber || amount) {
		res.status(200).send({
			received: caliber,
			amount: amount,
			shipstatus: inventory.shipstatus,
			ready: inventory.ready,
		});
	} else {
		res.status(400).send({
			received: 'nothing',
			amount: 0,
			shipstatus: inventory.shipstatus,
			ready: inventory.ready,
		});
	}
});

module.exports = app;
