import React, { useState } from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home.js';
import Name from './Name.js';
import Question1 from './Question1.js';
import Question2 from './Question2.js';
import Question3 from './Question3.js';

export default function App(props) {
	const [isSortingStarted, startSorting] = useState(false);
	const [name, setName] = useState('');
	const [answer1, setAnswer1] = useState(0);
	const [answer2, setAnswer2] = useState(0);
	const [answer3, setAnswer3] = useState(0);

	let content;
	if (answer3 > 0) {
	} else if (answer2 > 0) {
		content = <Question3 setAnswer={setAnswer3} />;
	} else if (answer1 > 0) {
		content = <Question2 setAnswer={setAnswer2} />;
	} else if (name) {
		content = <Question1 setAnswer={setAnswer1} />;
	} else if (isSortingStarted) {
		content = <Name setName={setName} />;
	} else {
		content = <Home startSorting={startSorting} />;
	}
	return (
		<div className="App">
			<Navigation />
			{/* <iframe
				title="Harry Potter"
				scrolling="no"
				frameBorder="no"
				allow="autoplay"
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/242840527&color=%23072020&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
			></iframe> */}
			{content}
		</div>
	);
}
