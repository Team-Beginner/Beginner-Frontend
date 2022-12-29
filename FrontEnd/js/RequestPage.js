const backendLink = 'https://bad3-210-218-52-13.jp.ngrok.io';
const header = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};

const ItemList = document.querySelector('.list');
// are you sleeping? if you can watch this sentense, please say something beacause turn on the mic
function getListItem() {
	fetch(`${backendLink}/require`, { headers: header })
		.then((response) => response.json())
		.then((data) => console.log(data));
}

getListItem();
