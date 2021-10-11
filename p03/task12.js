document.addEventListener('contextmenu', customMenu);
document.addEventListener('click', onClickCustomMenuItem);

function customMenu(event) {
  debugger;
  event.preventDefault();

  let cm = document.querySelector('.custom-menu');
  if (cm) {
    cm.parentElement.removeChild(cm);
  }


  let customMenu = document.createElement('div');
  customMenu.style.position = 'absolute';
  customMenu.style.top = event.layerY + 'px';
  customMenu.style.left = event.layerX + 'px';
  customMenu.className = 'custom-menu'

  let customMenuItem1 = document.createElement('div');
  customMenuItem1.className = 'custom-menu-item'
  customMenuItem1.innerHTML = "Item1";

  let customMenuItem2 = document.createElement('div');
  customMenuItem2.className = 'custom-menu-item'
  customMenuItem2.innerHTML = 'Item2';

  customMenu.appendChild(customMenuItem1);
  customMenu.appendChild(customMenuItem2);
  document.body.appendChild(customMenu);
}

function onClickCustomMenuItem(event) {
  if (event.target.className === 'custom-menu-item') {
    // DO stuff!!!
    alert(event.target.innerHTML);
  }

  let cm = document.querySelector('.custom-menu');
  cm.parentElement.removeChild(cm);
}