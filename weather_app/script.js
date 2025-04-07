const apikey = "629af63f508d19e9cd4fa6730a5bde10";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=kr&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { mode: "cors" });
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" /></h2>
        <small>${data.weather[0].description}</small>
    `;    /* 한국어 지원하기위해 description요소 선택 */

    main.innerHTML = "";

    main.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});


