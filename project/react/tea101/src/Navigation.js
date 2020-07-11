import React from 'react';
export default function (props) {
	return (
		<nav>
			<a href="/" onClick={() => props.startSorting(false)}>
				Home
			</a>
			<div className="dropdown">
				<button className="dropdownbtn">Options</button>
				<div className="dropdown-content">
					<a href="/">Sorting</a>
					<a href="#Link2">List of Students</a>
				</div>
			</div>
		</nav>
	);
}
