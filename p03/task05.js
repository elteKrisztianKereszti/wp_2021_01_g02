let t5playerNum = document.querySelector('#t5playerNum');
let t5newGame = document.querySelector('#t5newGame');
let t5playerStat = document.querySelector('#t5playerStat');
let t5currentPlayer = document.querySelector('#t5currentPlayer');
let t5MemoryTable = document.querySelector('#t5MemoryTable');

let currentPlayerId = 0;
let playersStat = [];
let pairs = 8;

t5newGame.addEventListener('click', newGame);
function newGame() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  let randomSwapCount = 100;
  for (let i = 0; i < randomSwapCount; ++i) {
    let fromIndex = Math.floor(Math.random()* numbers.length);
    let toIndex = Math.floor(Math.random()* numbers.length);
    let tmp = numbers[fromIndex];
    numbers[fromIndex] = numbers[toIndex];
    numbers[toIndex] = tmp;
  }

  let innerHtml = '';
  for (let r = 0; r < 4; ++r) {
    innerHtml += '<tr>';
    for (let c = 0; c < 4; ++c) {
      innerHtml += '<td><span hidden>' + numbers[r*4 + c] + '</span></td>';
    }
    innerHtml += '<tr>';
  }

  for (let i = 0; i < t5playerNum.value; ++i) {
    playersStat.push({
      points: 0,
      clicks: 0
    });
  }

  t5MemoryTable.innerHTML = innerHtml;
  renderCurrentPlayer();
  renderPlayersStat();
}

let firstItem;
let secondItem;
let hideTimeoutHandler;

t5MemoryTable.addEventListener('click', onMemoryTableClick);
function onMemoryTableClick(event) {
  if (hideTimeoutHandler) {
    return;
  }

  let selectedSpan;
  if (event.target.tagName === 'TD') {
    selectedSpan = event.target.firstElementChild;
  }
  else {
    selectedSpan = event.target;
  }

  if (!selectedSpan.hidden) {
    return;
  }

  if (!firstItem) {
    firstItem = selectedSpan;
    firstItem.hidden = false;
    playersStat[currentPlayerId].clicks++;
    renderCurrentPlayer();
    renderPlayersStat();
    return;
  }

  secondItem = selectedSpan;
  secondItem.hidden = false;
  playersStat[currentPlayerId].clicks++;

  if (firstItem.innerHTML === secondItem.innerHTML) {
    firstItem = undefined;
    secondItem = undefined;
    playersStat[currentPlayerId].points++;
  }
  else {
    hideTimeoutHandler = setTimeout(() => {
      firstItem.hidden = true;
      secondItem.hidden = true;

      firstItem = undefined;
      secondItem = undefined;
      hideTimeoutHandler = undefined;
      currentPlayerId++;
      if (currentPlayerId == playersStat.length) {
        currentPlayerId = 0;
      }
      renderCurrentPlayer();
      renderPlayersStat();
    }, 1000)
      
  }
  renderCurrentPlayer();
  renderPlayersStat();

}

function renderCurrentPlayer() {
  t5currentPlayer.innerHTML = 'Current player: ' + (currentPlayerId + 1) + '. player ('+playersStat[currentPlayerId].points+'/'+playersStat[currentPlayerId].clicks+')';
}

function renderPlayersStat()
{
  let innerHtml = '';
  for (let playerId = 0; playerId < playersStat.length; ++playerId) {
    innerHtml += '<tr>';
    innerHtml += '<td>' + (playerId + 1) + '. player</td>';
    innerHtml += '<td>' + playersStat[playerId].points + ' points</td>';
    innerHtml += '<td>' + playersStat[playerId].clicks + ' clicks</td>';
    innerHtml += '<tr>';
  }

  t5playerStat.innerHTML = innerHtml;
}

