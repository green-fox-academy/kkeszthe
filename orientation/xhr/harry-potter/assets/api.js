let request = new XMLHttpRequest();
request.onreadystatechange = () => {
	const body = document.querySelector('body');
	const image = document.createElement('img');
	image.setAttribute(
		'src',
		'http://hp.dashofcolor.net/sortinghat/images/sortinghat.png'
	);
	image.setAttribute('title', 'Sorting Hat');
	body.appendChild(image);
	
};
