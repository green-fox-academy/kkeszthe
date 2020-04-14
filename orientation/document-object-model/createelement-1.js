const asteroidList = document.querySelector('.asteroids');
const newAsteroid1 = document.createElement('li');
newAsteroid1.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid1);
const newAsteroid2 = document.createElement('li');
newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);
const newHeading = document.createElement('h1');
newHeading.textContent = 'I can add elements to the DOM!';
document.querySelector('.container').appendChild(newHeading);
const image = document.createElement('img');
image.setAttribute(
	'src',
	'https://toppng.com/uploads/preview/transparent-background-hogwarts-logo-11549537838spc05zgm8l.png'
);
document.querySelector('.container').appendChild(image);
