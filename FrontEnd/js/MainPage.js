const backendLink = 'https://f956-210-218-52-13.jp.ngrok.io';
const header = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};

const ItemList = document.querySelector('.list');

function getListItem() {
	fetch(`${backendLink}/board`, { headers: header })
		.then((response) => response.json())
		.then((data) => console.log(data));
}

function accessCert() {
	if (localStorage.getItem('access-token') == undefined) {
		location.href = 'LoginPage.html';
	}
}

accessCert();
getListItem();
