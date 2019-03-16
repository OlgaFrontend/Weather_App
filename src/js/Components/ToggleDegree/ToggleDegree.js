import Component from '../../framework/Component';

export default class ToggleDegree extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render () {
    return [
      {
        tag: 'div',
        classList: ['toogle-degree'],
        children: [
          {
            tag: 'button',
            classList: ['toggle-degree-btn'],
            content: '&#8451;',
            attributes: [
              {
                name: 'type',
                value: 'button',
              }
            ],
          },
          {
            tag: 'button',
            classList: ['toggle-degree-btn'],
            content: '&#8457;',
            attributes: [
              {
                name: 'type',
                value: 'button',
              }
            ],
          },
        ], 
      }
    ];
  }
}
