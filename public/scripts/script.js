/*============================================================ MENU ============================================================*/
const menu = document.getElementById("menu");

function menuToggle() {
    if(menu.style.display == 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
function closeMenu() {
    menu.style.display = 'none';
}

/*============================================================ SLIDES ============================================================*/
const c = (elemento)=>document.getElementById(elemento); // Retornar o item

function arrowRight() {
    c('slides-area').style.marginLeft = '-10vw';
}

function arrowLeft() {
    c('slides-area').style.marginLeft = '0vw';
}