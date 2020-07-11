const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'kata',
	password: 'password',
	database: 'exampleexam',
});

conn.connect((err) => {
	if (err) {
		console.error('Cannot connect to the database', err);
		return;
	}
	console.log('Connection established');
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'assets')));
app.get('/', (req, res) => {});
app.get('/api/links', (req, res) => {
	//It should respond with the stored entries in the following JSON format
	//Note that the secret code is not included
});
app.post('/api/links', (req, res) => {
	//If the alias is already in use respond with 400 status code
	//Else
	//Generate a secret code which is just a random 4-digit integer
	//Store the entry in the database
	//It should respond with the stored entry in the following JSON format
	const url = req.body.url;
	const alias = req.body.alias;
	const hitCount = 0;
	const secretCode = Math.floor(Math.random() * 9999);

	createEntry(url, alias, hitCount, secretCode, (entry) => {
		if (entry.err.contains('list.alias')) console.log(entry);
	});
});
app.get('/a/{alias}', (req, res) => {
	//If the alias exists it should increment the hit count and redirect to the URL otherwise respond with 404 status code
});
app.delete('/api/links/{id}', (req, res) => {
	//The secret code should be in the request's body in JSON format
	//If it doesn't exists respond with 404 status code
	//If it exists but the provided secret code doesn't match respond with 403 status code
	//If it exists and the provided secret code matches delete the entry from the database and respond with 204 status code
});
app.listen(3000, console.log('Listening to port 3000'));

function createEntry(url, alias, hitCount, secretCode, cb) {
	conn.query(
		`insert into list (list_url, alias, hit_count, secret_code)
    values ("${url}", "${alias}", "${hitCount}", ${secretCode});`,

		(err, result) => {
			if (err) {
				console.log(err.sqlMessage);
				cb({ err: err.sqlMessage });
			} else {
				console.log(result);
			}
		}
	);
}
function getEntries(cb) {
	conn.query('select * from posts;', (err, rows) => {
		if (err) {
			console.log(err);
		} else {
			cb(rows);
		}
	});
}
