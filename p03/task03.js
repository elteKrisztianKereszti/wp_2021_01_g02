document.addEventListener('click', onAnyElementClick);

function onAnyElementClick(event) {
  if (event.target.tagName === "A") {
    if (event.target.href.search('elte.hu') !== -1) {
      event.preventDefault();
    }
  }
}