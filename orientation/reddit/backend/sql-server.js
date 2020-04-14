const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'kata',
	password: 'password',
	database: 'reddit',
});

conn.connect((err) => {
	if (err) {
		console.error('Cannot connect to the database', err);
		return;
	}
	console.log('Connection established');
	conn.end();
});

export function getPosts(cb) {
	conn.query('select * from posts;', (err, rows) => {
		console.log(err);
		if (err) {
			cb();
		} else {
			cb(rows);
		}
	});
}

export function insertPost(title, postURL, user, timestamp, cb) {
	db.query(
		`insert into posts (title, post_url, user, time_stamp)
    values (?, ?, ?, now());`,
		[title, postURL, user],
		(err, result) => {
			if (err) {
				cb();
			} else {
				cb({
					title,
					postURL,
					user,
					id: result.insertId,
				});
			}
		}
	);
}
