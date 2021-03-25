function guess(letter) {
	// find all matches (and their indexes) of letter in wordToGuess
	let matches = wordToGuess.matchAll(new RegExp(letter,"gi"));

	// replace each matched position in board array with the letter
	for (const match of matches) {
		gameBoard.splice(match.index,1,letter);
	}

	console.log(gameBoard);
}

const wordToGuess = "orinoko";

// array of currently guessed letters. Each un-guessed letter is displayed as '_'
let gameBoard = wordToGuess.replace(/\w/g,'_').split('');

// Test
guess('o');
guess('m');
guess('r');
guess('n');
guess('p');
guess('k');

