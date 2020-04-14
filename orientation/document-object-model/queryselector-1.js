console.log(b325);
let businessLamp = document.getElementsByClassName('big');
for (let i = 0; i < businessLamp.length; i++) {
	console.log(businessLamp[i]);
}
let conceitedKing = document.querySelectorAll('.container .asteroid');

for (let i = 0; i < conceitedKing.length; i++) {
	alert(conceitedKing[i].textContent);
}

let noBusiness = document.getElementsByTagName('div');
for (let i = 0; i < noBusiness.length; i++) {
	console.log(noBusiness[i]);
}
