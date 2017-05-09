// взимаме необходимите елементите
var input1Node = document.querySelector("label:nth-child(1)>input");
var input2Node = document.querySelector("label:nth-child(2)>input");
var outputNode = document.getElementById("output");

var btnSum = document.getElementById('sum');
var btnMinus = document.getElementById('minus');
var btnDelene = document.getElementById('delene');
var btnYmnojenie = document.getElementById('ymnojenie');

btnSum.addEventListener('click', createFunction );
// btnMinus.addEventListener('click',  );
// btnDelene.addEventListener('click', calculate(delene) );
// btnYmnojenie.addEventListener('click', calculate(ymnojenie) );


function createFunction(){
	return function calculate(f) {
		console.log("Calculate is fired!");
		var x = getInputValue(input1Node);
		var y = getInputValue(input2Node);
		var result = f(+x,+y);
	}

}
// calculate(delene)
function calculate(f) {
	console.log("Calculate is fired!");
	var x = getInputValue(input1Node);
	var y = getInputValue(input2Node);
	var result = f(+x,+y);
}


function sum(x, y) {
	return x + y;
}

function minus(x, y) {
	return x - y;
}

function delene(x, y) {
	return x / y;
}

function ymnojenie(x, y) {
	return x * y;
}

function getInputValue(node) {
	return node.value;
}