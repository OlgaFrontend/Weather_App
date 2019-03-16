import Component from '../../framework/Component';
import { WeatherForecastItem } from './WeatherForecastItem';

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render () {

    return [
      {
        tag: 'ul',
        classList: ['next-days'],
        children: [
          {
            tag: WeatherForecastItem,
            props: {
              content: '1 day',
            }
          },
          {
            tag: WeatherForecastItem,
            props: {
              content: '2 day',
            }
          },
          {
            tag: WeatherForecastItem,
            props: {
              content: '3 day',
            }
          },
          {
            tag: WeatherForecastItem,
            props: {
              content: '4 day',
            }
          },
          {
            tag: WeatherForecastItem,
            props: {
              content: '5 day',
            }
          },
        ],
      }
    ];
  }
}
