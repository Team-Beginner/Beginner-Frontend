const backendLink = 'https://f956-210-218-52-13.jp.ngrok.io';
const header = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};

const heading = document.querySelector('.heading');
const date = docuemnt.querySelector('.date');
const summary = document.querySelector('summary');
// are you sleeping? if you can watch this sentense, please say something beacause turn on the mic
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
accessCert();
getItem();
