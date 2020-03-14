'use strict';

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
	console.log('I am running.');
});
app.get('/', function(req, res) {
	if (req.query.name === undefined) {
		res.send('Szia!');
	} else {
		res.send(`Szia ${req.query.name}!`);
	}
});
app.get('/alma', function(req, res) {
	res.sendFile(__dirname + '/public/alma.html');
});
