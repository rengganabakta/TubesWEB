document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth;
    let numVisibleSlides = 3; 
    let autoSlideInterval; 

    function updateVisibleSlides() {
        const sliderWrapperWidth = sliderWrapper.offsetWidth;
        numVisibleSlides = Math.floor(sliderWrapperWidth / cardWidth);
    }

    function showCard(index) {
        const offset = -index * cardWidth;
        slider.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    function prevSlide() {
        currentIndex = (currentIndex === 0) ? cards.length - numVisibleSlides : currentIndex - 1;
        showCard(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex === cards.length - numVisibleSlides) ? 0 : currentIndex + 1;
        showCard(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); 
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval); 
    }

    window.addEventListener('resize', updateVisibleSlides);
    updateVisibleSlides();

    prevBtn.addEventListener('click', () => {
        stopAutoSlide(); 
        prevSlide();
    });
    nextBtn.addEventListener('click', () => {
        stopAutoSlide(); 
        nextSlide();
    });

    sliderWrapper.addEventListener('mouseenter', stopAutoSlide); 
    sliderWrapper.addEventListener('mouseleave', startAutoSlide); 

    startAutoSlide(); 

    showCard(currentIndex);
});
