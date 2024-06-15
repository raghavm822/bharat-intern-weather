const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const tempreture = document.querySelector('.tempreture');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const wheather_img = document.querySelector('.wheather-img');
const location_not_found = document.querySelector('.location-not-found');
const wheather_body = document.querySelector('.wheather-body');

async function checkWheather(city){
    const api_key = "9397659dfcda9268c2dbe05ffaa7b66d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const wheather_data = await fetch(`${url}`).then(response => response.json());

    if(wheather_data.cod === `404`){
        location_not_found.style.display ="flex";
        wheather_body.style.display = "none";
        console.log("error");
        return;
    }

    location_not_found.style.display = "none";
    wheather_body.style.display = "flex";

    tempreture.innerHTML = `${Math.round(wheather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${wheather_data.weather[0].description}`;

    humidity.innerHTML = `${wheather_data.main.humidity}%`;

    wind_speed.innerHTML = `${wheather_data.wind.speed}Km/H`;

    switch(wheather_data.weather[0].main){
        case 'Clouds':
            wheather_img.src = "./cloud.png";
            break;

        case 'Clear':
            wheather_img.src = "./clear.png";
            break;

        case 'Rain':
            wheather_img.src = "./rain.png";
            break;

        case 'Mist':
            wheather_img.src = "./mist.png";
            break;

        case 'Snow':
            wheather_img.src = "./snow.png";
            break;
    }
}

searchBtn.addEventListener('click',()=>{
    checkWheather(inputBox.value);
})