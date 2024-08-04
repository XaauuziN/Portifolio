let menuVisible = false

// Função que oculta e mostra o menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function selecionar(){
    //ocultar menu uma vez que selecionou uma opção 
    document.getElementById("nav").classList = "";
    menuVisible = false
}




function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
    history.pushState(null, '', pageId);
}

window.onpopstate = () => {
    const pageId = location.pathname.substring(1) || 'page1';
    navigateTo(pageId);
};
