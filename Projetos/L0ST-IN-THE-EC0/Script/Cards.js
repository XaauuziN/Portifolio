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