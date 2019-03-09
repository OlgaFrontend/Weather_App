import Component from '../../framework/Component';
import {Header} from "../Header";
import {WeatherForecast} from "../WeatherForecast";
import {CurrentWeather} from '../CurrentWeather';

export default class App extends Component {
  constructor(host) {
    super(host);
  }

    render () {
      
      return [ 
        {
          tag: Header,
          props: {},
        },
        {
          tag: CurrentWeather,
          props: {},
        },
        {
          tag: WeatherForecast,
          props: {},
        }
      ];

    }
}
