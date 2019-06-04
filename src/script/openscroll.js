/*

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;

    var slides = document.getElementsByClassName('commit__items');
    var dots = document.getElementsByClassName('reviews__items');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("reviews__items--active");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].classList.add("reviews__items--active");
}
*/


var sidebar = document.querySelector('.sidebar');
var sideberItems = document.querySelectorAll('.sidebar__items');
var section = document.querySelectorAll('.section');

var slideIn = 1;
showSl(slideIn);

function current(n) {
    showSl(slideIn = n);
}
sideberItems.addEventListener(function (e) {
    e.stopPropagation();
    e.preventDefault();
});

function showSl(n) {
    var i;



    if (n > section.length) {
        slideIn = 1;
    }
    if (n < 1) {
        slideIn = section.length;
    }
    for (i = 0; i < section.length; i++) {
        section[i].style.height = "100" + "vh";
    }
    for (i = 0; i < sideberItems.length; i++) {
        sideberItems[i].classList.remove("reviews__items--active");
    }
    section[slideIndex - 1].style.height = "0" + "vh";
    sideberItems[slideIndex - 1].classList.add("reviews__items--active");
}