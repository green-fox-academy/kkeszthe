const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/public'));

const mysql = require('mysql');

let conn = mysql.createConnection({
	host: 'localhost',
	user: 'kata',
	password: 'password',
	database: 'bookstore',
});

function generalSearch() {
	const result = [];
	conn.connect((err) => {
		if (err) {
			console.error('Cannot connect to the database', err);
			return;
		}
		console.log('Connection established');
		conn.end();
	});

	conn.query(
		'SELECT book_name, aut_id, cate_id, pub_id, book_price FROM book_mast;',
		(err, rows) => {
			console.log('Data received from Db:\n');
			const table = document.querySelector('table');
			rows.forEach((row) => {
				const tempObject = {
					book_name: row.book_name,
					aut_ame: row.aut_id,
					cate_id: row.cate_id,
					pub_id: row.pub_id,
					book_price: row.book_price,
				};
				result.push(tempObject);

				// const tr = document.createElement('tr');
				// const td1 = document.createElement('td');
				// const td2 = document.createElement('td');
				// const td3 = document.createElement('td');
				// const td4 = document.createElement('td');
				// const td5 = document.createElement('td');
				// td1.textContent = row.boo_nName;
				// td2.textContent = row.aut_name;
				// td3.textContent = row.cate_id;
				// td4.textContent = row.pub_name;
				// td5.textContent = row.price;
				// tr.appendChild(td1);
				// tr.appendChild(td2);
				// tr.appendChild(td3);
				// tr.appendChild(td4);
				// tr.appendChild(td5);
				// table.appendChild(tr);
			});
			return result;
		}
	);
	console.log(result);
	return result;
}

app.get('/books', (req, res) => {
	if (req.query.category !== undefined) {
	} else {
		generalSearch();
	}
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => console.log('Listening to port 8080.'));
