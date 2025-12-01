import { getWeather } from "./modules/getWeather.js";
import { renderWeatherCurrent, renderWeatherToday } from "./modules/domInterface.js";

async function initWeatherApp(location) {
    const todayContainer = document.querySelector('.today-weather-container');
    const currentContainer = document.querySelector('.current-weather-container');

    console.log('开始请求数据。。');
    const weatherData = await getWeather(location);
    console.log('请求数据结束，开始渲染。。。');

    renderWeatherToday(weatherData, todayContainer);
    renderWeatherCurrent(weatherData, currentContainer);
}

document.addEventListener('DOMContentLoaded', async () => {
    initWeatherApp('Beijin');
})
