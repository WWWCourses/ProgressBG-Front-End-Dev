const calcForm = document.querySelector('.calcForm');
const astronomicHoursInput = document.querySelector('.astronomicHoursInput');
const pricePerAstronomicHourInput = document.querySelector('.pricePerAstronomicHourInput');
const calcBtn = document.querySelector('.calcForm button');
const totalHoursOutput = document.querySelector('.output .TotalHours');
const totalHoursOutputPrice = document.querySelector('.output .TotalPrice');

function convertAstronomicToAcademicHours(astronomicHours) {
	const minutesInAcademicHour = 40;

	return (astronomicHours * 60) / minutesInAcademicHour;
}

calcBtn.addEventListener('click', function (e) {
	const astronomicHours = astronomicHoursInput.value*1;
	totalHoursOutput.innerHTML =  convertAstronomicToAcademicHours(astronomicHours);
} )