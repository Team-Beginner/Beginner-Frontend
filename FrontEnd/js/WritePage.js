const backendLink = 'https://bad3-210-218-52-13.jp.ngrok.io';
const header = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};

const title = document.querySelector('.title').value;
const content = document.querySelector('.contents').value;
const category = document.querySelector('.category').value;
const kind = document.querySelector('.kind').value;

const writeKind = {
	공지: 'notice',
	요청: 'require',
	잡담: 'board',
	모집: 'recruit',
};

function writeBoard() {
	fetch(`${backendLink}/${writeKind[kind]}/add`, {
		method: 'post',
		headers: header,
		body: { content, title, category, kind },
	})
		.then((response) => response.json())
		.then((data) => console.log(data));
}

const button = document.querySelector('.writeButton');
button.addEventListener('click', writeBoard);
