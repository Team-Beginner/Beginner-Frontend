const backendLink = 'https://fd9d-211-244-186-39.jp.ngrok.io';

const contents = document.getElementById('contents');
const title = document.getElementById('title');
const category = document.getElementById('category');
const kind = document.getElementById('kind');
const writeBtn = document.getElementById('write-button');

function writePost() {
	fetch(`${backendLink}/require/add`, {
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
		location.href('RequestPage.html');
	});
}

writeBtn.addEventListener('click', writePost);
