const backendLink = 'https://0988-210-218-52-13.eu.ngrok.io';

const contents = document.getElementById('contents');
const title = document.getElementById('title');
const category = document.getElementById('category');
const kind = document.getElementById('kind');
const writeBtn = document.getElementById('write-button');

function writePost() {
	fetch(`${backendLink}/board/add`, {
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

writeBtn.addEventListener('click', () => {
	if (kind.value == '글 종류') {
		console.log('error');
	} else if (category.value == '카테고리') {
		console.log('error');
	} else if (title.value == undefined) {
		console.log('error');
	} else if (contents.value == undefined) {
		console.log('error');
	} else {
		writePost();
	}
});
