console.log('task02.js is loaded');

let t4txtNumber = document.querySelector('#t4txtNumber');
t4txtNumber.addEventListener('keypress', t4txtNumberOnKeypress);

function t4txtNumberOnKeypress(event) {
  let isNumberPressed = 48 <= event.keyCode && event.keyCode <= 57;

  if (!isNumberPressed) {
    event.preventDefault();
  }

  console.log(event.keyCode);
}

document.addEventListener('keypress', t4documentOnKeypress);

function t4documentOnKeypress(event) {
  console.log(event);
  if (event.target.tagName === 'INPUT') {
    if (event.target.className.indexOf('number') !== -1) {
      t4txtNumberOnKeypress(event);
    }
  }
}

