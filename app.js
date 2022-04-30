const slides = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.link_left');
const next = document.querySelector('.link_right');
const dots = document.querySelectorAll('.dots');

let slideIndex = 2;
let dotsIndex = 2;

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function nextSlide() {
    showSlides(slideIndex += 1);
    showDots(dotsIndex += 1);
}
function prevSlide() {
    showSlides(slideIndex -= 1);
    showDots(dotsIndex -=1);
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let slide of slides) {
        slide.classList.add('slider__small');
        slide.classList.remove('slider__big');
    }   
    slides[slideIndex - 1].classList.add('slider__big'); 
    }

function showDots(n) {
    if (n > dots.length) {
        dotsIndex = 1
    }
    if (n < 1) {
        dotsIndex = dots.length;
    }
    for (let d of dots) {
        d.classList.remove('active');
    }   
    dots[dotsIndex - 1].classList.add('active'); 
}
