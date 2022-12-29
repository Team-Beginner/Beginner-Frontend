const backendLink = 'https://39d5-210-218-52-13.eu.ngrok.io';
const header = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};

const heading = document.querySelector('.heading');
const date = document.querySelector('.date');
const summary = document.querySelector('summary');
const chatBtn = document.querySelector('#chatButton');

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

chatBtn.addEventListener('click', () => {
	document.querySelector('#comment-input').innerHTML =
		'<input id="comment" type="text" placeholder="댓글 작성하기" /><input id="comment-post" type="button" value="작성" />';
});
