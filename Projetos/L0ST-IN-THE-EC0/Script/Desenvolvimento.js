document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".section");
    let currentIndex = -1; // Começa sem texto visível
    let isScrolling = false;

    window.addEventListener("wheel", function (event) {
        if (isScrolling) return;
        isScrolling = true;

        if (event.deltaY > 0) {
            // Se rolar para baixo, avança um estágio
            currentIndex++;
            if (currentIndex >= sections.length * 2) currentIndex = sections.length * 2 - 1;
        } else {
            // Se rolar para cima, volta um estágio
            currentIndex--;
            if (currentIndex < -1) currentIndex = -1;
        }

        // Atualiza a visibilidade das seções
        sections.forEach((section, index) => {
            section.classList.remove("show");
            if (currentIndex === index * 2) {
                section.classList.add("show");
            }
        });

        setTimeout(() => {
            isScrolling = false;
        }, 600); // Tempo suficiente para a animação terminar
    }, { passive: false });
});
