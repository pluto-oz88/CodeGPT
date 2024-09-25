document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let isTransitioning = false;

    function showSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        if (currentSlide === slides.length - 1 && index === 0) {
            // Transition from last slide to first slide
            carousel.style.transition = 'transform 1s ease-in-out';
            carousel.style.transform = `translateX(-${slides.length * 100}%)`;
            
            setTimeout(() => {
                carousel.style.transition = 'none';
                carousel.style.transform = 'translateX(0)';
                isTransitioning = false;
            }, 1000);
        } else {
            // Normal transition
            carousel.style.transition = 'transform 1s ease-in-out';
            carousel.style.transform = `translateX(-${index * 100}%)`;
            
            setTimeout(() => {
                isTransitioning = false;
            }, 1000);
        }
        
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Clone first slide and append it to the end for smooth transition
    const firstSlideClone = slides[0].cloneNode(true);
    carousel.appendChild(firstSlideClone);

    // Adjust carousel width to accommodate the cloned slide
    carousel.style.width = `${(slides.length + 1) * 100}%`;

    // Show the first slide initially
    showSlide(0);

    // Change slide every 3 seconds (2s display + 1s transition)
    setInterval(nextSlide, 3000);
});