const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalClose = document.querySelectorAll('.modal');
modalClose.forEach(item => item.onclick = function () {
    const currentModalWindow = item.closest('div');
    currentModalWindow.classList.remove('modal_active');
    currentModalWindow.classList.add('modal__close');
});

const showSuccess = document.querySelector('.show-success');
showSuccess.onclick = function() {
    const modalSuccess = document.getElementById('modal_success');
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};