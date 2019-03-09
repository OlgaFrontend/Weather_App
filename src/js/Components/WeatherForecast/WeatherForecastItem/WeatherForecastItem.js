import Component from '../../../framework/Component';

export default class WeatherForecastItem extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render () {
    return [
      {
        tag: 'li',
        classList: ['day'],
        content: this.props.content,
      },
    ];
  }
}
