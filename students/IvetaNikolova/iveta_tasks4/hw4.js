console.log("----------------------- Задача 1: -----------------------");

var colors = ["REd", "Green", "bLuE", "VelvEt", "PURple"];
var colorsLowered = [];

console.log(colors);

function arrayToLowerCase( colors ) {
	for( var i = 0; i < colors.length; i++) {
		colorsLowered[i] = colors[i].toLowerCase();
	}

	console.log( colorsLowered );
}

arrayToLowerCase( colors );


console.log("----------------------- Задача 2: -----------------------");

var numArray = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5];

function logEvenPositiveNumbers( numArray ) {
	for (var i=0; i < numArray.length; i++) {
		if (numArray[i] % 2 === 0 && numArray[i] > 0) {
		console.log(numArray[i]);
		}
	}
}

logEvenPositiveNumbers( numArray );


console.log("----------------------- Задача 3: -----------------------");

var numArray = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5];
numArray.push(6, 7, 8);

var secondArray = [0, 1, 2, 3, 4, 5];

function findOddNumbers( numArray ) {
	for (var i=0; i < numArray.length; i++) {
		if (numArray[i] % 2 !== 0 && numArray[i] > 0) {
			console.log( numArray[i] );
		}
	}
}

findOddNumbers( numArray );

function printArray (secondArray) {
	for ( var j=0; j < secondArray.length; j++){
	console.log( "Element " + secondArray[j]);
	}
}

printArray(secondArray);




