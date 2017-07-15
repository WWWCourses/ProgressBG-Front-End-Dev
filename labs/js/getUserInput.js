console.log("PROGRAM START!");

var userName = "iva";
var userTown = "софия";
var userAge = 60;

if( userAge > 18 || userAge < 80){
	console.log("Welcome!");
} else if( userAge > 80){
	console.log("Goodby!")
} else( userAge < 18){
	console.log("Елате след " + (18 - userAge) + " години!")
};
console.log("PROGRAM END!")


// ако userAge > 18 :
// 	console.log("Welcome!")
// ako userAge > 80 :
// 	console.log("Goodby!")
// ako userAge < 18 :
// 	console.log("Елате след X годин!")



