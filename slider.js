        document.addEventListener("DOMContentLoaded", function() {
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
    // Initialize the slider after the DOM has loaded
    initializeSlider1();
});


