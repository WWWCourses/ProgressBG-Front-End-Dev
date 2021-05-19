function tick(){
	// turn the seconds into mm:ss
	var min = Math.floor(counter.remainingSeconds / 60);
	var sec = counter.remainingSeconds - (min * 60);

	//add a leading zero (as a string value) if seconds less than 10
	if (sec < 10) {
		sec = "0" + sec;
	}

	// concatenate with colon
	var message = min.toString() + ":" + sec;

	// now change the display
	dom.remainingTimeOutput.innerHTML = message;

	// stop is down to zero
	if (counter.remainingSeconds === 0){
		finishCountdown();
	}

	//subtract from seconds remaining
	counter.remainingSeconds--;

}
function startCountdown(){
	initCounter();

	//every second, call the "tick" function
	counter.intervalID = setInterval(tick, 1000);

	dom.countdownInput.style.display="none";
	dom.countdownOutput.style.display="block";

	// show countdown type message
	const countdownTypeMessage = counter.type[dom.countdownType.value];
	dom.countdownTypeMessage.innerHTML = countdownTypeMessage;
	// dom.countdownType.value;

}
function finishCountdown() {
	clearInterval(counter.intervalID);
	// resetCountdown();
	dom.countdownFinish.style.display = "flex";
}
function resetCountdown(){
	dom.countdownInput.style.display="block";
	dom.countdownOutput.style.display="none";
}
function initCounter() {
	// set default value
	counter = {...counterInitalState}

	// get initial time and save it as seconds
	counter.remainingSeconds = counter.initialSeconds = dom.initialTime.value * 60;
}

const dom = {
	"countdownInput": document.querySelector('.countdown-input'),
	"countdownType": document.querySelector('.countdown-type'),
	"initialTime": document.querySelector('.initial-time'),
	"countdownStartBtn": document.querySelector('.countdown-start-btn'),
	"countdownOutput": document.querySelector('.countdown-output'),
	"remainingSeconds": document.querySelector('.remaining-time'),
	"countdownTypeMessage": document.querySelector('.countdown-output>h1'),
	"remainingTimeOutput": document.querySelector('.remaining-time-output'),
	"countdownFinish": document.querySelector('.countdown-finish'),
}

const counterInitalState = {
	"type":{
		"start": "Започваме след",
		"continue": "Продължаваме след"
	},
	"initialSeconds": 0,
	"remainingSeconds": 0,
	"intervalID":undefined
}

let counter;

dom.countdownStartBtn.addEventListener("click", function (e) {
	startCountdown();
})

window.onload = function(){
	resetCountdown();
	// dom.countdownInput.style.display="none";
	// dom.countdownOutput.style.display="block";
}
