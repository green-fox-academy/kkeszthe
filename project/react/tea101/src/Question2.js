import React from 'react';
export default function (props) {
	return (
		<>
			<img
				alt="spring"
				src="http://wallpapervip.com/download/spring_field_4-wallpaper-680x425.jpg"
				onClick={() => props.setAnswer(1)}
			/>
			<img
				alt="summer"
				src="https://st.depositphotos.com/1763233/1271/i/950/depositphotos_12713621-stock-photo-summer-field-of-a-ripe.jpg"
				onClick={() => props.setAnswer(2)}
			/>
			<img
				alt="autumn"
				src="https://images.fineartamerica.com/images-medium-large-5/autumn-field-cheryl-cencich.jpg"
				onClick={() => props.setAnswer(3)}
			/>
			<img
				alt="winter"
				src="https://cdn.pixabay.com/photo/2019/12/02/22/01/snow-4668802_960_720.jpg"
				onClick={() => props.setAnswer(4)}
			/>
		</>
	);
}
