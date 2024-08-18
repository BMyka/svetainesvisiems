let menuBtn = document.querySelector('.menu-btn');
let menuBtnBurger = document.querySelector('.menu-btn-burger');

let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');
let body = document.body; // Select the body element

// Function to toggle menu and body scroll
function toggleMenu() {
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Toggle no-scroll class on body
}

// Event listener for menu button
menuBtn.addEventListener('click', toggleMenu);

// Event listener for burger button
menuBtnBurger.addEventListener('click', toggleMenu);

// Event listeners for each menu item
menuItem.forEach(function(menuItem) {
    menuItem.addEventListener('click', toggleMenu);
});

const emailInput = document.getElementById('emailInput');

function updateActiveClass() {
    const value = emailInput.value.trim();

    if (value.length > 0) {
        emailInput.classList.add('active');
    } else {
        emailInput.classList.remove('active');
    }
}

emailInput.addEventListener('input', updateActiveClass);
emailInput.addEventListener('change', updateActiveClass);
emailInput.addEventListener('paste', updateActiveClass);
emailInput.addEventListener('keyup', updateActiveClass);
emailInput.addEventListener('cut', updateActiveClass);

window.addEventListener('load', updateActiveClass);