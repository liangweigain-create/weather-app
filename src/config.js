export const CONFIG = {
    WEATHER: {
        BASE_URL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
        API_KEY: process.env.WEATHER_API_KEY,
    },
    GIPHY: {
        BASE_TRANSLATE_URL: 'https://api.giphy.com/v1/gifs/translate/',
        BASE_RANDOM_URL: 'https://api.giphy.com/v1/gifs/random/',
        API_KEY: process.env.GIPHY_API_KEY,
    }
}