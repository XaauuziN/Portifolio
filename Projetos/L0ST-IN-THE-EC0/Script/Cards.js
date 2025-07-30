function selecionarCarta(carta) {
    const cartas = document.querySelectorAll('.carta');

    let selecionadaAnterior = document.querySelector('.carta.selecionada');

    // Se a mesma carta for clicada, desativa a seleção
    if (selecionadaAnterior === carta) {
        carta.classList.remove('selecionada');
        return;
    }

    // Remove a seleção das outras cartas
    cartas.forEach(c => c.classList.remove('selecionada'));

    // Ativa a nova seleção
    carta.classList.add('selecionada');
}
const wrapper = document.getElementById("wrapper");
const container = document.getElementById("cartas-container");

// Clona as cartas para criar loop
// function duplicarCartas() {
//     const cartas = container.children;
//     const total = cartas.length;
//     for (let i = 0; i < total; i++) {
//         const clone = cartas[i].cloneNode(true);
//         clone.setAttribute("data-clone", "true");
//         container.appendChild(clone);
//     }
// }

duplicarCartas();

wrapper.addEventListener("scroll", () => {
    const scrollMax = container.scrollWidth / 2;

    if (wrapper.scrollLeft >= scrollMax) {
        wrapper.scrollLeft = 0;
    }
});