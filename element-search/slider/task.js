const slider = Array.from(document.querySelectorAll(".slider__item"));
const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");

arrowPrev.onclick = function () {
    let sliderItemActive = document.querySelector(".slider__item_active");
    let numberSlider = slider.findIndex(item => item === sliderItemActive);
    slider[numberSlider].classList.remove("slider__item_active");
    if (numberSlider === 0) {
        numberSlider = slider.length - 1;
    } else {
        numberSlider--;
    }
    slider[numberSlider].classList.add("slider__item_active");
}

arrowNext.onclick = function () {
    let sliderItemActive = document.querySelector(".slider__item_active");
    let numberSlider = slider.findIndex(item => item === sliderItemActive);
    slider[numberSlider].classList.remove("slider__item_active");
    if (numberSlider === slider.length - 1) {
        numberSlider = 0;
    } else {
        numberSlider++;
    }
    slider[numberSlider].classList.add("slider__item_active");
};