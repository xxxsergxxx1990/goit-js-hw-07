const visitor = document.querySelector('#name-input');
const visitorName = document.querySelector('#name-output');
visitor.addEventListener('input', () => {
  visitorName.textContent = `${visitor.value}`;
  if (visitor.value === '') {
    visitorName.textContent = 'незнакомец';
  }
});