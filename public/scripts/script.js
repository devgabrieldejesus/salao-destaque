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