//logic with js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButon = document.querySelector('.next-button');
    let currentIndex = 0;

    function updateCarousel () {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextButon.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length -1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    //optional: auto-slide

    setInterval(() => {
        nextButon.click();
    }, 10000);

});