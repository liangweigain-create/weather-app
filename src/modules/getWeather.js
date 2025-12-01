import { fetchData } from "./apiUtils.js";
import { CONFIG } from "../config.js";

export async function getWeather(location) {
    //配置params并传入fetchdata函数中
    const params = {
        key: CONFIG.WEATHER.API_KEY,//键为key因为visual crossing API DOC中说了参数apikey是key=
        //地点参数不传入params中，因为APIDOC中明确了地点search需要跟在base url后面
    }
    console.log(params);
    const baseUrl = `${CONFIG.WEATHER.BASE_URL}${location}`;
    console.log(`Calling fetchData with baseUrl: ${baseUrl}`);

    const rawData = await fetchData(baseUrl, params);
    const weatherData = extractWeatherData(rawData);
    return weatherData;
}

function extractWeatherData(rawData) {
    return {
        location: rawData.address,
        currentConditions: {
            dateTime: rawData.currentConditions.datetime,
            temp: rawData.currentConditions.temp,
            feelsLike: rawData.currentConditions.feelslike,
        },
        todayConditions: {
            date: rawData.days[0].datetime,
            tempAve: rawData.days[0].temp,
            tempMin: rawData.days[0].tempmin,
            tempMax: rawData.days[0].tempmax,
            feelsLike: rawData.days[0].feelslike,
        },
        futureConditions: [
            {
                date: rawData.days[1].datetime,
                tempAve: rawData.days[1].temp,
                tempMin: rawData.days[1].tempmin,
                tempMax: rawData.days[1].tempmax,
                feelsLike: rawData.days[1].feelslike,
            },
            {
                date: rawData.days[2].datetime,
                tempAve: rawData.days[2].temp,
                tempMin: rawData.days[2].tempmin,
                tempMax: rawData.days[2].tempmax,
                feelsLike: rawData.days[2].feelslike,
            },
            {
                date: rawData.days[3].datetime,
                tempAve: rawData.days[3].temp,
                tempMin: rawData.days[3].tempmin,
                tempMax: rawData.days[3].tempmax,
                feelsLike: rawData.days[3].feelslike,
            }
        ]
    }
}