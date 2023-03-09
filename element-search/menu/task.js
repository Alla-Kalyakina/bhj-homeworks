const menuLinks = document.querySelectorAll('.menu__link');
const menuSubs = document.querySelectorAll('.menu_sub');

menuLinks.forEach(item => item.onclick = function () {
    const parentElementMenuSub = item.parentElement.querySelector(".menu_sub");
    if (parentElementMenuSub) {
        menuSubs.forEach(element => element.classList.remove("menu_active"));
        parentElementMenuSub.classList.add("menu_active");
        return false;
      }
});