let menuBtn = document.querySelector('.menu-btn');
let menuBtnBurger = document.querySelector('.menu-btn-burger');

let menu = document.querySelector('.nav');
let menuItems = document.querySelectorAll('.nav a'); // Select all anchor tags within the nav
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
menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        menu.classList.remove('active');  // Close the menu
        body.classList.remove('no-scroll'); // Re-enable scrolling
    });
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