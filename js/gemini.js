const carouselSlides = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.carousel-slide');

let currentSlide = 0;

function slideShow() {
    carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;

    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    setTimeout(slideShow, 2000);
}

slideShow();