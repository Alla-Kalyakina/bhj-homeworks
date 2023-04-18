const buttonTasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');
const tasksInput = document.querySelector('.tasks__input');

buttonTasksAdd.addEventListener('click', event => {
    event.preventDefault();
    let taskInputValue = tasksInput.value.trim();
    if(taskInputValue) {
        tasksList.insertAdjacentHTML('beforeend', `
        <div class="task">
            <div class="task__title">${taskInputValue}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
        tasksInput.value = '';

        let taskRemove = [...tasksList.querySelectorAll('.task__remove')];
        taskRemove.forEach(element => element.addEventListener('click', removeTasks));
    }
});

function removeTasks(event) {
    event.target.parentElement.remove();
}