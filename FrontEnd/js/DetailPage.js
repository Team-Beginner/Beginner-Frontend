const backendLink = 'https://fd9d-211-244-186-39.jp.ngrok.io';

const idk = document.getElementById('idk');
const list = document.getElementById('list');
const heading = document.querySelector('.heading');
const date = document.querySelector('.date');
const summary = document.querySelector('summary');
const chatBtn = document.querySelector('#chatButton');
const comment = document.getElementById('comment');
const commentPost = document.getElementById('comment-post');
let applied = true;

function getItem() {
	fetch(`${backendLink}/board`, { headers: header })
		.then((response) => response.json())
		.then((data) => console.log(data));
}
function accessCert() {
	if (localStorage.getItem('access-token') == undefined) {
		location.href = 'LoginPage.html';
	}
}

function writePost() {
	fetch(`${backendLink}/comment`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			Authorization: localStorage.getItem('access-token'),
		},
		body: JSON.stringify({
			username: localStorage.getItem('username'),
			content: comment.value,
		}),
	}).then((response) => {
		console.log(response);
		comment.value == '';
	});
}

function writeAdd() {
	let today = new Date();
	const li = document.createElement('li');
	li.setAttribute('class', 'list__item');
	document.getElementById('list').appendChild(li);
	li.innerHTML = `<span>${comment.value}<span class="completed"></span></span>
	<div class="item__author">
	<span>${localStorage.getItem('username')}</span><span>${today.getFullYear()}-${
		today.getMonth() + 1
	}-${today.getDay() + 1}</span>
	</div>`;
	comment.value = '';
	cntComment();
}

chatBtn.addEventListener('click', () => {
	document.getElementById('comment-input').style.display = 'flex';
});

function applyFunc(crt) {
	if (crt) {
		let crtMem = 3;
		const fullMem = 4;
		crtMem += 1;
		const applyValue = document.querySelector('#applyMem');
		applyValue.innerText = `${crtMem}/${fullMem}`;
		crt = false;
	} else if (crt == false) {
		alert('이미 등록하셨습니다!');
	}
}
document.getElementById('button').addEventListener('click', applyFunc);

commentPost.addEventListener('click', () => {
	if (comment.value != '') {
		//writePost();
		writeAdd();
	}
});

function cntComment() {
	idk.innerText = list.childElementCount;
}

cntComment();
accessCert();
