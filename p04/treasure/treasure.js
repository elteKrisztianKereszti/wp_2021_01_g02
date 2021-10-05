console.log('Loaded');
let treasureLocation = {
  x:0,
  y:0
}


let map = document.querySelector('#map');

let sizeInput = document.querySelector('#size');
let newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', () => {
  newGame(sizeInput.value)
})

map.addEventListener('click', onMapClick);
function onMapClick(e) {
  console.log(e);
  if (e.target.tagName !== 'TD') {
    return;
  }
  
  let x = e.target.getAttribute('data-x');
  let y = e.target.getAttribute('data-y');

  if (treasureLocation.x == x && treasureLocation.y == y) {
    e.target.innerHTML = 'TREASURE!!!!';
    setTimeout(() => {
      newGame();
    }, 2000);
  }
}

function renderMap(size) {
  let innerHtml = '';
  for (let r = 0 ; r < size; ++r) {
    innerHtml += '<tr>';    
    for (let c = 0 ; c < size; ++c) {
      innerHtml += '<td data-x="' + r + '" data-y="' + c +'"></td>';
    }
    innerHtml += '</tr>';
  }

  map.innerHTML = innerHtml;
}

function newGame(size) {
  treasureLocation = {
    x: Math.floor(Math.random() * (0+size)),
    y: Math.floor(Math.random() * (0+size))
  }
  renderMap(size);
  console.log(treasureLocation);
}

newGame();