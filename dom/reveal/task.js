const elementsToDisplay = [...document.querySelectorAll('.reveal')];

document.addEventListener('scroll', () => {
    elementsToDisplay.forEach(el => {
        const {top, bottom} = el.getBoundingClientRect();
        if(bottom < 0) {
            return false;
        }
        if(top > window.innerHeight) {
            return false;
        }
        el.classList.add('reveal_active');
    })
});