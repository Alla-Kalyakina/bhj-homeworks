const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalClose = document.getElementsByClassName('modal__close');
modalClose[0].onclick = function() {
    modalMain.classList.remove('modal_active');
    modalMain.classList.add('modal__close');
}

const showSuccess = document.getElementsByClassName('show-success');
showSuccess[0].onclick = function() {
    const modalSuccess = document.getElementById('modal_success');
    modalSuccess.classList.add('modal_active');
}