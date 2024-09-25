const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex++;
    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

slides.addEventListener('transitionend', function () {
    if (currentIndex === totalSlides - 1) {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        currentIndex = 0;
    }
});

setInterval(showNextSlide, 2000);
