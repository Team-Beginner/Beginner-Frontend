const submitBtn = document.getElementById('submit');
const emailInput = document.querySelector('#email');
const pwInput = document.querySelector('#password');

const emailError = document.querySelector(".input-error[name='email-error']");
const pwError = document.querySelector(".input-error[name='pw-error']");

const loginForm = document.getElementById('login-form');

function submit(event) {
	event.preventDefault();

	if (CheckEmail(emailInput.value) == false) {
		emailError.setAttribute('id', 'visible');
		emailInput.style.borderColor = '#FF3737';
		setTimeout(() => {
			emailError.setAttribute('id', 'hidden');
			emailInput.style.borderColor = '#999999';
		}, 3000);
	} else if (pwInput.value == '') {
		pwError.setAttribute('id', 'visible');
		pwInput.style.borderColor = '#FF3737';
		setTimeout(() => {
			pwError.setAttribute('id', 'hidden');
			pwInput.style.borderColor = '#999999';
		}, 3000);
	} else {
		loginFetch();
	}
}

loginForm.addEventListener('submit', submit);

function CheckEmail(str) {
	var reg_email =
		/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

	if (!reg_email.test(str)) {
		return false;
	} else {
		return true;
	}
}

// git pull origin master
// git fetch origin
// feature/{기능이름}
