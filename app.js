const clickListener = document.querySelector('.link_left');
const sliderOne = document.querySelector('.slider__one');
const sliderTwo = document.querySelector('.slider__two');
const sliderThree = document.querySelector('.slider__three');
const sliderLine = document.querySelector('.slider__items');

let offset = 0;

clickListener.addEventListener('click', () => {
    offset += 550;
    sliderTwo.classList.remove('slider__two')
    sliderTwo.classList.add('slider__three')
    sliderTwo.style.left = offset;
    console.log(1)
});