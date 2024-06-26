document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth;
    const sliderWrapperWidth = sliderWrapper.offsetWidth;
    const numVisibleCards = Math.floor(sliderWrapperWidth / cardWidth);
    let currentIndex = 0;
    let autoSlideInterval;

    function showCard(index) {
        const offset = -index * cardWidth;
        slider.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    function prevSlide() {
        currentIndex = (currentIndex === 0) ? cards.length - numVisibleCards : currentIndex - 1;
        showCard(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex === cards.length - numVisibleCards) ? 0 : currentIndex + 1;
        showCard(currentIndex);
    }

    function startAutoSlide() {
        if (window.innerWidth <= 1025) {
            autoSlideInterval = setInterval(nextSlide, 2500);
        }
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval); 
    }

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

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1025) {
            startAutoSlide();
        } else {
            stopAutoSlide();
        }
    });
});


