document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const slideInterval = 3000; // Slide interval in milliseconds

    function startCarousel() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, slideInterval);
    }

    function updateCarousel() {
        const itemWidth = items[currentIndex].clientWidth;
        const offset = -currentIndex * itemWidth;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}px)`;
    }

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    startCarousel();
});
