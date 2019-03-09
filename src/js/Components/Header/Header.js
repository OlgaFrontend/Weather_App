import Component from '../../framework/Component';
import { SearchBar } from './SearchBar';

export default class Header extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render () {
    return [
      {
        tag: 'header',
        classList: ['app-header'],
        children: [
          {
            tag: 'h1',
            classList: 'title-h1',
            content: 'Weather Forecast',
          },
          {
            tag: SearchBar,
            props: {},
          },
        ],
      }
    ];
  }
}
