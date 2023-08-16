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

