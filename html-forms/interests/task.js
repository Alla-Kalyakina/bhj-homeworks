const interestCheck = [...document.querySelectorAll('.interest__check')];

interestCheck.forEach((check) => check.addEventListener('change', (event) => {
    let interest = event.target.closest('.interest');
    let interestCheck = [...interest.querySelectorAll('.interest__check')];
    let parentCheckbox = interestCheck[0];

    if (parentCheckbox.checked) {
        interestCheck.forEach(child => child.checked = true);     
    } else {
        interestCheck.forEach(child => child.checked = false);
    }
}));