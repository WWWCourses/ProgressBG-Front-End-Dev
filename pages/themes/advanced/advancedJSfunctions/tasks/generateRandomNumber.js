/* -------------------------------------------------------------------------- */
/*                            task: generateRandomNumber                      */
/* -------------------------------------------------------------------------- */
// Да се дефинира функцията generateRandomNumber(start, end), която генерира
// цяло случайно число в интервала, зададен чрез параметрите start и end.
// Hint: използвайте Math.random() функцията за генериране на случайно число.
function generateRandomNumber(start,end) {
	return Math.floor(Math.random() * (start - end + 1)) + end;
}
// примерно извикване:
let randomNumber = generateRandomNumber(1,100);
console.log( randomNumber );
// randomNumber трябва да е цяло число, 1 >= randomNumber <=100
