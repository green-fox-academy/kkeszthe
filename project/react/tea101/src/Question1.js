import React from 'react';
export default function (props) {
	return (
		<>
			<img alt="red" src="" onClick={() => props.setAnswer(1)} />
			<img alt="blue" src="" onClick={() => props.setAnswer(2)} />
			<img alt="yellow" src="" onClick={() => props.setAnswer(3)} />
			<img alt="green" src="" onClick={() => props.setAnswer(4)} />
		</>
	);
}
