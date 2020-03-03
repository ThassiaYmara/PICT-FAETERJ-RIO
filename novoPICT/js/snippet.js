document.querySelector('.bt-play').addEventListener('click', chooseSnippet, false);

var tab2 = document.querySelector('#tab2');
var gitText = document.querySelector('#tab2 .gig-text');
var resetText = document.getElementsByClassName('reset-message');
var sequentialFunc = document.querySelector('.sequentialFunc');
var sequentialFuncO = document.querySelector('.sequentialFuncO');
var binaryFunc = document.querySelector('.binaryFunc');
var buttonBox = document.querySelector('.buttonBox');
var complexidade = document.querySelector('#complexidade');
var sequentialFuncR = document.querySelector('.sequentialFuncR');
var sequentialFuncOR = document.querySelector('.sequentialFuncOR');
var binaryFuncR = document.querySelector('.binaryFuncR');

function chooseSnippet(evt) {
	if(ANIMATION.cenario[0] == 0)
		return false;

	var target = evt.target || evt.srcElement;
	var main = document.querySelector('#tab2');

}
