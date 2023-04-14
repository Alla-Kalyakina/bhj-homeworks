const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

const botAnswers = [
    'К сожалению все опереторы сейчас заняты. Не пишите нам больше!', 
    'Вы не купили ни одного товара, adios!', 
    'Кто тут?', 
    'Добрый день! До свидания!', 
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать!'
];

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && input.value.trim()) {
      messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${new Date().toLocaleTimeString([], {timeStyle: 'short'})}</div>
        <div class="message__text">${input.value}</div>
        </div>
      `;
      input.value = '';
  
      messages.innerHTML += `
        <div class="message">
        <div class="message__time">${new Date().toLocaleTimeString([], {timeStyle: 'short'})}</div>
        <div class="message__text">${botAnswers[Math.floor(Math.random() * botAnswers.length)]}</div>
        </div>
      `;
    }

    messages.scrollIntoView({block: 'end', behavior: 'smooth'});
  });