'use strict';

const db = require('./sql-server');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Create application
const app = express();

//Allow code to access folder containing static elements as default source.
//First string tells how the public reaches this folder. Second part tells the actual location.
app.use('/assets', express.static(__dirname + '/assets'));

//Allow code to use reference to body
app.use(bodyParser.json());
app.use(cors());

app.get('/hello', (req, res) => {
	res.send('Hello World');
});
app.get('/posts', (req, res) => {
	res.set('Content-Type', 'application/json');
	db.getPosts((posts) => {
		if (posts) {
			let filteredPosts = posts;
			if (req.query.name) {
				filteredPosts = filteredPosts.filter(
					(posts) => post.title === req.query.title
				);
			}
			res.send({
				posts: filteredPosts,
			});
		} else {
			console.log('There are no posts in db');
			res.status(500).send({
				success: false,
			});
		}
	});
	/* Respond-on for 
    res.send(`{"received": ${req.query.input},
        "result": ${req.query.input * 2}}`); */
});
app.post('/posts', (req, res) => {
	const title = req.body.title;
	const url = req.body.url;
	let user = req.query.user;
	if (!user) {
		user = 'tekla';
	}
	db.insertPost(title, url, user, (post) => {
		res.status(200).send({
			success: true,
		});
	});
});

app.delete('/posts', (req, res) => {
	const id = req.body.id;
	db.deletePost(id, () => {
		res.status(200).send({
			success: true,
		});
	});
});

module.exports = app;
