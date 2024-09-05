//console.log(´teste de javascript´);

//seleção de elementos HTML (DOM)
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

// Função (rotina) que vai manipular o menu
function menuSite(){
    //console.log('Função acionada')
    //toggle -> alterar entre adicionar e remover uma classe
    menu.classList.toggle('menu-open')
    btnMenu.classList.toggle('x')
}

//Eventos
//ao aclicar no btnMenu será acionado a função menuSite
btnMenu.addEventListener('click', menuSite);
