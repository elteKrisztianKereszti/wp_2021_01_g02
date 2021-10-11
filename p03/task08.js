let faq = document.querySelector('.faq');
faq.addEventListener('click', onFaqClick);

hideAllAnswers();

function onFaqClick(event) {
  if (event.target.tagName !== 'H2') {
    return;
  }

  let para = event.target.nextElementSibling;
  paradisp = para.style.display;
  para.style.display = paradisp == 'none' ? 'block' : 'none';
}

function hideAllAnswers() {
  document.querySelectorAll('.faq p').forEach(element => element.style.display = 'none');
}
