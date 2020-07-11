import React from 'react';

export default function (props) {
	return (
		<>
			<h1>Hogwarts</h1>
			<button
				onClick={() => {
					props.startSorting(!props.isSortingStarted);
				}}
			>
				Get sorted!
			</button>
		</>
	);
}
