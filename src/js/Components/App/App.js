import Component from '../../framework/Component';
import {Temperature} from "../Temperature";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

    render () {
      // const t1 = document.createElement('div');
      // new Temperature(t1, {temperature: 7, unit: 'C'});
      
      return [ 
        // 'Temperature', 
        {
          tag: Temperature,
          props: {
            temperature: 7,
            unit: 'C',
          },
        },

        
      ];

    }
}
