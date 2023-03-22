
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownValue = document.querySelector('.dropdown__value');
let click;

function addListActive() {
    if(!click) {
        dropdownList.classList.add('dropdown__list_active');  
        click = true;
        return;
    }
    if(click) {
        dropdownList.classList.remove('dropdown__list_active');
        click = false;
        return;
    }
}
dropdownValue.addEventListener('click', addListActive);

dropdownItems.forEach(element => { element.onclick = () => {
    dropdownValue.textContent = element.textContent;
    dropdownList.classList.remove('dropdown__list_active');
    click = false;
    return false;
    }
});
