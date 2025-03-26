let index = 0;
        const items = document.querySelectorAll(".carousel-item");
        const total = items.length;
        
        document.getElementById("next").addEventListener("click", () => {
            index = (index + 1) % total;
            updateCarousel();
        });
        
        document.getElementById("prev").addEventListener("click", () => {
            index = (index - 1 + total) % total;
            updateCarousel();
        });
        
        function updateCarousel() {
            document.querySelector(".carousel-inner").style.transform = `translateX(-${index * 100}%)`;
        }