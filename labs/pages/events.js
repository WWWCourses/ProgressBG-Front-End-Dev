var imgSources = [
	'http://lorempixel.com/400/200/animals/1',
	'http://lorempixel.com/400/200/animals/2',
	// 'http://lorempixel.com/400/200/animals/3',
	// 'http://lorempixel.com/400/200/animals/4',
	// 'http://lorempixel.com/400/200/animals/5',
];
var imgNode = document.getElementById('theImage');
var prevBTN = document.getElementById('prev');
var nextBTN = document.getElementById('next');
var i = 0;

// set first source as default:
imgNode.setAttribute('src', imgSources[i]);
http://lorempixel.com/400/200/sports/1



nextBTN.addEventListener('click', nextImgSourcesHard );

// по-лесно за разбиране решение
function nextImgSourcesEasy(){
	i++;

	// след последната img => започваме отначало:
	if ( i == imgSources.length){
		i = 0;
	}
	console.log("i=", i);

	imgNode.setAttribute('src', imgSources[i]);
}

// малко по-трудно за разбиране решение
function nextImgSourcesHard(){
	console.log("i=", i);

	imgNode.setAttribute('src', imgSources[++i % imgSources.length]);
}

// nextImgSourcesHard() tip:
// 0 % 2 = 0
// 1 % 2 = 1
// 2 % 2 = 0
// 3 % 2 = 1
// 4 % 2 = 0
// ...