const tabs = Array.from(document.querySelectorAll('.tab'));

for(let tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
    tabs[tabIndex].addEventListener('click', event => {
    let tabChildren = event.target.parentElement.children;
    let tabContentChildren = event.target.parentElement.nextElementSibling.children;
    for (let i = 0; i < tabChildren.length; i++) {
        tabChildren[i].classList.remove("tab_active");
        tabContentChildren[i].classList.remove("tab__content_active");
    }
    tabChildren[tabIndex].classList.add('tab_active');
    tabContentChildren[tabIndex].classList.add('tab__content_active');
    });
}
