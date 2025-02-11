document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    let index = 0;

    function nextSlide() {
        index = (index + 1) % slide.length;
        updateSlider();
    }

    function prevSlide() {
        index = (index - 1 + slide.length) % slide.length;
        updateSlider();
    }

    function updateSlider() {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
});