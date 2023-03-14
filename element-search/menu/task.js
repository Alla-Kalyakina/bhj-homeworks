const menuLinks = document.querySelectorAll('.menu__link');
const menuSubs = document.querySelectorAll('.menu_sub');
let click;

menuLinks.forEach(item => item.onclick = function () {
    const parentElementMenuSub = item.parentElement.querySelector(".menu_sub");
    if (parentElementMenuSub && !click) {
        click = true;
        parentElementMenuSub.classList.add("menu_active");
        return false;
        }
    if(parentElementMenuSub && click) {
        click = false;
        menuSubs.forEach(element => element.classList.remove("menu_active"));
        return false;
    }
});