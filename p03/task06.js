let words = [
  'awesome',
  'king',
  'Three',
  'Queen',
  'Terran',
  'Battlecurser',
  'Carrier',
  'Ultralisk'
];

let t6newGame = document.querySelector('#t6newGame');
let t6Secret = document.querySelector('#t6Secret');
let t6letters = document.querySelector('#t6letters');
let t6mistakeCounter = document.querySelector('#t6mistakeCounter');
let mistake = 0;
let mistakeLimit = 10;
t6newGame.addEventListener('click', onT6NewGameClick);
//t6Secret.addEventListener('click', onT6NewGameClick);
t6letters.addEventListener('click', onT6lettersClick);


onT6NewGameClick();

function onT6NewGameClick() {
  fillTheSecret();
  fillTheLetters();
  refreshMistakeCounter();
}

function onT6lettersClick(event) {
  if (mistake === mistakeLimit) {
    return;
  }

  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  checkTip(event.target);
  refreshMistakeCounter();
}

function fillTheSecret() {
  let randomWord =  words[Math.floor(Math.random()* words.length)];

  let innerHtml = '<tr>';
  for (let c = 0; c < randomWord.length; ++c) {
    innerHtml += '<td class="letterbox">';
    innerHtml += '<span hidden>' + randomWord[c] + '</span>';
    innerHtml += '</td>';
  }
  innerHtml += '<tr>';

  t6Secret.innerHTML = innerHtml;
}

function fillTheLetters() {
  let tdInRow = 0;
  innerHtml = '<tr>';
  for (let charCode = 97; charCode < 123; ++charCode) {
    tdInRow++;
    if (tdInRow % 10 == 0) {
      innerHtml += '</tr>';
      innerHtml += '<tr>';
      tdInRow = 1;
    }
    innerHtml += '<td class="letterbox">';
    innerHtml += '<button>' + String.fromCharCode(charCode) + '</button>';
    innerHtml += '</td>';
  }
  innerHtml += '</tr>';

  t6letters.innerHTML = innerHtml;
}

function checkTip(button) {
  let found = false;
  document.querySelectorAll('#t6Secret span[hidden]').forEach(letter => {
    if (letter.innerHTML.toLowerCase() === button.innerHTML.toLowerCase()) {
      letter.hidden = false;
      found = true;
    }
  });

  if (!found) {
    mistake++;
  }
  
  button.hidden = true;
}

function refreshMistakeCounter() {
  t6mistakeCounter.innerHTML = mistake + ' / ' + mistakeLimit;
}
