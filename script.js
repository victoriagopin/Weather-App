
const apiKey = "c069de67917b962572dbf1eefb7fa64e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".wheather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none'
    } else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "imgs/clouds.png"
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "imgs/clear.png"
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "imgs/drizzle.png"
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "imgs/rain.png"
        } else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = "imgs/snow.png"
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "imgs/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = 'none';

    }
}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})