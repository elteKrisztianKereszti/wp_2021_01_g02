const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

const images = {
  bird: new Image(),
  background: new Image(),
  column: new Image(),
};

// Start
images.bird.src = 'bird.png';
images.background.src = 'bg.png';
images.column.src = 'column.png';

const bird = {
  x: 50,
  y: canvas.height / 2,
  width: 30,
  height: 50,
  vy: 0
}
let score = 0;

const columns = []
const GAP = 150;    // px, the gap between the upper and lower column
const COLUMN_DISTANCE = 300;  // px, distance between consecutive columns
const COLUMN_VELOCITY = -200;  // px, horizontal speed of columns

let isEnd = false;

window.addEventListener('keyup', (event) => {
  if (event.key === ' ') {
    bird.vy = -200;
  }
})

let prevTime = performance.now();

function gameLoop(now = performance.now()) {
  const dt = (now - prevTime) / 1000;
  prevTime = now;

  update(dt);
  draw();

  if (!isEnd) requestAnimationFrame(gameLoop);
}
function update(dt) {
  moveBird(dt);
  updateColumns(dt);
  checkIsBirdCollide();
}
function draw() {
  drawBackground();
  drawBird();
  drawColumns();

  ctx.fillStyle = 'red';
  ctx.font = '100px serif';
  ctx.fillText('Points: ' + score, 10, 50);
  
  // The end
  if (isEnd) {
    ctx.fillStyle = 'red';
    ctx.font = '100px serif';
    ctx.fillText('Game over', 10 , canvas.height/2);
  }
}

function moveBird(dt) {
  // bird.y++ // =>
  if (bird.vy < 0) {
    bird.vy += 10;
  };

  let newY = bird.y + bird.vy * dt + 1;
  if (newY < 0) {
    newY = 0;
    isEnd = true;
  }
  else if (newY > canvas.height - bird.height) {
    newY = canvas.height - bird.height;
    isEnd = true;
  } 

  bird.y = newY;
}

function updateColumns(dt) {
  // Moving columns
  columns.forEach(column => {
    column.x += COLUMN_VELOCITY * dt;
  });
  
  // Add a pair of columns
  // If the last column moved from the right edge of canvas to COLUMN_DISTANCE,
  // then add a new pair of column
  if (columns[columns.length - 1].x < COLUMN_DISTANCE) {
    newColumnPair();
  }

  // removing columns
  // If the column on the beginning of the array has left the canvas, remove the first two columns (array.shift())
  if (columns[0].x < 0) {
    columns.shift();
    columns.shift();
    score++;
  }
}

function checkIsBirdCollide() {
    columns.forEach(column => {
      if (isCollide(bird, column)) {
        // moving column with COLUMN_VELOCITY
        // If the column and the bird collides, then the game is over
        console.log('END');
        isEnd = true;
      }
  });
}

function drawBackground() {
  ctx.drawImage(images.background, 0, 0, canvas.width, canvas.height);
}
function drawBird() {
  ctx.drawImage(images.bird ,bird.x, bird.y, bird.width, bird.height);
}
function drawColumns() {
  columns.forEach(column => {
    ctx.drawImage(images.column, column.x, column.y, column.width, column.height);
  });
}

function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function newColumnPair() {
  const h = random(10, canvas.height / 2);
  columns.push(
      {
          x: canvas.width,
          y: 0,
          width: 30,
          height: h,
      },
      {
          x: canvas.width,
          y: h + GAP,
          width: 30,
          height: canvas.height - GAP - h,
      },
  );
}

function isCollide(a, b) {
  return !(
      b.y + b.height  < a.y ||
      a.x + a.width < b.x ||
      a.y + a.height  < b.y ||
      b.x + b.width < a.x
  );
}

// Start
newColumnPair();

gameLoop();

console.log('index.js is loaded...');



