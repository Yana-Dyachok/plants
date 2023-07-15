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

//blur img--------------------------------------------------------------------------------------------------------
const buttonService = document.querySelectorAll('.button-service'),
    buttonGarden = document.querySelector('.garden-btn'),
    buttonPlanting = document.querySelector('.planting-btn'),
    buttonLawn = document.querySelector('.lawn-btn');

buttonService.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        onlyTwoActiveButton();
        addImgBlur()
        buttonBlur()
    });
});

function onlyTwoActiveButton() {
    let count = 0;

    buttonService.forEach((btn) => {
        if (btn.classList.contains('active'))count++;
    });

    buttonService.forEach(btn=> {
    count === 2 && !btn.classList.contains('active')?btn.disabled = true:btn.disabled = false;
    });
}

function buttonBlur() {
    buttonService.forEach(btn=> {
        if (btn.classList.contains('planting-btn') && btn.classList.contains('active')) removeImgBlur('.planting');
        else if (btn.classList.contains('lawn-btn') && btn.classList.contains('active')) removeImgBlur('.lawn');
        else if (btn.classList.contains('garden-btn') && btn.classList.contains('active')) removeImgBlur('.garden');
        else if (!buttonGarden.classList.contains('active') && !buttonPlanting.classList.contains('active') && !buttonLawn.classList.contains('active')) removeImgBlur('.figure-service');
    });
}

function addImgBlur() {
    document.querySelectorAll('.figure-service').forEach(el=>el.style.filter = 'blur(2px)')
}

function removeImgBlur(select) {
    document.querySelectorAll(select).forEach(el=>el.style.filter = 'none')
}