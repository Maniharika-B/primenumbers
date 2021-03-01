const api = {
	key: "e860e95d8ae72ddb6e8d1c5c0a31ca2e",
	base: "https://api.openweathermap.org/data/2.5/",
}

//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    getWeather(searchbox.value);
    console.log(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function getWeather (query) {
  fetch(`${api.base}forecast?q=${query}&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}


 function displayResults (weather) {
   let city = document.querySelector('.location .city');
   city.innerText = `${weather.name}, ${weather.sys.country}`;

   let now = new Date();
   let date = document.querySelector('.location .date');
   date.innerText = dateBuilder(now);

   let temp = document.querySelector('.current .temp');
   temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

   let weather_el = document.querySelector('.current .weather');
   weather_el.innerText = weather.weather[0].main;

   let weather_ee = document.querySelector('.current .weather-desc');
   weather_ee.innerText = weather.weather[0].description;

   let hilow = document.querySelector('.hi-low');
   hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

   let winds = document.querySelector('.wind-speed');
   winds.innerText = `${Math.round(weather.wind.speed)} m/s`;

   var iconcode = weather.weather[0].icon;
   var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);
 }

 function dateBuilder (d) {
   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   let day = days[d.getDay()];
   let date = d.getDate();
   let month = months[d.getMonth()];
   let year = d.getFullYear();

   return `${day} , ${date} ${month} ${year}`;
 }

 function showmore(){

 	var dt = new Date();
     
	dt.setHours( dt.getHours() + 2 );
     
	document.getElementById('date1').innerHTML = dt+"<br>"+;


 }

 