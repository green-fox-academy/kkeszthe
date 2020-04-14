'use strict';

const activeImage = document.querySelector('.image');
const activeImageTitle = document.querySelector('.imageTitle');
const activeImageDescription = document.querySelector('.imageDescription');
const gallery = [
	{
		path: 'assets/ladybug-on-the-road.jpg',
		title: 'Ladybug on the road',
		description: 'I got really bored with looking for pictures.',
	},
	{
		path: 'assets/low-techy-techy.jpg',
		title: 'Low techy techy',
		description:
			'It is fun as a tourist to visit a low tech location but I would not consider it for a longer period of time.',
	},
	{
		path: 'assets/milkyway-austria.jpg',
		title: 'Milkyway, Austriy',
		description: 'WOWWOWOWOWOWOWOWOWOWOOWOWOWOWOOWOWOWOW!',
	},
	{
		path: 'assets/mountains-with-pink-halo.jpg',
		title: 'Mountains with pink halo',
		description:
			'Seriously, all the saints are envious of these mountains. Get your pink halo TODAY!',
	},
	{
		path: 'assets/serenity-at-play.jpg',
		title: 'Serenity at play',
		description:
			'It screams at you to relax. And for some reason it brings Japanese tea gardens to mind',
	},
	{
		path: 'assets/the-hero-can-never-die.jpg',
		title: 'The hero can never die',
		description:
			'If you believed Abel is really dead, than you are correct. But there is a huge loop-hole there, that he must not stay dead! Watch how he is revived in the next episode of Trinity Blood!',
	},
	{
		path: 'assets/trees-with-sunlight-trickeling-through.jpg',
		title: 'Trees with sunlight trickeling through',
		description:
			'Such a cliche... I know! But who can blame me? It is still beautiful. Additionally, grammar check is welcomed.',
	},
];
const leftButton = document.querySelector('.leftbutton');
const rightButton = document.querySelector('.rightbutton');
let numberOfActiveThumbnail = 0;

function setActiveImageDetails(object) {
	activeImage.setAttribute('src', object.path);
	activeImageTitle.textContent = object.title;
	activeImageDescription.textContent = object.description;
}

setActiveImageDetails(gallery[0]);

gallery.forEach((object, index) => {
	let image = document.createElement('img');
	image.setAttribute('src', object.path);
	image.setAttribute('title', object.title);
	image.setAttribute('class', 'thumbnailButton');
	document.querySelector('.thumbnails').appendChild(image);
	image.onclick = () => {
		setActiveImageDetails(object);
		if (document.querySelector('.active') !== null) {
			document
				.querySelector('.active')
				.setAttribute('class', 'thumbnailButton');
		}
		image.setAttribute('class', 'thumbnailButton active');
		numberOfActiveThumbnail = index;
	};
});
const thumbnailList = document.querySelectorAll('.thumbnailButton');
console.log(thumbnailList);
leftButton.onclick = () => {
	if (document.querySelector('.active') !== null) {
		document.querySelector('.active').setAttribute('class', 'thumbnailButton');
	}
	if (numberOfActiveThumbnail === 0) {
		setActiveImageDetails(gallery[gallery.length - 1]);
		numberOfActiveThumbnail = gallery.length - 1;
		thumbnailList[gallery.length - 1].setAttribute(
			'class',
			'thumbnailButton active'
		);
	} else {
		setActiveImageDetails(gallery[numberOfActiveThumbnail - 1]);
		numberOfActiveThumbnail--;
		thumbnailList[numberOfActiveThumbnail].setAttribute(
			'class',
			'thumbnailButton active'
		);
	}
};
rightButton.onclick = () => {
	if (document.querySelector('.active') !== null) {
		document.querySelector('.active').setAttribute('class', 'thumbnailButton');
	}
	if (numberOfActiveThumbnail === gallery.length - 1) {
		setActiveImageDetails(gallery[0]);
		numberOfActiveThumbnail = 0;
		thumbnailList[0].setAttribute('class', 'thumbnailButton active');
	} else {
		setActiveImageDetails(gallery[numberOfActiveThumbnail + 1]);
		numberOfActiveThumbnail++;
		thumbnailList[numberOfActiveThumbnail].setAttribute(
			'class',
			'thumbnailButton active'
		);
	}
};
