let burger = document.querySelector('.header__bottom-burger');
let mainMenu = document.querySelector('.main-menu');
let headerTop = document.querySelector('.header__top');
burger.addEventListener('click', function () {
	burger.classList.toggle('_active');
	mainMenu.classList.toggle('_active');
	headerTop.classList.toggle('_active');
});