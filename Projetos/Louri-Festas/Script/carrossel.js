let indiceImagem = 0;

function mostrarImagem(indice) {
    const imagens = document.querySelector('.imagens');
    const totalImagens = imagens.children.length;

    if (indice >= totalImagens) {
        indiceImagem = 0;
    } else if (indice < 0) {
        indiceImagem = totalImagens - 1;
    } else {
        indiceImagem = indice;
    }

    imagens.style.transform = `translateX(${-indiceImagem * 100}%)`;
}

function mudarImagem() {
    mostrarImagem(indiceImagem + 1);
}

mostrarImagem(indiceImagem);

setInterval(mudarImagem, 4000);