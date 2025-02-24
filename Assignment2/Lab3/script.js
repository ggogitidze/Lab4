document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const cards = document.querySelectorAll(".profile-card");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    nextButton.addEventListener("click", nextCard);
    prevButton.addEventListener("click", prevCard);
    
    setInterval(nextCard, 5000);

    updateCarousel();
});
