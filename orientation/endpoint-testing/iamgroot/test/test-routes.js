'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('groot endpoint', (t) => {
	request(app)
		.get('/groot')
		.query({ message: 'something' })
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(
			200,
			{
				received: 'something',
				translated: 'I am Groot!',
			},
			t.end
		);
});
test('groot endpoint', (t) => {
	request(app)
		.get('/groot')
		.query()
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(
			200,
			{
				error: 'I am Groot!',
			},
			t.end
		);
});

test('yondu endpoint', (t) => {
	request(app)
		.get('/yondu')
		.query({ distance: 100, time: 10 })
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(
			200,
			{
				distance: 100.0,
				time: 10.0,
				speed: 10.0,
			},
			t.end
		);
});
test('yondu endpoint, zero time', (t) => {
	request(app)
		.get('/yondu')
		.query({ distance: 100, time: 0 })
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(
			400,
			{
				error: 'Zero is not acceptable to time',
			},
			t.end
		);
});

test('yondu endpoint, missing input', (t) => {
	request(app)
		.get('/yondu')
		.query()
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(400, { error: 'Time or/and distance is missing' }, t.end);
});

test('rocket endpont', (t) => {
	request(app)
	.get('/rocket')
})
