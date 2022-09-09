
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__list');

hamburger.addEventListener('click', () => {
menu.classList.toggle('active');
hamburger.classList.toggle('active');
});

