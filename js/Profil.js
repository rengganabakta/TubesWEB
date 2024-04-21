document.addEventListener('DOMContentLoaded', function () {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    function showCard(index) {
        const offset = -index * cards[0].offsetWidth;
        cardsWrapper.style.transform = `translateX(${offset}px)`;
    }

    function prevSlide() {
        currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
        showCard(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        showCard(currentIndex);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Tampilkan slide pertama saat halaman dimuat
    showCard(currentIndex);
});
