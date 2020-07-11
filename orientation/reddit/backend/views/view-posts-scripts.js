const leftColumn = document.querySelector('.left');

document.querySelector('button').addEventListener('click', (event) => {
	window.location.replace('create-post.html');
});
function createVoting(htmlElement, post) {
	const votingDiv = document.createElement('div');
	const upvotingBTN = document.createElement('button');
	const downvotingBTN = document.createElement('button');
	const upvotingIMG = document.createElement('img');
	const downvotingIMG = document.createElement('img');

	upvotingIMG.setAttribute('src', '../assets/upvote.png');
	downvotingIMG.setAttribute('src', '../assets/downvote.png');

	upvotingBTN.appendChild(upvotingIMG);
	downvotingBTN.appendChild(downvotingIMG);
	votingDiv.appendChild(upvotingBTN);
	votingDiv.appendChild(downvotingBTN);
	htmlElement.appendChild(votingDiv);
}
function createPostContent(htmlElement, post) {
	const contentDiv = document.createElement('div');
	const h1 = document.createElement('h2');
	const p1 = document.createElement('p');
	const time = calculateTimeDifference(post.time_stamp);
	if (post.title) {
		h1.textContent = post.title;
	} else {
		h1.textContent =
			'Placeholder as the data entry submissions loads SQL with empty data';
	}

	if (post.user) {
		p1.textContent = `Submitted by ${post.user} ${time} ago`;
	} else {
		p1.textContent = `Submitted by Faulty function`;
	}
	contentDiv.appendChild(h1);
	contentDiv.appendChild(p1);
	createLinks(contentDiv, post.id);
	htmlElement.appendChild(contentDiv);
}

function createLinks(htmlElement, id) {
	const container = document.createElement('div');
	const like = document.createElement('a');
	const edit = document.createElement('a');
	const del = document.createElement('a');

	container.setAttribute('class', 'postActions');

	like.innerText = 'Like';
	like.setAttribute('class', 'like');
	edit.innerText = 'Edit';
	edit.setAttribute('class', 'edit');
	del.innerText = 'Delete';
	del.setAttribute('class', 'delete');

	del.addEventListener('click', (event) => {
		const post = document.getElementById(id);
		const values = { id: id };
		leftColumn.removeChild(post);
		fetch('http://localhost:3000/posts', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});
	});
	container.appendChild(like);
	container.appendChild(edit);
	container.appendChild(del);

	htmlElement.appendChild(container);
}

function calculateTimeDifference(sqlTimeStamp) {
	const year = sqlTimeStamp.substring(0, 4);
	const month = sqlTimeStamp.substring(5, 7);
	const day = sqlTimeStamp.substring(8, 10);
	const hour = sqlTimeStamp.substring(11, 13);
	const minute = sqlTimeStamp.substring(14, 16);
	const second = sqlTimeStamp.substring(17, 19);
	const today = new Date();

	console.log(today.getFullYear() - year);
	if (today.getFullYear() - year > 0) {
		return `${today.getFullYear() - year} year(s) ago`;
	}
	if (today.getMonth() - month > 0) {
		return `${today.getMonth() - month} months(s) ago`;
	}
	if (today.getDate() - day > 0) {
		return `${today.getDate() - day} day(s) ago`;
	}
	if (today.getHours() - hour > 0) {
		return `${today.getHours() - hour} hour(s) ago`;
	}
	if (today.getMinutes() - minute > 0) {
		return `${today.getMinutes() - minute} minute(s) ago`;
	}
	if (today.getSeconds() - second > 0) {
		return `${today.getSeconds() - second} second(s) ago`;
	}
}

function displayPost(post) {
	const postDiv = document.createElement('div');

	postDiv.setAttribute('class', 'post');
	postDiv.setAttribute('id', post.id);

	createVoting(postDiv, post);
	createPostContent(postDiv, post);

	leftColumn.insertBefore(postDiv, leftColumn.firstChild);
}

fetch('http://localhost:3000/posts')
	.then((res) => res.json())
	.then((res) => {
		res.posts.forEach((post) => {
			displayPost(post);
		});
	});
