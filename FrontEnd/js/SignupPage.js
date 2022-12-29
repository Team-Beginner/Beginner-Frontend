const backendLink = 'https://f956-210-218-52-13.jp.ngrok.io';

const email = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const emailCert = document.getElementById('email-certify');
const stdNum = document.getElementById('student-num');
const stdName = document.getElementById('name');
const password = document.getElementById('password');
const rewritePw = document.getElementById('rewrite-pw');
const postBtn = document.getElementById('email-post-btn');
const headBtn = document.getElementById('email-head-btn');

const form = document.getElementById('forgot-pw-form');

const errorMsgList = [
	'이메일을 다시 입력해주세요.',
	'인증코드가 다릅니다.',
	'학번을 다시 입력해주세요.',
	'이름을 다시 입력해 주세요.',
	'비밀번호가 서로 다릅니다.',
];

function emailPost() {
	fetch(`${backendLink}/email/send`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify({
			email: email.value,
		}),
	}).then((response) => {
		console.log(response);
	});
}

function emailHead() {
	fetch(
		`${backendLink}/email?email=${email.value}&&authKey=${emailCert.value}`,
		{
			method: 'HEAD',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	).then((response) => {
		console.log(response);
		if (response.ok == true) {
			emailCert.disabled = true;
			email.disabled = true;
			postBtn.style.backgroundColor = '#00CE5D';
			headBtn.style.backgroundColor = '#00CE5D';
		}
	});
}

function memberSignup() {
	fetch(`${backendLink}/member/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email.value,
			password: password.value,
			name: stdName.value,
			number: stdNum.value,
			role: 'STUDENT',
		}),
	}).then((response) => {
		console.log(response);
	});
}

function submit(event) {
	event.preventDefault();

	if (!CheckEmail(email.value)) {
		errorShow(email, 0);
	} else if (emailCert.value == '') {
		errorShow(emailCert, 1);
	} else if (stdNum.value == '') {
		errorShow(classNum, 2);
	} else if (stdName.value == '') {
		errorShow(stdName, 3);
	} else if (password.value != rewritePw.value || password.value == '') {
		errorShow(password, 4);
	} else {
		memberSignup();
	}
}

function errorShow(str, num) {
	errorMsg.innerText = errorMsgList[num];
	errorMsg.setAttribute('class', 'visible');
	str.style.borderColor = '#FF3737';
	setTimeout(() => {
		errorMsg.setAttribute('class', 'hidden');
		str.style.borderColor = '#999999';
	}, 3000);
}

function CheckEmail(str) {
	var reg_email =
		/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

	if (!reg_email.test(str)) {
		return false;
	} else {
		return true;
	}
}

postBtn.addEventListener('click', emailPost);
headBtn.addEventListener('click', emailHead);
form.addEventListener('submit', submit);
