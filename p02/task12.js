let t12tip = document.querySelector('#t12tip')
let t12check = document.querySelector('#t12check')
let t12result = document.querySelector('#t12result')

let randomNumber = Math.floor(Math.random() * 100) + 1;

t12check.addEventListener('click', checkTip);

function checkTip() {
  let tip = parseInt(t12tip.value);
  let message = '';

  if (tip < randomNumber) {
    message = 'Your tipp is less than the number';
  }
  else if (tip > randomNumber) {
    message = 'Your tipp is greater than the number';
  }
  else {
    message = 'Bingo!';
  }

  t12result.innerHTML = message;
}