let cards = document.querySelectorAll('.card');
let btnShuffle = document.querySelector('.btnShuffle');
let cardsCount = cards.length;

function shuffleCards() {
	cards.forEach( card => {
		let order = Math.ceil(Math.random() * cardsCount);
		card.style.order = order;
	});
}

// shuffleCards();
btnShuffle.addEventListener('click', function (e) {
	shuffleCards();
})

