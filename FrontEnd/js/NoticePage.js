const backendLink = 'https://fd9d-211-244-186-39.jp.ngrok.io';

const ItemList = document.querySelector('.list');
// are you sleeping? if you can watch this sentense, please say something beacause turn on the mic
function getListItem() {
	fetch(`${backendLink}/notice`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	})
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
