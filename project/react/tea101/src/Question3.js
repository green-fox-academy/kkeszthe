import React from 'react';
export default function (props) {
	return (
		<>
			<img
				alt="noon"
				src="https://i0.wp.com/allsaints-pas.org/wp-content/uploads/2018/10/noon-day.jpg"
				onClick={() => props.setAnswer(1)}
			/>
			<img
				alt="morning"
				src="https://images.unsplash.com/photo-1465488867967-ffb57e7f0a89"
				onClick={() => props.setAnswer(2)}
			/>
			<img
				alt="twilight"
				src="https://images.unsplash.com/photo-1505551986134-9b08dbb02db7"
				onClick={() => props.setAnswer(3)}
			/>
			<img
				alt="night"
				src="https://tellingthetruth1993.files.wordpress.com/2019/11/nighttime-sky-cottagelife.com_.jpg"
				onClick={() => props.setAnswer(4)}
			/>
		</>
	);
}
