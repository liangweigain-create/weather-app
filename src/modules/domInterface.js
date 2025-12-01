import { getWeather } from "./getWeather.js";

export async function renderWeatherToday(location, domEl) {
    try {
        const weatherData = await getWeather(location);

        //创建必要元素并加入到domel中
        const dateP = document.createElement('h2');
        dateP.classList.add('date');
        const feelsP = document.createElement('p');
        const tempAve = document.createElement('p');
        const tempMin = document.createElement('p');
        const tempMax = document.createElement('p');
    }
}