let t4txtFilter = document.querySelector('#t4txtFilter');
let t4MovieList = document.querySelector('#t4MovieList');

t4txtFilter.addEventListener('input', t4txtFilterOnInput );

function t4txtFilterOnInput(event) {
  let filter = this.value;
  let filetredMovies = movies.filter(movie => movie.title.indexOf(filter) !== -1);
  let resultOfHtml = '<li>' + filetredMovies.map(movie => movie.title).join('</li><li>') + '</li>';
  t4MovieList.innerHTML = resultOfHtml;
  console.log(filetredMovies);
}
