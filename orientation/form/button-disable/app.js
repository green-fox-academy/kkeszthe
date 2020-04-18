const select = document.querySelector('select');
let isCatFactRequired;
select.addEventListener('change', (event) => {
	const signupBTN = document.querySelector('#signup');
	//if (event.target.value === 'dog' || event.target.value === 'cat') {
	//	signupBTN.toggleAttribute('disabled');
	//}

	if (signupBTN.getAttributeNames().includes('disabled')) {
		signupBTN.toggleAttribute('disabled');
	}
});

const catfacts = document.querySelectorAll('input[name="catfacts"]');
catfacts.forEach((option) => {
	option.addEventListener('change', (event) => {
		const catBTN = document.getElementById('cat');
		if (event.target.value === 'yes') {
			catBTN.toggleAttribute('disabled');
			isCatFactRequired = true;
		} else {
			if (!catBTN.getAttributeNames().includes('disabled')) {
				catBTN.toggleAttribute('disabled');
			}
			isCatFactRequired = false;
		}
	});
});
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.preventDefault();
		if (
			document.getElementById('favpet').value === 'goldfish' &&
			isCatFactRequired === false
		) {
			alert('Sigh, we still added you to the cat facts list');
		} else {
			alert("Thank you, you've successfully signed up for cat facts");
		}
	});
});
