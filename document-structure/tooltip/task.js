const tooltip = [...document.querySelectorAll('.has-tooltip')];

tooltip.forEach(item => {
    item.addEventListener('click', event => {
        //event.preventDefault();
        event.target.classList.toggle('tooltip_active');
        if (event.target.classList.contains('tooltip_active')) {
            event.preventDefault();
        };
        const titleText = event.target.getAttribute('title');
        const activeTargetElement = event.target.closest('.has-tooltip');
        const div = document.createElement('div');
  
        div.textContent = titleText;
        div.className = 'tooltip tooltip_active';
        const { top, left } = event.target.getBoundingClientRect();
        div.style.left = `${left}px`;
        div.style.top = `${top + 20}px`;
        activeTargetElement.append(div);
    });
})