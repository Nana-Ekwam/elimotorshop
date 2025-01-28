document.addEventListener("DOMContentLoaded", function(){
    const slide = document.querySelectorAll(".carousel-slide")
    const prevButton = document.querySelector(".prev")
    const nextButton = this.documentElement.querySelector(".next")

    let currentSlide = 0;
    const totalSlides = slide.length;

    function showSlides(index){
        slide.forEach((slide) => slide.classList.remove("active"));

        if (index >= totalSlides) {
            currentSlide = 0;
            
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
            
        } else {
            currentSlide = index;
        } 

        slide[currentSlide].classList.add("active");

    }

    function nextSlide() {
        showSlides(currentSlide + 1);
    }

    function prevSlide() {
        showSlides(currentSlide - 1);
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);


    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            prevSlide();

        } else if(e.key === "ArrrowRight"){
            nextSlide();
        }

    });

    let autoPlayInterval;

    function startAutoPlay () {
        autoPlayInterval = setInterval(nextSlide, 4000);
        
    }

    function stopAutoPlay () {
        clearInterval(autoPlayInterval);

    }

    startAutoPlay();

    const carousel = document.querySelector("carousel");
    
})