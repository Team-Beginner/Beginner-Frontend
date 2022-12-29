const backendLink = 'https://f956-210-218-52-13.jp.ngrok.io';

const ItemList = document.querySelector('.list');

function getListItem() {
	fetch(`${backendLink}/board`, {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			Authorization: localStorage.getItem('access-token'),
		},
	})
		.then((responce) => responce.json())
		.then((response) => {
			console.log(response);
		});
}

function accessCert() {
	if (localStorage.getItem('access-token') == undefined) {
		location.href = 'LoginPage.html';
	}
}

accessCert();
getListItem();
