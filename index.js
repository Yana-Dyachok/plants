// burger menu-----------------------------------------------------------------------------------------------------------
const body = document.querySelector('body'),
    overlay = document.querySelector('.overlay'),
    burgerMenu = document.querySelector('.burger'),
    menuNav = document.querySelector('.nav-menu'),
    navLink = document.querySelectorAll('.nav-link');

function toggleClasses() {
    burgerMenu.classList.toggle('-active');
    menuNav.classList.toggle('-active');
    overlay.classList.toggle('-active');
    body.classList.toggle('-active');
}

burgerMenu.addEventListener('click', toggleClasses);
overlay.addEventListener('click', toggleClasses);

navLink.forEach((el) => {
    el.addEventListener('click', toggleClasses);
});
