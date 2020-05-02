const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.post('/sith', (req, res) => {
	const text = req.body.text;

	if (text === undefined || text === '') {
		res.send({
			error: 'Feed me some text you have to, padawan young you are. Hmmm.',
		});
	} else {
		res.send({ sith_text: `${yodifier(text)}` });
	}
});

function yodifier(text) {
	const sentences = text.split('.');
	const wordsOfSentences = [];
	let yodifiedSentences = [];
	sentences.forEach((sentence) => {
		if (sentence !== '') {
			wordsOfSentences.push(sentence.toLowerCase().trimStart().split(' '));
		}
	});
	wordsOfSentences.forEach((sentenceArray) => {
		yodifiedSentences.push(
			yodifySentence(sentenceArray).charAt(0).toLocaleUpperCase() +
				yodifySentence(sentenceArray).slice(1),
			randomGenerator().trimEnd()
		);
	});

	return yodifiedSentences.join('. ').trimEnd();
}

function yodifySentence(words) {
	const yodifiedWordOrder = [];
	words.forEach((word, index) => {
		if (index % 2 === 0) {
			if (words[index + 1] !== undefined) {
				yodifiedWordOrder.push(words[index + 1]);
			}
			yodifiedWordOrder.push(word);
		}
	});
	return yodifiedWordOrder.join(' ');
}
function randomGenerator() {
	const randomExpressions = ['Arrgh', 'Uhmm', 'Err..err.err'];
	const randomNumber = Math.floor(Math.random() * 2);
	let finalExpression = '';
	for (let i = 0; i <= randomNumber; i++) {
		finalExpression =
			finalExpression +
			randomExpressions[
				Math.floor(Math.random() * (randomExpressions.length - 1))
			] +
			'. ';
	}
	return finalExpression;
}
function randomNumber() {
	Math.floor(Math.random() * 2);
}
app.listen(PORT, () => console.log('Listenting to port 8080'));
