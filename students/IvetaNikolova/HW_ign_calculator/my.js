// JavaScript Document

// взимаме необходимите елементите
var input1Node = document.querySelector("label:nth-child(1)>input");
var input2Node = document.querySelector("label:nth-child(2)>input");
var outputNode = document.getElementById("output");


function clearInput() {
	// console.log("clear() is called");
	outputNode.innerHTML = "";
	// input елементите нямат innerHTML !!!
	input1Node.value = "";
	input2Node.value = "";
}


// calculate(delene)
function calculate(f) {
	console.log("f=", f);
	var x = getInputValue(input1Node);
	var y = getInputValue(input2Node);
	var result = f(+x,+y);

	outputNode.innerHTML =result;
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

function multiply(x, y) {
	return x * y;
}

function getInputValue(node) {
	return node.value;
}


function calculateWithIf(op) {
	var x = getInputValue(input1Node);
	var y = getInputValue(input2Node);
	var result;

	if( op == '+'){
	 	result = sum(x * 1, y * 1);
	}else if( op == '-'){
		result = minus(x * 1, y * 1);
	}else if( op == '/'){
		delene(x * 1, y * 1);
	}else if( op == '*' ){
		ymnojenie(x * 1, y * 1);
	}else{
		result = "Моля, изберете операцията";
	};

	outputNode.innerHTML =result;
}