document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth;
    const numCards = cards.length;
    let currentIndex = 0;

    function showCard(index) {
        const offset = -index * cardWidth;
        slider.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    function prevSlide() {
        currentIndex = (currentIndex === 0) ? numCards - 1 : currentIndex - 1;
        showCard(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex === numCards - 1) ? 0 : currentIndex + 1;
        showCard(currentIndex);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    showCard(currentIndex);
});
