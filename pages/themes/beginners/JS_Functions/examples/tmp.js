// x is global variable
let x = 5;

function foo() {
	// y is local variable
	let y = 10;
	console.log(`x in foo: ${x}`); // x in foo: 5
	console.log(`y in foo: ${y}`); // y in foo: 10
}

foo();

console.log(`x in global: ${x}`); // x in global: 5
console.log(`y in global: ${y}`); // ReferenceError: y is not defined
