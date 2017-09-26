// целта е да представим в JavaScript двумерна дъска за игра, (например - "Морски шах"), която в последствие ще можем лесно да променяме за да отразим текущото състояние на играта.

//   -----------
//  | 0 | 0 | 0 |
//  -------------
//  | 0 | 0 | 0 |
//  -------------
//  | 0 | x | 0 |
//   -----------
//      фиг.1

// Вариант 1: едномерен масив:
// можем да използваме едномерен масив, в който полетата от дъската са представени последователно.
// Тоест, дъската от фиг.1 би изглеждала така:
var board1d = [ 0, 0, 0, 0, 0, 0, 0, 'x', 0 ];
	           // 1  2  3  4  5  6  7   8   9

// Вариант 2: двумерен масив:
// по-интутивен, тъй като следва реалната двумерна структура на дъската:
//
//     j: 0  1   2
//  i: ------------
//   0 | 0 | 0 | 0| -> row1 ( i = 0)
//   - -----------
//   1 | 0 | 0 | 0| -> row2 ( i = 1)
//   - -----------
//   2 | 1 | x | 0| -> row3 ( i = 2)
//     ------------
//
var board2d = [
	[ 0,  0 , 0 ],
	[ 0,  0 , 0 ],
	[ 0, 'x', 0 ]
];

// Зaдaча:
// дефинирайте функция setX( i, j), с три параметъра:
// 		i    : индекса на реда (започва от 0)
// 		j    : индекса на колона (започва от 0),
// която ще запише 'x' дадената клетка.

// Например: setX( board, 0, 2); трябва да промени дъската, така че да изглежда така:
// [
// 	[ 0, 0, x],
// 	[ 0, 0, 0],
// 	[ 0, x, 0]
// ];


// извикване на функцията setX()
setX( board2d, 0, 1);

// За да видите текущото състояние на дъската за игра, след извикването на setX( board, 0, 1) използвайте функцията:
showConsoleBoard( board2d );


// redrawHTMLBoard( '',board );
// redrawHTMLCell( 0, 1);

function setX( board, i, j ){
	board[i][j] = 'x';
	// redrawHTMLCell( 'x', i, j);
}

function showConsoleBoard( board ){
	var boardStr = "";
	for (var i = 0; i < board.length; i++) {
		boardStr += "|";
		var fakeRow = "";

		for (var j = 0; j < board[i].length; j++) {
			boardStr += board[i][j] + "|";
		}
		boardStr += "\n";
	}

	console.log(boardStr);
}


function aux(){
	function redrawHTMLBoard(sign, board){
		// var board = document.querySelector('.board');
		for (var i = 0; i < board.length; i++) {
			console.log("board[i]:", board[i]);
			for (var j = 0; j < board[i].length; j++) {
				redrawHTMLCell(sign, i, j)
			}
		}

	}

	function redrawHTMLCell( sign, i, j ){
		var cell = document.querySelector(
			`.board tr:nth-child(${i+1})>td:nth-child(${j+1})`
		);


		cell.innerHTML = sign;
		// cell.style.backgroundColor = "#FFBC00";

	}

	document.querySelectorAll('.board td').addEventListener('click', setX );
}