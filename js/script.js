$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
        adaptiveHeight: true,
		slidesToShow:4,
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

// Функція для відображення модального вікна за його ідентифікатором
function showInfo(modalId) {
	const modal = document.querySelector(`[data-modalid="${modalId}"]`);
	modal.style.display = 'flex';
}

// Функція для приховування модального вікна за його ідентифікатором
function hideInfo(modalId) {
	const modal = document.querySelector(`[data-modalid="${modalId}"]`);
	modal.style.display = 'none';
}

// Визначення усіх карточок
const cards = document.querySelectorAll('.card__people');

// Додавання обробників подій для карточок
cards.forEach(card => {
	card.addEventListener('click', (event) => {
		const personId = event.currentTarget.getAttribute('data-personid');
		showInfo(personId);
	});
});