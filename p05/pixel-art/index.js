console.log('Loaded');

let grid = {
  table: undefined,
  currentColor: '#ff0000',
  paintCell: function(row, colum) {
    this.table[row][colum] = this.currentColor;
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

submitButton.addEventListener('click', newGrid);
editGrid.addEventListener('click', onEditGridClick);
colorPicker.addEventListener('change', onColorPickerChange);
save.addEventListener('click', onSaveClick);

function onSaveClick() {  
  let data = localStorage['pixelArts'] ? JSON.parse(localStorage['pixelArts']) : [];

  data.push({
    id: pixelArts[pixelArts.length-1].id + 1,
    pixels: grid.table
  })

  localStorage['pixelArts'] = JSON.stringify(data);

  console.log(data);
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
  let innerHtml = generateTable();
  previewGrid.innerHTML = innerHtml;;
  editGrid.innerHTML = innerHtml;
}

function newGrid(event) {
  event.preventDefault();

  let width = parseInt(document.querySelector('#width').value);
  let height = parseInt(document.querySelector('#height').value);

  grid.table = new Array(height);
  for (let r = 0; r < grid.table.length; r++) {
    grid.table[r] = new Array(width);
  }

  let innerHtml = generateTable();
  previewGrid.innerHTML = innerHtml;
  editGrid.innerHTML = innerHtml;

  colorPicker.value = grid.currentColor;
}

function generateTable() {
  let innerHtml = '';

  for (let r = 0; r < grid.table.length; ++r){
    innerHtml += '<tr>';
    for (let c = 0; c < grid.table[r].length; ++c){
      innerHtml += '<td';
      innerHtml += ' data-row="' + r + '"';
      innerHtml += ' data-column="' + c + '"';
      innerHtml += ' style="background-color:' + grid.table[r][c] + '"';
      innerHtml += '>'

      innerHtml += '</td>'
    }
    innerHtml += '</tr>';
  }

  return innerHtml;
}

