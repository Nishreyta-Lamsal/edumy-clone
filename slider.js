document.addEventListener("DOMContentLoaded", function() {
    // Slider 1 - Main Image Slider
    function initializeSlider1() {
        let slideIndex1 = 0;
        const slides1 = document.querySelector("#slider #slides");
        const dots1 = document.querySelectorAll("#slider .dot");

        function showSlides1() {
            slideIndex1++;
            if (slideIndex1 >= dots1.length) {
                slideIndex1 = 0;
            }
            updateSlides1();
            setTimeout(showSlides1, 5000); // Change image every 5 seconds
        }

        function currentSlide1(n) {
            slideIndex1 = n;
            updateSlides1();
        }

        function updateSlides1() {
            const slideWidth1 = slides1.children[0].clientWidth;
            slides1.style.transform = `translateX(${-slideIndex1 * slideWidth1}px)`;

            dots1.forEach((dot, index) => {
                dot.classList.toggle("bg-gray-800", index === slideIndex1);
                dot.classList.toggle("bg-gray-400", index !== slideIndex1);
            });
        }

        dots1.forEach((dot, index) => {
            dot.addEventListener("click", () => currentSlide1(index));
        });

        showSlides1();
    }

    // Slider 2 - Testimonial Slider
    function initializeSlider2() {
        let slideIndex2 = 0;
        const slides2 = document.querySelector("#testimonialSlider");
        const testimonialDots = document.querySelectorAll("#testimonialSliderContainer .dot");
        
        if (!slides2) {
            console.error("Slider element not found!");
            return;
        }

        function currentSlide2(n) {
            slideIndex2 = n;
            updateSlides2();
        }

        function updateSlides2() {
            const slideWidth2 = slides2.children[0].clientWidth;
            slides2.style.transform = `translateX(${-slideIndex2 * slideWidth2}px)`;

            testimonialDots.forEach((dot, index) => {
                dot.classList.toggle("bg-gray-800", index === slideIndex2);
                dot.classList.toggle("bg-gray-400", index !== slideIndex2);
            });
        }

        testimonialDots.forEach((dot, index) => {
            dot.addEventListener("click", () => currentSlide2(index));
        });

        // Initialize slides and dots based on the initial index
        updateSlides2();
    }

    // Initialize both sliders after the DOM has loaded
    initializeSlider1();
    initializeSlider2();
});


