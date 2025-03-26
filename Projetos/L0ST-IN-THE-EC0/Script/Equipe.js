function flipCard() {
    const card = event.target.closest('.card'); // Encontra o card mais próximo do botão clicado
    card.classList.toggle('flipped'); // Alterna a classe 'flipped' que faz o card girar
}