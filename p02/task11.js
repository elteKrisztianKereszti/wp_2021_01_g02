let t11originalAmount = document.querySelector('#t11originalAmount')
let t11interestValue = document.querySelector('#t11interestValue')
let t11period = document.querySelector('#t11period')
let t11show = document.querySelector('#t11show')
let t11result = document.querySelector('#t11result')


t11show.addEventListener('click', renderCompoundInterest);

function renderCompoundInterest() {
  let innerHtml = '';
  let period = t11period.value;
  let currentValue = parseInt(t11originalAmount.value);
  let percent = parseInt(t11interestValue.value) / 100;
  for (let year = 1; year <= period; ++year) {
    currentValue = currentValue + currentValue * percent;
    innerHtml += '<tr>';
    innerHtml += '<td>' + year + '. </td>';
    innerHtml += '<td>'+ currentValue +'</td>';
    innerHtml += '</tr>';
  }

  t11result.innerHTML = innerHtml;
}