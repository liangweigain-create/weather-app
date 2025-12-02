import { getWeather } from "./modules/getWeather.js";
import { renderCityName, renderWeatherCurrent, renderWeatherToday } from "./modules/domInterface.js";
import "../src/styles/index.css";


document.addEventListener('DOMContentLoaded', () => {
    const location = 'zhuhai';
    handleSearch(location);

    const input = document.querySelector('.search');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', () => {
        const inputValue = input.value.trim();
        if (!inputValue) throw new Error('wrong input');
        handleSearch(inputValue);
    })
    input.addEventListener('keypress', (e) => {
        if (!e.key === 'Enter') return;
        if (e.key === 'Enter') {
            const inputValue = input.value.trim();
            if (!inputValue) throw new Error('wrong input');
            handleSearch(inputValue);
        }
    })
})


async function handleSearch(location) {
    const todayContainer = document.querySelector('.today-weather-container');
    const currentContainer = document.querySelector('.current-weather-container');
    const chineseName = document.querySelector('.city-name');
    
    console.log('开始请求数据。。');
    const weatherData = await getWeather(location);
    console.log('请求数据结束，开始渲染。。。');

    renderCityName(location, chineseName)
    renderWeatherToday(weatherData, todayContainer);
    renderWeatherCurrent(weatherData, currentContainer);
}
