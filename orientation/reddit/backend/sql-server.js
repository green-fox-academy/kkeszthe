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
});

function getPosts(cb) {
	conn.query('select * from posts;', (err, rows) => {
		if (err) {
			console.log(err);
		} else {
			cb(rows);
		}
	});
}

function insertPost(title, url, user, cb) {
	conn.query(
		`insert into posts (title, post_url, user, time_stamp)
    values ("${title}", "${url}", "${user}", now());`,

		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Added SQL lines' + result.affectedRows);
			}
		}
	);
}

function deletePost(id) {
	conn.query(`DELETE FROM posts WHERE id = ${id}`, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Deleted SQL lines' + result.affectedRows);
		}
	});
}

module.exports.getPosts = getPosts;
module.exports.insertPost = insertPost;
module.exports.deletePost = deletePost;
