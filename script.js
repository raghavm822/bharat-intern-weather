const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const tempreture = document.querySelector('.tempreture');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const wheather_img = document.querySelector('.wheather-img');

async function checkWheather(city){
    const api_key = "9397659dfcda9268c2dbe05ffaa7b66d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const wheather_data = await fetch(`${url}`).then(response => response.json());

    console.log(wheather_data);

    tempreture.innerHTML = `${Math.round(wheather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${wheather_data.weather[0].description}`;

    humidity.innerHTML = `${wheather_data.main.humidity}%`;

    wind_speed.innerHTML = `${wheather_data.wind.speed}Km/H`;

    switch(wheather_data.weather[0].main){
        case 'Clouds':
            wheather_img.src = "/assets/cloud.png";
            break;

        case 'Clear':
            wheather_img.src = "/assets/clear.png";
            break;

        case 'Rain':
            wheather_img.src = "/assets/rain.png";
            break;

        case 'Mist':
            wheather_img.src = "/assets/mist.png";
            break;

        case 'Snow':
            wheather_img.src = "/assets/snow.png";
            break;
    }
}

searchBtn.addEventListener('click',()=>{
    checkWheather(inputBox.value);
})