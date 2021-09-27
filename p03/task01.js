console.log('task01.js is loaded');

let t1paragraph = document.querySelector('#t1paragraph');
t1paragraph.addEventListener('click', t1paragraphOnClick);

function t1paragraphOnClick(event) {
  // a
  console.log(this);
  // b
  console.log(event.type);
  // c
  console.log(event.button);
  // d
  console.log(event.screenX + ' : ' + event.screenY);
  // e
  console.log(event.target);
  console.log(event);
  // f
  if (event.target.tagName === "SPAN") {
    console.log(event.target.innerHTML);
  }
  // g
  if (event.target.tagName === "A") {
    if (event.target.innerHTML === 'libero') {
      event.preventDefault();
    }
  }
}

