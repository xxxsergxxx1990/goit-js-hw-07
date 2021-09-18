const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const element = ingredients.map(ingredient =>{
const itemEl = document.createElement('li')
itemEl.textContent = ingredient;

return itemEl

})

ingredientsList.append(...element)
