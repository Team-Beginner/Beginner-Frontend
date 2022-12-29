const backendLink = 'https://f956-210-218-52-13.jp.ngrok.io';
const submitBtn = document.getElementById('submit');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const emailError = document.querySelector(".input-error[name='email-error']");
const pwError = document.querySelector(".input-error[name='pw-error']");

const loginForm = document.getElementById('login-form');

function loginPost() {
	fetch(`${backendLink}/member/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email.value,
			password: password.value,
		}),
	})
		.then((responce) => responce.json())
		.then((response) => {
			console.log(response);
			localStorage.setItem('access-token', response.accessToken);
			localStorage.setItem('refresh-token', response.refreshToken);
			location.href = 'MainPage.html';
		});
}
function submit(event) {
	event.preventDefault();

	if (CheckEmail(email.value) == false) {
		emailError.setAttribute('id', 'visible');
		email.style.borderColor = '#FF3737';
		setTimeout(() => {
			emailError.setAttribute('id', 'hidden');
			email.style.borderColor = '#999999';
		}, 3000);
	} else if (password.value == '') {
		pwError.setAttribute('id', 'visible');
		password.style.borderColor = '#FF3737';
		setTimeout(() => {
			pwError.setAttribute('id', 'hidden');
			password.style.borderColor = '#999999';
		}, 3000);
	} else {
		loginPost();
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

function accessCert() {
	if (localStorage.getItem('access-token')) {
		location.href = 'MainPage.html';
	}
}
accessCert();
