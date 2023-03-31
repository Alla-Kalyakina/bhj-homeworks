document.addEventListener('DOMContentLoaded', () => {
    const rotatorCases = [...document.querySelectorAll('.rotator__case')];

    function changeAd () {
        let сaseActive = document.querySelector('.rotator__case_active');

        if(сaseActive.nextElementSibling) {
            сaseActive.classList.toggle('rotator__case_active');
            сaseActive.nextElementSibling.classList.toggle('rotator__case_active');
            сaseActive = сaseActive.nextElementSibling;
        } else {
            сaseActive.classList.toggle('rotator__case_active');
            rotatorCases[0].classList.toggle('rotator__case_active');
            сaseActive = rotatorCases[0];
        }
        let caseColor = сaseActive.dataset.color;
        сaseActive.style.color = caseColor;
        return сaseActive.dataset.speed;
    }

    setTimeout(repeat = () => {
        let changeTextSpeed = changeAd();
        setTimeout(repeat, changeTextSpeed);
    });

});