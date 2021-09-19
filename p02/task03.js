let renderer = document.querySelector('#btn3renderer');
let number = document.querySelector('#txt3number');
let sol = document.querySelector('#div3Sol');

renderer.addEventListener('click', function(e) {
  console.log(number.value);
  let innerHTMLsolution = '';

  for (let x = 1; x <= number.value; ++x ) {
    innerHTMLsolution += '<tr>';
    for (let y = 1; y <= number.value; ++y ) {
      innerHTMLsolution += '<td>' + x * y + '</td>';
    }
    
    innerHTMLsolution += '</tr>';
  }

  sol.innerHTML = '<table>' + innerHTMLsolution + '</table>';
})

