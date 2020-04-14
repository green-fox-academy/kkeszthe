'use strict';

const express = require('express');
const bodyParser = require('body-parser');

//Create application
const app = express();

//Allow code to access folder containing static elements as default source.
//First string tells how the public reaches this folder. Second part tells the actual location.
app.use('/assets', express.static(__dirname + '/assets'));

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
	console.log(req.body);
	/* db.insertMessage(req.body.title, req.body.postURL, (post) => {
    res.send({
      success: true,
      post
    });
  }); */
});

//Start application
app.listen(3000, () => {
	console.log('I am listening to port 3000');
});
