export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this._render();
  }

  _render() {
    this.host.innerHTML = '';
    let content = this.render();

    if (typeof content === 'string') {
      this.host.innerHTML = content;
    } else {
      content.map(item => {
        if(typeof item === 'string') {
          const htmlElement = document.createElement('div');
          htmlElement.innerHTML = item;
          return htmlElement;
        } else {
          if(typeof item.tag === 'function') {
            const container = document.createElement('div');
            console.log(container, item.props);
            new item.tag(container, item.props);
            return container;
          } 
          return item;
        }
      })
      .forEach(item => {
        this.host.append(item);
      });
    }
    
    
  }

  render() {
    return 'I am empty';
  }
}