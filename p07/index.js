let randombtn = document.querySelector('#randombtn') ;
let output = document.querySelector('#output') ;

randombtn.addEventListener('click', async () => {
  getRandomJoke();
  let randomJoke = await getRandomJokeWithFetch();
  console.log(randomJoke);
  output.innerHTML = 'fetch: ' + randomJoke;
});

function getRandomJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://api.icndb.com/jokes/random');
  xhr.responseType = 'json';
  xhr.addEventListener('load', getRandomJokeHandler)
  xhr.send(null);
}

function getRandomJokeHandler() {
  output.innerHTML = 'xml: ' +  this.response.value.joke;
}

async function getRandomJokeWithFetch() {
  // fetch('http://api.icndb.com/jokes/random')
  //   .then(response => response.json())
  //   .then(response => { return response });
  const response = await fetch('http://api.icndb.com/jokes/random');
  const json = await response.json();
  return json.value.joke;
}

