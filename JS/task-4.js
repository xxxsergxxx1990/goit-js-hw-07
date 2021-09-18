const butIncrement = document.querySelector('button[data-action="increment"]');

const butDecrement = document.querySelector('button[data-action="decrement"]');

let counterValue = document.querySelector('#value').textContent;

function increment() {
  counterValue++;
  document.querySelector('#value').textContent = `${counterValue}`;
}
function decrement() {
  counterValue--;
  document.querySelector('#value').textContent = `${counterValue}`;
}
butIncrement.addEventListener('click', () => {
  counterValue++;
  document.querySelector('#value').textContent = `${counterValue}`;
});

butDecrement.addEventListener('click', () => {
  counterValue--;
  document.querySelector('#value').textContent = `${counterValue}`;
});
