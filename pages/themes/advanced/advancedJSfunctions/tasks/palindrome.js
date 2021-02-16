/* -------------------------------------------------------------------------- */
/*                             task: isPalindrome                             */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция isPalindrome, която връща "true" ако подадената й
// като аргумент дума е палиндром, и "false" - ако думата не е палиндром.
// Палиндром е дума, която се чете по един и същ начин от ляво надясно и от
// дясно наляво. Пример за палиндром са: мадам, боб, капак.

function isPalindrome(word) {
	// изчисляваме индекса, който маркира средата на думата:
	let middle = Math.floor(word.length/2);
	console.log(`middle index of ${word} is: ${middle}`);

	for (let i = 0; i < middle; i++) {
		let j = word.length - 1 - i;
		if(word[i]!==word[j]){
			// the word is not palindrome
			return false
		}
	}
	// the word is palindrome
	return true;
}

// примерно извикване:
console.log( isPalindrome("madam") );// true
console.log( isPalindrome("test") ); // false