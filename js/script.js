let burger = document.querySelector('.header__bottom-burger');
let mainMenu = document.querySelector('.main-menu');
let headerTop = document.querySelector('.header__top');
burger.addEventListener('click', function () {
	burger.classList.toggle('_active');
	mainMenu.classList.toggle('_active');
	headerTop.classList.toggle('_active');
});

//Свайпер
new Swiper('.client-slider', {
	navigation: {
		nextEl: '.client-button-next',
		prevEl: '.client-button-prev'
	},
	pagination: {
		el: '.client-pagination',
		clickable: true,
	},
	//Управление колесом мыши
	mousewheel: {
		//Чувствительность колеса мыши	
		sensitivity: 1,
		//Класс объекта в котором будет срабатывать прокрутка мыши
		eventTarget: ".client-slider",

	},
	slidesPerGroup: 4,
	autoHeight: false,
	slidesPerView: 4,
	spaceBetween: 50,
	speed: 1000,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		1040: {
			slidesPerView: 3,
		},
		1202: {
			slidesPerView: 4,
		},
	},
});
new Swiper('.works-slider', {
	navigation: {
		nextEl: '.works-button-next',
		prevEl: '.works-button-prev'
	},
	pagination: {
		el: '.works-pagination',
		clickable: true,
	},
	//Управление колесом мыши
	mousewheel: {
		//Чувствительность колеса мыши	
		sensitivity: 1,
		//Класс объекта в котором будет срабатывать прокрутка мыши
		eventTarget: ".works-slider",

	},
	slidesPerGroup: 3,
	autoHeight: false,
	slidesPerView: 3,
	spaceBetween: 30,
	speed: 1000,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		1040: {
			slidesPerView: 3,
		},
		1202: {
			slidesPerView: 3,
		},
	},
});