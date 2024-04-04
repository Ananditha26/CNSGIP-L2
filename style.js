

const city= document.querySelector('.city');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');

const apikey="8328bc1116a5c8fb9818915eb4720ddd";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=Manali";

const inputbox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather_img');

async function checkWeather(){
    const response= await fetch(apiurl + '&appid='+apikey);
    var data= await response.json();
    console.log (data);
    
    if(data.cod === "404"){
        console.log('error');
        return;
    }
   

    city.innerHTML = data.name;
    temperature.innerHTML = data.main.temp +"°C";
    description.innerHTML = data.weather[0].description;
    humidity.innerHTML = data.main.humidity;
    wind_speed.innerHTML= data.wind.speed+"Km/H";
    
    if(data.weather[0].main == "clouds"){
        weather_img.src="/images/cloudy.png";
    }
    else if(data.weather[0].main == "rain"){
        weather_img.src="/images/rain.png";
    }
    else if(data.weather[0].main == "sun"){
        weather_img.src="/images/sun.png";
    }
            
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(inputbox.value);
})
