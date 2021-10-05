let urlInput = document.querySelector('#t8txtUrl');
let btnLoadImage = document.querySelector('#t8btnLoadImage');
let img = document.querySelector('#t8img');

btnLoadImage.addEventListener('click', () => {
  img.src = urlInput.value;
})