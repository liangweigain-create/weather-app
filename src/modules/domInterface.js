import { getWeather } from "./getWeather.js";
// 引入 format 函数（按需引入，减小体积）
import { format } from 'date-fns';
// 如需中文本地化，引入对应的语言包
import { zhCN } from 'date-fns/locale';

export function renderWeatherToday(weatherData, domEl) {
    try {
        if (!weatherData?.todayConditions) throw new Error('今日天气数据缺失');

        //创建必要元素并加入到domel中
        const dateEl = createElementWithContent(
            'h2',
            'date',
            format(new Date(weatherData.todayConditions.date), 'EEEE MM月dd日')
        )

        const feelsEl = createElementWithContent(
            'p',
            'feels',
            `体感温度： ${fahrenheitToCelsius(weatherData.todayConditions.feelsLike, 2)}˚C`
        )

        const tempAveEl = createElementWithContent(
            'p',
            'temp',
            `平均温度： ${fahrenheitToCelsius(weatherData.todayConditions.feelsLike, 2)}˚C`
        )

        const tempMinEl = createElementWithContent(
            'p',
            'temp',
            `最低温度： ${fahrenheitToCelsius(weatherData.todayConditions.feelsLike)}˚C`
        )

        const tempMaxEl = createElementWithContent(
            'p',
            'temp',
            `最高温度： ${fahrenheitToCelsius(weatherData.todayConditions.feelsLike)}˚C`
        )

        domEl.innerHTML = '';
        domEl.append(dateEl, feelsEl, tempAveEl, tempMinEl, tempMaxEl);
    }catch (error) {
        console.log('get weather failed: ', error);
        throw error;
    }
}

export function renderWeatherCurrent(weatherData, domEl) {
    try {
        if (!weatherData?.currentConditions) throw new Error('当前天气缺失');

        const dateTimeEl = createElementWithContent(
            'h2',
            'dateTime',
            format(weatherData.currentConditions.dateTime, 'a h:mm', { locale: zhCN })
        )

        const currentTempEl = createElementWithContent(
            'p',
            'temp',
            `${fahrenheitToCelsius(weatherData.currentConditions.temp)}˚C`
        )

        const feelsTempEl = createElementWithContent(
            'p',
            'temp',
            `${fahrenheitToCelsius(weatherData.currentConditions.temp)}˚C`
        )

        domEl.innerHTML = '';
        domEl.append(dateTimeEl, currentTempEl, feelsTempEl);
    }catch (error) {
        console.log('渲染失败', error);
        throw error;
    }
}

/**
 * 华氏度转摄氏度
 * @param {number} fahrenheit - 华氏度数值
 * @param {number} precision - 保留小数位数（默认1位）
 * @returns {number} 摄氏度数值
 */
export function fahrenheitToCelsius(fahrenheit, precision = 1) {
  if (typeof fahrenheit !== 'number') {
    throw new Error('输入必须是数字');
  }
  const celsius = (fahrenheit - 32) * 5 / 9;
  return Number(celsius.toFixed(precision)); // 控制精度
}

function createElementWithContent(tag, className, textContent) {
    if (typeof tag !== 'string') tag = String(tag);
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    if (textContent) el.textContent = textContent;

    return el;
}