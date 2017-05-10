// JavaScript Document

// взимаме необходимите елементите
var input1Node = document.querySelector("label:nth-child(1)>input");
var input2Node = document.querySelector("label:nth-child(2)>input");
var outputNode = document.getElementById("output");


function calculate(op) {
	var x = getInputValue(input1Node);
	var y = getInputValue(input2Node);
	var result;

	if( op == '+'){
	 	result = sum(x * 1, y * 1);
	}else if( op == '-'){
		result = subtract(x * 1, y * 1);
	}else if( op == '/'){
		divide(x * 1, y * 1);
	}else if( op == '*' ){
		multiply(x * 1, y * 1);
	}else{
		result = "Моля, изберете операцията";
	};

	outputNode.innerHTML =result;
}

function sum(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function divide(x, y) {
	return x / y;
}

function multiply(x, y) {
	return x * y;
}

function getInputValue(node) {
	return node.value;
}


function clearInput() {
	// console.log("clear() is called");
	outputNode.innerHTML = "";
	// input елементите нямат innerHTML !!!
	input1Node.value = "";
	input2Node.value = "";
}