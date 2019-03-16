import Component from '../../framework/Component';

export default class SearchBar extends Component {
  constructor(host, props) {
    super(host, props);
    
  }

  render () {
    return [
      {
        tag: 'form',
        classList: ['search-wrap'],
        attributes: [{
          name: 'method',
          value: 'GET',
        }],
        children: [
          {
            tag: 'input',
            classList: ['search-input'],
            attributes: [
              {
                name: 'id',
                value: 'id-search-input',
              },
              {
                name: 'type',
                value: 'text',
              },
              {
                name: 'placeholder',
                value: 'search'
              }
            ],
          }
        ], 
      }
    ];
  }
}
