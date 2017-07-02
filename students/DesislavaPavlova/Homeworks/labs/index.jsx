var currentYear = 2017;

var goBtn = document.getElementsByTagName('button')[0];
var userBirthYearInput = document.querySelector('.userBirthYear input');
var userBirthYear;

goBtn.addEventListener('click', function(){
	userBirthYear = userBirthYearInput.value;
	console.log("userBirthYear=" + userBirthYear);

	if( userBirthYear== '' ){  // 0
		alert('Моля въведете възраст!');
	}else if( userBirthYear < 1900 ){
		alert('Моля въведете коректна година');
	}else if( currentYear - userBirthYear >= 18 ){
		alert('Welcome');
	};
})


