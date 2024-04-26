// berisikan untuk slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth;
    let numVisibleSlides = 3; // Jumlah slide yang akan ditampilkan sebelum kembali ke slide pertama
    let currentIndex = 0;
    let autoSlideInterval; // Interval untuk slider otomatis

    // Update numVisibleSlides jika lebar halaman berubah
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
        autoSlideInterval = setInterval(nextSlide, 5000); // Panggil nextSlide setiap 5 detik
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval); // Hentikan interval
    }

    // Panggil fungsi updateVisibleSlides saat halaman dimuat dan saat window diresize
    window.addEventListener('resize', updateVisibleSlides);
    updateVisibleSlides();

    prevBtn.addEventListener('click', () => {
        stopAutoSlide(); // Hentikan auto slide saat tombol prev ditekan
        prevSlide();
    });
    nextBtn.addEventListener('click', () => {
        stopAutoSlide(); // Hentikan auto slide saat tombol next ditekan
        nextSlide();
    });

    sliderWrapper.addEventListener('mouseenter', stopAutoSlide); // Hentikan auto slide saat cursor masuk ke slider
    sliderWrapper.addEventListener('mouseleave', startAutoSlide); // Mulai kembali auto slide saat cursor meninggalkan slider

    startAutoSlide(); // Mulai auto slide saat halaman dimuat

    // Tambahkan event listener untuk setiap elemen slide
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const mataKuliah = card.querySelector('.card-title').textContent;
            const pesan = encodeURIComponent(`Halo, saya tertarik dengan mata kuliah ${mataKuliah}. Berikan saya informasi lebih lanjut.`);
            window.open(`https://wa.me/628873433309?text=${pesan}`, '_blank');
        });
    });

    showCard(currentIndex);
});
