const backendLink = 'https://0988-210-218-52-13.eu.ngrok.io';
const header = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};

const ItemList = document.querySelector('.list');
// are you sleeping? if you can watch this sentense, please say something beacause turn on the mic
function getListItem() {
	fetch(`${backendLink}/notice`, { headers: header })
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
