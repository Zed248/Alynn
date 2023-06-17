window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.querySelector('.nav-bar');
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

let menuOpen = false;

var hamburger = document.querySelector('.hamburger');
var hamburgerBtn = document.querySelector('.hamburger-btn');
var linkContainer = document.querySelector('.link-container');

hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        hamburgerBtn.classList.add('active');
        linkContainer.classList.add('active');
        console.log("open")
        menuOpen = true;
    } else {
        hamburgerBtn.classList.remove('active');
        linkContainer.classList.remove('active');
        menuOpen = false;
        console.log("false")
    }
})
