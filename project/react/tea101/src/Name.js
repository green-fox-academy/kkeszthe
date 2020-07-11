import React, { useState } from 'react';

export default function (props) {
	const [name, setName] = useState('');
	return (
		<form>
			<legend>Enter your name!</legend>
			<input
				type="text"
				id="name"
				name="name"
				value={name}
				required
				pattern="[A-z]{8,}"
				onChange={(event) => setName(event.target.value)}
			/>
			<button onClick={() => props.setName(name)} id="name">
				This is my name!
			</button>
		</form>
	);
}
