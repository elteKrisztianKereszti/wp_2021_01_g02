console.log(movies);

let t4txtFilter = document.querySelector('#t4txtFilter');
t4txtFilter.addEventListener('keyup', filterMovies); 
document.addEventListener('mousehover', showDetail); 

let t4MovieList = document.querySelector('#t4MovieList');

function filterMovies(event) {
  let text = t4txtFilter.value;
  let filteredMovie = movies.filter(movie => movie.title.search(text) != -1);
  let index = 0;
  let filteredMovieWithId = filteredMovie.map(movie => {
    movie.index = index++;
    return JSON.stringify(movie);
  });
 
  let innerHTMLForUl = '';
  filteredMovieWithId.forEach(movie => {
    console.log(JSON.parse(movie));
    innerHTMLForUl += '<li data-item="' + movie + '">' + JSON.parse(movie).title + '</li>'
  })

  t4MovieList.innerHTML = innerHTMLForUl;
  console.log(filteredMovie);
}

// TODO
function showDetail(e) {
  if (e.target.tagName === 'LI'&& e.target.item) {
    console.log(e.target.item);
  }
}
