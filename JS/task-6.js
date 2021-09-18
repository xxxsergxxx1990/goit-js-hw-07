const valInp = document.querySelector('#validation-input');

valInp.classList.add('invalid');

const funcBlur = () => {
  valInp.classList.forEach(elem => valInp.classList.remove(elem));
  if (valInp.value.length === parseInt(valInp.dataset.length, 10)) {
    valInp.classList.add('valid');
  } else {
    valInp.classList.add('invalid');
  }
};

valInp.addEventListener('blur', funcBlur);