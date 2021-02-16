/* -------------------------------------------------------------------------- */
/*                           task: countEvenNumbers                           */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция countEvenNumbers, която връща броя четни числа в
// подаденият й масив от числа:
function countEvenNumbers(arr) {
	let evenCount = 0;
	for (let i = 0; i < arr.length; i++) {
		const number = arr[i];
		if(number%2===0){
			evenCount+=1;
		}
	}

	return evenCount;
}

// примерно извикване:
let evenCount = countEvenNumbers( [1,4,2,3,5] );
console.log( evenCount );
// 2