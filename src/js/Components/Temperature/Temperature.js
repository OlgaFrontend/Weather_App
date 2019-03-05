import Component from '../../framework/Component';

export default class Temperature extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render () {
    console.log(this.props);
    return this.props.temperature + '&deg;' + this.props.unit;
  }
}
