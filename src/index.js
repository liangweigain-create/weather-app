import { getWeather } from "./modules/getWeather.js";
import { renderWeatherCurrent, renderWeatherToday } from "./modules/domInterface.js";

const weatherContainer = document.querySelector('.weather-container');
renderWeatherToday('zhuhai', weatherContainer);
renderWeatherCurrent()
