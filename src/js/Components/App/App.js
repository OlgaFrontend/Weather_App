import Component from '../../framework/Component';
import {SearchBar} from "../SearchBar";
import {WeatherForecast} from "../WeatherForecast";
import {CurrentWeather} from '../CurrentWeather';
import {History} from '../History';
import {Favourites} from '../Favourites';
import {ToggleDegree} from '../ToggleDegree';

import WeatherDataService from "../../Services/WeatherDataService.js";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

    render () {
      WeatherDataService.getCurrentWeather('London');
      WeatherDataService.getForecastWeather('London');
      
      return [
        {
          tag: 'h1',
          classList: 'title-h1',
          content: 'Weather Forecast',
        },
        {
          tag: SearchBar,
          props: {},
        },
        {
          tag: ToggleDegree,
          props: {},
        },
        {
          tag: CurrentWeather,
          props: {},
        },
        {
          tag: WeatherForecast,
          props: {},
        },
        {
          tag: History,
          props: {},
        },
        {
          tag: Favourites,
          props: {},
        },
      ];

    }
}
