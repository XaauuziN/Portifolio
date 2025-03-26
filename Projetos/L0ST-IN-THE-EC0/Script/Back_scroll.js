document.addEventListener("DOMContentLoaded", function () {
    let textContainer = document.querySelector(".text");
    let body = document.body;
    let scrolledAmount = 0; 
    let maxScroll = 200; 
    let unlockedScroll = false;

    // Bloqueia o scroll inicialmente
    body.style.overflow = "hidden";
    textContainer.style.visibility = "visible"; // Garante que o texto pode ser manipulado

    window.addEventListener("wheel", function (event) {
        if (!unlockedScroll) {
            event.preventDefault();
            scrolledAmount += event.deltaY;

            let opacity = Math.min(1, scrolledAmount / maxScroll);
            let translateY = Math.max(0, 20 - (scrolledAmount / maxScroll) * 20);

            textContainer.style.opacity = opacity;
            textContainer.style.transform = `translateY(${translateY}px)`;

            if (opacity === 1) {
                unlockedScroll = true;
                body.style.overflow = "auto";
            }
        }
    }, { passive: false });
});
