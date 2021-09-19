let calculator = document.querySelector('#btn4calculate');
let radius = document.querySelector('#txt4radius');
let sol4 = document.querySelector('#div4Sol');

function circumference(r) {
  return 2 * r * Math.PI;
}

calculator.addEventListener('click', function() {
  sol4.innerHTML = circumference(radius.value);
});

