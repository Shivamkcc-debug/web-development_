const container = document.getElementById("weather-container");
const loader = document.getElementById("loader");

const cities = [

{ name:"Delhi", lat:28.61, lon:77.20 },
{ name:"Tokyo", lat:35.67, lon:139.65 },
{ name:"New York", lat:40.71, lon:-74.00 }

];

function getWeatherInfo(code){

if(code === 0) return {text:"Clear Sky",emoji:"☀️"};

if(code <= 3) return {text:"Partly Cloudy",emoji:"⛅"};

if(code <= 48) return {text:"Cloudy",emoji:"☁️"};

if(code <= 67) return {text:"Rain",emoji:"🌧"};

if(code <= 77) return {text:"Snow",emoji:"❄️"};

return {text:"Storm",emoji:"⛈"};

}

function createCard(city,temp,code){

const weather = getWeatherInfo(code);

const card = document.createElement("div");

card.className="card";

card.innerHTML=`

<div class="city">${city}</div>

<div class="emoji">${weather.emoji}</div>

<div class="temp">${temp}°C</div>

<div class="condition">${weather.text}</div>

`;

container.appendChild(card);

}

async function fetchWeather(){

try{

const requests = cities.map(city=>

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`)
.then(res=>res.json())

);

const results = await Promise.all(requests);

loader.style.display="none";

results.forEach((data,index)=>{

const temp=data.current_weather.temperature;
const code=data.current_weather.weathercode;

createCard(cities[index].name,temp,code);

});

}

catch(error){

loader.style.display="none";

container.innerHTML=`<h2>⚠ Failed to fetch weather data</h2>`;

}

}

fetchWeather();