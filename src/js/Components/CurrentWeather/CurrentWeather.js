import Component from '../../framework/Component';

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render () {
    return [
      {
        tag: 'div',
        classList: 'today',
        content: 'CURRENT WEATHER',
      }
    ];
  }
}
