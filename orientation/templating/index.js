'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

// home page
app.get('/', (req, res) => {
	// render `home.ejs`

	// if (req.query.name === undefined) {
	// 	res.render('home', {
	// 		title: 'Welcome back, Guest',
	// 	});
	// } else {
	// 	res.render('home', {
	// 		title: `Welcome back, ${req.query.name}!`,
	// 	});
	// }
	let { name = 'Guest' } = { name: req.query.name };

	res.render('home', {
		title: `Welcome back, ${name}!`,
	});
});
app.get('/todo', (req, res) => {
	const todos = ['get up', 'survive', 'go back to bed'];
	res.render('todo', {
		title: 'Things to do today:',
		list: todos,
	});
});

app.get('/coctails', (req, res) => {
	const cocktails = [
		{
			name: 'GIN FIZZ',
			price: 1520,
			contains: ['gin', 'sugar', 'lemon juice', 'soda'],
			isAlcoholic: true,
		},
		{
			name: 'BLOODY MARY',
			price: 1650,
			contains: ['vodka', 'tomato juice', 'spices'],
			isAlcoholic: true,
		},
		{
			name: 'SEX ON THE BEACH',
			price: 1850,
			contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'],
			isAlcoholic: true,
		},
		{
			name: 'CUBA LIBRE',
			price: 1850,
			contains: ['rum', 'cola', 'lime juice'],
			isAlcoholic: true,
		},
		{
			name: 'MOJITO',
			price: 1850,
			contains: ['rum', 'sugar', 'lime juice', 'soda water'],
			isAlcoholic: true,
		},
		{
			name: 'LONG ISLAND ICE TEA',
			price: 2450,
			contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'],
			isAlcoholic: true,
		},
		{
			name: 'VIRGIN MOJITO',
			price: 990,
			contains: ['sugar', 'lime juice', 'soda water'],
			isAlcoholic: false,
		},
		{
			name: 'SAFE SEX ON THE BEACH',
			price: 990,
			contains: ['peach schnapps', 'orange juice', 'cranberry juice'],
			isAlcoholic: false,
		},
	];
	const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

	res.render('coctails', {
		coctails: cocktails,
		filter: req.query.alcohol,
		alcoholList: alcoholList,
	});
});

app.get('/weather', (req, res) => {
	const forecasts = [
		{
			city: 'Seattle',
			location: 'Washington, United States',
			weather: [
				{ temp: 11, icon: 'cloudy', message: 'Complete Grey' },
				{ temp: 11, icon: 'cloudy', message: 'Just stay in bed.' },
				{ temp: 13, icon: 'cloudy', message: 'Meh...' },
				{ temp: 12, icon: 'cloudy', message: 'Still meh...' },
				{ temp: 13, icon: 'partly_cloudy', message: 'Not too sunny.' },
			],
		},
		{
			city: 'Miami',
			location: 'Florida, United States',
			weather: [
				{ temp: 33, icon: 'sunny', message: 'Hot.' },
				{ temp: 35, icon: 'sunny', message: 'Too hot!' },
				{ temp: 34, icon: 'sunny', message: 'Sunny.' },
				{ temp: 34, icon: 'sunny', message: 'Beach time!' },
				{ temp: 35, icon: 'sunny', message: 'Here comes the sun.' },
			],
		},
		{
			city: 'Barcelona',
			location: 'Spain',
			weather: [
				{ temp: 19, icon: 'sunny', message: 'Sunny.' },
				{ temp: 15, icon: 'partly_cloudy', message: 'Not too sunny.' },
				{ temp: 17, icon: 'sunny', message: 'So far so good.' },
				{ temp: 16, icon: 'rainy', message: 'Rihanna - Umbrella' },
				{ temp: 18, icon: 'sunny', message: 'Here comes the sun.' },
			],
		},
		{
			city: 'London',
			location: 'United Kingdom',
			weather: [
				{ temp: 4, icon: 'snowy', message: 'Go home winter.' },
				{ temp: 7, icon: 'rainy', message: 'Do you have an umbrella?' },
				{ temp: 10, icon: 'rainy', message: "It's rainy." },
				{ temp: 9, icon: 'rainy', message: 'Meh...' },
				{ temp: 11, icon: 'rainy', message: 'Meh... Again.' },
			],
		},
		{
			city: 'Budapest',
			location: 'Hungary',
			weather: [
				{ temp: 12, icon: 'partly_cloudy', message: "It's cloudy." },
				{ temp: 16, icon: 'rainy', message: 'Sooo... Wet.' },
				{ temp: 18, icon: 'partly_cloudy', message: 'Here comes the sun.' },
				{ temp: 16, icon: 'partly_cloudy', message: 'Not too sunny.' },
				{ temp: 19, icon: 'partly_cloudy', message: 'So far so good.' },
			],
		},
	];

	document.createElement('img');
	res.render('forecasts', {
		forecasts: forecasts,
		filter: req.query.city,
	});
});

// start express app on port 3000
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
