console.log('Loaded');

let grid = {
  id: 0,
  pixels: undefined,
  currentColor: '#ff0000',
  paintCell: function(row, column) {
    this.pixels[row][column] = this.currentColor;
  },
  clearColor: function(row, column) {    
    this.pixels[row][column] = undefined;
  },
  setColor: function(newColor) {
    this.currentColor = newColor;
  }
};

let pixelArts = localStorage['pixelArts']
? JSON.parse(localStorage['pixelArts'])
: [
  {
      id: 1,
      pixels: [
          ['#123456', '#234567', '#345678']
      ]
  },
  {
      id: 2,
      pixels: [
          ['#123456'],
          ['#234567'],
          ['#345678']
      ]
  },
]

console.log(pixelArts);

let submitButton = document.querySelector('#submit');
let previewGrid = document.querySelector('.preview');
let editGrid = document.querySelector('.edit');
let colorPicker = document.querySelector('#colorPicker');
let saveButton = document.querySelector('#save');
let pixelArtsUl = document.querySelector('#pixel-arts');

submitButton.addEventListener('click', newGrid);
editGrid.addEventListener('click', onEditGridClick);
editGrid.addEventListener('contextmenu', onEditGridContextMenu);
colorPicker.addEventListener('change', onColorPickerChange);
save.addEventListener('click', onSaveClick);
pixelArtsUl.addEventListener('click', onPixelArtsUlClick);

function onSaveClick() {
  if (grid.id != 0) {
    let pixelArt = pixelArts.find(pa => pa.id == grid.id);
    pixelArt.pixels = JSON.parse(JSON.stringify(grid.pixels));
  }
  else {
    pixelArts.push({
      id: Date.now(),
      pixels: JSON.parse(JSON.stringify(grid.pixels)),
    });
  }[]

  localStorage['pixelArts'] = JSON.stringify(pixelArts);
  listAllPixelArts();
}

function onColorPickerChange(event) {
  grid.setColor(this.value);
}

function onEditGridClick(event) {
  if (event.target.tagName !== 'TD') {
    return;
  }

  let cell = event.target;

  let row = parseInt(cell.getAttribute('data-row'));
  let column = parseInt(cell.getAttribute('data-column'));
  grid.paintCell(row, column);
  renderTables();
}

function renderTables() {
  let innerHtml = generateTable(grid.pixels);
  previewGrid.innerHTML = innerHtml;;
  editGrid.innerHTML = innerHtml;
}

function newGrid(event) {
  event.preventDefault();

  let width = parseInt(document.querySelector('#width').value);
  let height = parseInt(document.querySelector('#height').value);

  grid.pixels = new Array(height);
  for (let r = 0; r < grid.pixels.length; r++) {
    grid.pixels[r] = new Array(width);
  }
  grid.id = 0;

  renderTables();
  colorPicker.value = grid.currentColor;
}

function generateTable(pixels) {
  let innerHtml = '';

  for (let r = 0; r < pixels.length; ++r){
    innerHtml += '<tr>';
    for (let c = 0; c < pixels[r].length; ++c){
      innerHtml += '<td';
      innerHtml += ' data-row="' + r + '"';
      innerHtml += ' data-column="' + c + '"';
      innerHtml += ' style="background-color:' + pixels[r][c] + '"';
      innerHtml += '>'

      innerHtml += '</td>'
    }
    innerHtml += '</tr>';
  }

  return innerHtml;
}


function onEditGridContextMenu(event) {
  if (event.target.tagName !== 'TD') {
    return;
  }

  let rowIndex = event.target.getAttribute('data-row');
  let columnIndex = event.target.getAttribute('data-column');
  event.preventDefault();
  grid.clearColor(rowIndex, columnIndex);

  renderTables();
}
function listAllPixelArts() {
  let ulContent = '';
  
  pixelArts.forEach((pixelArt) => {
    ulContent += '<li pixel-art-id=' + pixelArt.id + '>';
    ulContent += '<table>' + generateTable(pixelArt.pixels) + '</table>';
    ulContent += '</li>';
  })

  pixelArtsUl.innerHTML = ulContent;
}

function onPixelArtsUlClick(event) {
  if (event.target.tagName === 'UL') {
    return;
  }

  // look for LI => go up to LI
  let currentElement = event.target;
  while (currentElement.tagName !== 'LI') {
    currentElement = currentElement.parentElement;
  }

  let pixelArtId = currentElement.getAttribute('pixel-art-id');
  loadPixelArt(pixelArtId);
}

function loadPixelArt(pixelArtId) {

  let pixelArt = pixelArts.find(pa => pa.id == pixelArtId);

  grid.pixels = JSON.parse(JSON.stringify(pixelArt.pixels));
  grid.id = pixelArt.id;

  renderTables();
}

listAllPixelArts();
