let urls = document.querySelector('#urls');

window.addEventListener('load', function() {
  let links = document.getElementsByTagName('a');
  let hrefs = [...links].map((link) => link.href);

  urls.innerHTML = '<li>' + hrefs.join('</li><li>') +'</li>';
});

