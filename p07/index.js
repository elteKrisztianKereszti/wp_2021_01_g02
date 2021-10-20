let query = document.querySelector('#query') ;
let getWeatherInfoBtn = document.querySelector('#getWeatherInfoBtn') ;
let output = document.querySelector('#output') ;

getWeatherInfoBtn.addEventListener('click', async () => {
  let geoData = await getGeodata(query.value);
  if (!geoData || geoData.features.length == 0) {
    output.innerHTML = 'NO DATA';
    return;
  }
  
  let coordinates = processGeoData(geoData);
  let wet = await getWetData(coordinates);
  console.log(wet);
  output.innerHTML = 'DATA: ' + JSON.stringify(wet);
});

async function getGeodata(query) {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=geojson`);
  const json = await response.json();
  return json;
}

function processGeoData(geoData) {
  return geoData.features[0].geometry.coordinates;
}

async function getWetData(coordinates) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=8607a0d84d57d8ae4f7ca3c71200e60e `);
  const json = await response.json();
  return json;
}




