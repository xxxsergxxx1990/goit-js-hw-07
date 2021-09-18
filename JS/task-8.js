const mainDiv = document.getElementById('boxes');
const numNewDiv = document.querySelector('input');
const butRend = document.querySelector('button[data-action="render"]');

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function createBoxes(amount) {
  amount = numNewDiv.value;
  for (let i = 0; i != amount; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = `rgb(${getRandom(0, 255)},${getRandom(
      0,
      255
    )},${getRandom(0, 255)})`;
    mainDiv.appendChild(newDiv);
  }
  numNewDiv.value = null;
}
butRend.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  while (mainDiv.firstChild) mainDiv.removeChild(mainDiv.firstChild);
};

const butDestr = document.querySelector('button[data-action="destroy"]');
butDestr.addEventListener('click', destroyBoxes);