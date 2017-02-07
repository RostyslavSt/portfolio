'use strict'

// *1----*
let task1 = () => {
	$(btn1).prop('disabled', true);
	console.clear();
	
	let alert = (message) => {
		let $parent = $('.task1')
		let $messageBlock = $('<div>').html(message)
										.addClass('task1-alert')
										.appendTo($parent);
		$($messageBlock).fadeIn(1000);

		setTimeout(function() {
			$($messageBlock).fadeOut(1000);
			}, 3000);

		}
	alert('Дорогу осилит идущий!')
}

// *2----*
let task2 = () => {
	console.clear();
	$(btn2).prop('disabled', true);
	
	let getMin = () => {
		let arr = [];
		let i = 1;
		
		//fill the array
		while (i) {
			let num = prompt('Please, enter a number');
			//check for cancel
			if (num === null) {break};
			num = +num;
			//validtion
			if ( isNaN(num) ) {
				alert('No, no..It was not a number. Try once more');
			} else {arr.push(num);}
		};
		console.log('So, we got the array:');
		console.log(arr);
		//get min element
		let minNum = arr[0];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < minNum) {
				minNum = arr[i];
			}
		}
		return minNum;
	}

	console.log('Min element is: ' + getMin());


}
// *3----*
let task3 = () => {
	console.clear();
	$(btn3).prop('disabled', true);

	function avg() {
		console.log('So, we have such parameters:');
		console.log(arguments);
		let sumElements = 0,
			result = 0;

		for (let i = 0; i < arguments.length; i++) {
			sumElements += arguments[i];
		}
		return result = sumElements/arguments.length;
	}

	console.log('Arithmetic average is: ' + avg(2, 4, 6) );
}
// *4----*
let task4 = () => {
	console.clear();
	$(btn4).prop('disabled', true);
	
	let templatePoint = '.',
		templateSharp = '#',
		str = '';
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 12; j++) {
			str += templatePoint + templateSharp;
		}
		str += '\n';
	}
	console.log(str);
	
}

// *5----*
let task5 = () => {
	console.clear();
	$(btn5).prop('disabled', true);
	
	function CreateUser() {
		this.firstName = prompt('Please, enter the first name');
		this.lastName = prompt('Please, enter the last name');
		this.fullName = this.firstName + ' ' + this.lastName;
		// debugger;
	}
	//creating array of objects with users
	let arrUsers = [];
	for (let i = 0; i < 2; i++) {
		arrUsers[i] = new CreateUser();
	}

	console.log(arrUsers);
	let parent = document.querySelector('.task5');
	let usersBlock = document.createElement('div');
	usersBlock.classList.add('task5-menu-block');
	parent.appendChild(usersBlock);

	for (let i = 0; i < arrUsers.length; i++) {
		// let $list = $('<ul>').appendTo(usersBlock);
		let list = document.createElement('ul');
		usersBlock.appendChild(list);

		list.classList.add('task5-list');
		for (let key in arrUsers[i]) {
			$('<li>').html(key + ': ' + arrUsers[i][key]).appendTo(list);
		}
	}

	$(usersBlock).fadeIn(1500);
}

let task6 = () => {
	console.clear();
	$(btn6).prop('disabled', true);
	
	function Calculator(isOn) {
		//check for turn on/off
		if (isOn === undefined || isOn === true) {
			this.isOn = true;
		} else this.isOn = false;

		this.turnOn = function() {
			this.isOn = true;
		}
		this.turnOff = function() {
			this.isOn = false;
		}
		self = this;
		function validation() {
			if (self.isOn) {
				return true
			} else {
				console.log('Sorry, calculator is turned off. Please turn on it');
				return;
				}
		}
		this.sum = function(a, b) {
			if ( validation() ) {
				return (a + b);
			}
		}
		this.diff = function(a, b) {
			if ( validation() ) {
				return (a - b);
			}
		}
		this.div = function(a, b) {
			if ( validation() ) {
				return (a / b);
			}
		}
		this.mod = function(a, b) {
			if ( validation() ) {
				return (a % b);
			}
		}
		this.multi = function(a, b) {
			if ( validation() ) {
				return (a * b);
			}
		}
		this.pow = function(a,n) {
			if ( validation() ) {
				return ( Math.pow(a, n) );
			}
		}

	}

	let calc = new Calculator();
	let a = 100,
		b = 500;

	//let calculate in two stages: at firts 'numerator' then 'denominator'
	let numerator = calc.multi(calc.pow(a, 2), calc.pow(b, 2));
	let denominator = calc.diff( calc.pow( calc.sum(a,b), 2 ), calc.pow(calc.diff(a, b), 2) );
	let div = numerator / denominator;
	let result = div % 12500;

	console.log('The numerator is: ' + numerator);
	console.log('The denominator is: ' + denominator);
	console.log('The div is: ' + div);
	console.log('The result of calculation is: ' + result);
}

let task7 = () => {
	console.clear();
	$(btn7).prop('disabled', true);
	
	let $parent = $('.task7');
	let $table = $('<table>').addClass('task7-table').appendTo($parent);
	
	for (let i = 0; i < 12; i++) {
		let row = $('<tr>').appendTo($table);
		let thIdi = (i + 1).toString();
		for (let j = 0; j < 16; j++) {
		let thIdij = thIdi + '-' + (j + 1).toString();
			$('<th>').addClass(thIdij).appendTo(row);
		}
	}
	let $cells = $('.task7-table th').addClass('task7-cell');
	
	let arr = [
		[3, 4, 5],
		[2, 3, 9, 16],
		[1, 2, 9, 10, 15, 16],
		[1, 2, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16],
		[1, 2, 4, 5, 6, 7, 9, 12, 13, 16],
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16],
		[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16],
		[2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15],
		[2, 3, 4, 7, 8, 12, 13],
		[2, 3, 7, 8],
		[2, 3, 4, 5, 7, 8, 9],
		[2, 3, 4, 5, 7, 8, 9]
	];

	let idI = 0;
	let idJ = 0;
	let arrAdress = [];
	
	//create array with classes
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			let idI = i + 1;
			let idJ = arr[i][j];
			let cellClass = idI.toString() + '-' + idJ.toString();
			arrAdress.push(cellClass);
			// console.log(cellClass);
			
		}
	}
	console.log(arrAdress);
	//
	let currentCell = 0;
	for (let i = 0; i < arrAdress.length; i++) {
		currentCell = arrAdress[i];
		currentCell = '.' + currentCell.toString();
		$(currentCell).addClass('task7-cell-black');
		console.log(currentCell);
		// debugger;
	}
	
	$($table).fadeIn(1500);
}

btn1.addEventListener('click', task1);
btn2.addEventListener('click', task2);
btn3.addEventListener('click', task3);
btn4.addEventListener('click', task4);
btn5.addEventListener('click', task5);
btn6.addEventListener('click', task6);
btn7.addEventListener('click', task7);

//*----DRAFTS-------*
