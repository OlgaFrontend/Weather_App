import Component from '../../framework/Component';

export default class Favourites extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render () {
    return [
      {
        tag: 'div',
        classList: ['dropdown'],
        content: 'FAVOURITES',
        children: [
          {
            tag: 'div',
            classList: ['dropdown-show'],
            content: 'dropdown-show',
          },
          {
            tag: 'ul',
            classList: ['dropdown-list'],
            content: 'dropdown-list',
            children: [
              {
                tag: 'li',
                classList: ['dropdown-item'],
                content: 'dropdown-item',
                children: [
                  {
                    tag: 'span',
                    classList: ['dropdown-close'],
                    content: 'dropdown-close',
                  },
                ],
              },
              {
                tag: 'li',
                classList: ['dropdown-item'],
                content: 'dropdown-item',
                children: [
                  {
                    tag: 'span',
                    classList: ['dropdown-close'],
                    content: 'dropdown-close',
                  },
                ],
              },
            ],
          },
        ],
      }
    ];
  }
}
