var imgSources = [
	'http://lorempixel.com/400/200/sports/1',
	'http://lorempixel.com/400/200/sports/2',
	'http://lorempixel.com/400/200/sports/3',
	'http://lorempixel.com/400/200/sports/4',
	'http://lorempixel.com/400/200/sports/5',
];
var imgNode = document.getElementById('theImage');
var prevBTN = document.getElementById('prev');
var nextBTN = document.getElementById('next');
var i = 0;

// set first source as default:
imgNode.setAttribute('src', imgSources[i]);
http://lorempixel.com/400/200/sports/1



nextBTN.addEventListener('click', nextImgSources );

function nextImgSources(){
	// TODO: upload in codepen : 2 variants
	i = ++i % imgSources.length + 1;
	imgNode.setAttribute('src', imgSources[i]);
	console.log("i=", i);
}