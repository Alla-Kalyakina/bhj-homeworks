document.addEventListener('DOMContentLoaded', () => {
    let activeElement = document.querySelector('.book');
    const fontSizeControlBlock = document.querySelector('.book__control_font-size');
    let fontSizes = [...fontSizeControlBlock.querySelectorAll('.font-size')];

    fontSizes.forEach(element => {
        element.addEventListener('click', preventDef);
        element.addEventListener('click', setFontSize.bind(this, element));
    });

    function setFontSize(parameterA) {
        let fontSizeActive = document.querySelector('.font-size_active');
        fontSizeActive.classList.remove('font-size_active');

        activeElement.classList.remove('book_fs-big');
        activeElement.classList.remove('book_fs-small');
        
        parameterA.classList.add('font-size_active');

        let size = parameterA.dataset.size;
        activeElement.classList.add('book_fs-' + size);
    }

    function preventDef(event) {
        event.preventDefault();
    }
});
