const tasks = {
	'calcRectangleArea':function () {
		// да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени като обект дължина и ширина:
		function calcRectangleArea(rectangle) {
			return rectangle.width * rectangle.height
		}

		// дадено
		let rectangle = {
			'width': 6,
			'height':3
		};
		let area = calcRectangleArea(rectangle);

		console.log(`The area of rectangle is: ${area}`);

		// очакван резултат:
		// The area of rectangle is: 18

	},
	'findMaxEven':function () {
		// TASK: да се дефинира функцията findMaxEven(), която да връща
		// максималното четно число от подаденият й масив.

		function findMaxEven(arr) {
			let max = Number.MIN_VALUE;
			for (let i = 0; i < arr.length; i++) {
				if(arr[i]>max){
					max = arr[i];
				}
			}

			return max;
		}

		let numbers = [2,-4,5,3,9,0,1];
		let max = findMaxEven(numbers);
		console.log(`The max of ${numbers} is ${max}`);
	},
	'logArrayEvenElements':function () {
		function logArrayEvenElements(arr) {
			for (let i = 0; i < arr.length; i++) {
				if(arr[i] % 2 === 0){
					console.log(arr[i]);
				}
			}
		}

		let numbers = [2,-4,5,3,9,0,1];
		logArrayEvenElements(numbers);
	},
	'calculator':function () {
		// Definition of object 'calc', with next properties and values:
		// 'add' - a function, which returns the sum of 2 numbers
		// 'sub' - a function, which returns the subtraction of 2 numbers
		// 'mult' - a function, which returns the multiplication of 2 numbers
		// 'div' - a function, which returns the division of 2 numbers
		let calc = {
			'add': function (x,y) {
				return x+y;
			},
			'sub': function (x,y) {
				return x-y;
			},
			'mult': function (x,y) {
				return x*y;
			},
			'div': function (x,y) {
				return x/y;
			}
		};

		// TEST:
		let x = 6, y = 3;
		console.log( calc.add(x,y) );  // 9
		console.log( calc.sub(x,y) );  // 3
		console.log( calc.mult(x,y) ); // 18
		console.log( calc.div(x,y) );  // 2
	},
	'functionsAsPropertiesExample': function () {
		// definition of 'logArray' object, with properties:
		// 'evens' - a function, which logs only the even numbers of the given array
		// 'odds' - a function, which logs only the odd numbers of the given array
		let logArray = {
			'evens' : function (arr) {
				console.log(`The even numbers are:`);
				for (let i = 0; i < arr.length; i++) {
					const element = arr[i];
					if(element%2===0){
						console.log(element);
					}
				}
			},
			'odds' : function (arr) {
				console.log(`The odd numbers are:`);
				for (let i = 0; i < arr.length; i++) {
					const element = arr[i];
					if(element%2){
						console.log(element);
					}
				}
			},
		}

		let numbers = [1,2,3,4,5];
		logArray.evens(numbers);
		logArray.odds(numbers);
	},
	'functionsAsProperties': function() {
		let obj = {
			'foo': function () {
				console.log(`Foo`);
			},
			'bar': function () {
				console.log(`Bar`);
			}
		};

		obj.foo();
		obj.bar();
	},
	'functionsAsArrayElements': function() {
		let foobar = [
			function () {
				console.log(`Foo`);
			},
			function () {
				console.log(`Bar`);
			}
		]

		foobar[0](); // 'Foo'
		foobar[1](); // 'Bar'
	}
}
tasks.functionsAsArrayElements();