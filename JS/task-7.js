const defSize = window
  .getComputedStyle(document.querySelector('body'))
  .getPropertyValue('font-size'); //находим font-size по default
const vol = document.getElementById('font-size-control');
vol.setAttribute('min', '1');
vol.setAttribute('max', '10');
vol.setAttribute('step', '1');
vol.setAttribute('value', '1');
const str = document.getElementById('text');
vol.addEventListener('input', () => {
  str.style.fontSize = `${parseInt(defSize) * parseInt(vol.value)}px`;
});