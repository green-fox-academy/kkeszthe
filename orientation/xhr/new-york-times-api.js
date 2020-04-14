const NYT_API_KEY = 'LcFzpT3bCepVRfVDd9x07fG1qebLNGbM';
const request = new XMLHttpRequest();

request.onreadystatechange = () => {
	if (request.readyState === 4 && request.status === 200) {
		let list = document.querySelector('ul');
		let result = JSON.parse(request.response);
		result.response.docs.forEach((element) => {
			let article = document.createElement('a');
			article.textContent = element.headline.main;
			article.setAttribute('href', element.web_url);
			list.appendChild(article);
			let li2 = document.createElement('p');
			li2.textContent = element.snippet;
			list.appendChild(li2);
			let li3 = document.createElement('p');
			li3.textContent = 'Published on ' + element.pub_date.slice(0, 10);
			list.appendChild(li3);
			console.log(element.pub_date);
		});
	}
};
request.open(
	'GET',
	`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api-key=${NYT_API_KEY}`
);
request.send(null);
