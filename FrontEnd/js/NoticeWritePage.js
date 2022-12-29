const backendLink = 'https://39d5-210-218-52-13.eu.ngrok.io';

const contents = document.getElementsByClassName('contents');
const title = document.getElementsByClassName('title');
const category = document.getElementById('category');
const kind = document.getElementById('kind');
const writeBtn = document.getElementById('write-button');

function writePost() {
	fetch(`${backendLink}/notice/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			Authorization: localStorage.getItem('access-token'),
		},
		body: JSON.stringify({
			content: contents.value,
			title: title.value,
			username: localStorage.getItem('username'),
			category: kind.value,
			kind: category.value,
		}),
	}).then((response) => {
		console.log(response);
		location.href('RequireWritePage.html');
	});
}

writeBtn.addEventListener('click', writePost);
