let t9inputSrc = document.querySelector('#t9inputSrc')
let t9btnCopy = document.querySelector('#t9btnCopy')
let t9inputDest = document.querySelector('#t9inputDest')

t9btnCopy.addEventListener('click', () => {
  t9inputDest.value = t9inputSrc.value;
});