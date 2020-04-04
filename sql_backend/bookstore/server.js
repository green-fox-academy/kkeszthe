const express = require('express');
let mysql = require('mysql');

let conn = mysql.createConnection({
	host: 'localhost',
	user: 'kata',
	password: 'password',
	database: 'bookstore',
});

conn.connect((err) => {
	if (err) {
		console.error('Cannot connect to the database', err);
		return;
	}
	console.log('Connection established');
	conn.end();
});

let bookNames = [];

conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
	console.log('Data received from Db:\n');
	rows.forEach((bookName) => {
		console.log(bookName.book_name);
	});
});
