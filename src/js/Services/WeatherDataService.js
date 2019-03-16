const API_KEYS = '4af77667f1389890c2c5d3ac8ee90e4c';
const API_URL = `https://api.openweathermap.org/data/2.5/`;
const CURRENT_WEATHER = 'weather';
const FORECAST_WEATHER = 'forecast';

const get = (API_URL, API_KEYS, query, period) => {
  return  fetch(`${API_URL}/${period}?q=${query}&appid=${API_KEYS}`)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
            })
            .then(data => console.log(data))           
}

class WeatherDataService{
  constructor () {

  } 
  
  getCurrentWeather(city, period) {
    get(API_URL, API_KEYS, city, CURRENT_WEATHER);
  }
  getForecastWeather(city, period) {
    get(API_URL, API_KEYS, city, FORECAST_WEATHER);
  }
}

export default new WeatherDataService();

