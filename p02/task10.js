let t10counterValue = document.querySelector('#t10counterValue')
let t10counterDec = document.querySelector('#t10counterDec')
let t10counterInc = document.querySelector('#t10counterInc')

let t10counter = 0;
let minCounter = -10;
let maxCounter = 10;
t10counterValue.value = t10counter;

t10counterDec.addEventListener('click', () => {
  modifyCounter(-1);
});

t10counterInc.addEventListener('click', () => {
  modifyCounter(1);
});

function modifyCounter(delta) {
  if (minCounter > t10counter + delta || maxCounter < t10counter + delta) {
    return;
  }

  t10counter += delta
  t10counterValue.value = t10counter;
}
