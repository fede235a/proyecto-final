const linea1 = document.querySelector('.linea1');
const linea2 = document.querySelector('.linea2');
const linea3 = document.querySelector('.linea3');

const navMenu = document.querySelector('.nav-menu')

function lineaAnima() {
    linea1.classList.toggle('bar-menu_activo1')
    linea2.classList.toggle('bar-menu_activo2')
    linea3.classList.toggle('bar-menu_activo3')

    navMenu.classList.toggle("nav-menu_visible");
}


document.querySelector('.linea-menu').addEventListener('click', lineaAnima)
