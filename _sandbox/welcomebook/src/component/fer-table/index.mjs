import { init, onload } from '../../this/init/index.mjs'
import addEventListener from './controller/addEventListener/index.mjs'
import actions from './actions/index.mjs'
import template from './views/index.mjs'

// const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()
const COMPONENT = 'fer-table'
const INDEX =  class extends HTMLElement {
  _doRender() {
    if(this._state.tree) {
      console.log('     🔵 RENDER')
    }
  }

  getState(path) {
    return this._state[path];
  }

  setState(path, value) {
    if(!this._state.hasOwnProperty(path)) {
      alert(`надо определить свойство ${path} в стейте`)
      console.assert(false, `надо определить свойство ${path} в стейте`, {
        state: this._state
      })
      
    } else {
      if (this._state[path] !== value) {
        this._state[path] = value;
        this._doRender();
      }
    }
  }

  set open(val) {
    if (val) {
      this.setAttribute('open', '');
      this.classList.add('skeleton')
    } else {
      this.removeAttribute('open');
      this.classList.remove('skeleton')
    }
  }

  get open() {
    return this.hasAttribute('open');
  }

  set disabled(val) {
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }
  tableVisual = (even, odd) => {
    const items = this.shadowRoot.querySelectorAll('.auction-data__table_body_tr')
    for(let i = 0 ; i < items.length; i++ ) {
      if(i % 2) {
        for(let item of items[i].querySelectorAll('.auction-data__table_body_td')) {
          item.style.background = even
        }
      } else {
        for(let item of items[i].querySelectorAll('.auction-data__table_body_td')) {
          item.style.background = odd
        }
      }
    }
  }
  router = () => {
    this.tableVisual('white', '#859d85')
    switch (location.pathname) {
      case '/even':
        // this.tableVisual('#859d85', 'white')
        break
      case '/odd':
        // this.tableVisual('white', '#859d85')
        break
      case '/':
        // this.tableVisual('white', 'white')
        break
      default:
        // console.log('default router', location.pathname)
        break
    }
  }
  constructor () {
    super()
    this.controller = {}
    this._isOnload = false;
    this._state = { };
    this._doRender = this._doRender.bind(this);
    init(this).then(self => (self._isOnload = true)).catch(error => console.warn('error', error))
  }
  connectedCallback() {
    onload(this)
        .then(async (self) => {
          let body = self.shadowRoot.querySelector('.auction-data__table_body')
          self.shadowRoot.querySelector('.auction-data__header_date').textContent = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
          // console.log('ddddddddddddddddddddd', )
          body.insertAdjacentHTML('afterbegin', template.html.get("default")[0].template({
            assetId: '234323werw',
            timestamp: 'timestamp',
            description: 'description',
            name: 'name',
            proofs: 'proofs',
            sender: 'sender'
          }))

          body.insertAdjacentHTML('afterbegin', template.html.get("default")[0].template({
            assetId: '234323werw',
            timestamp: 'timestamp',
            description: 'description',
            name: 'name',
            proofs: 'proofs',
            sender: 'sender'
          }))

          body.insertAdjacentHTML('afterbegin', template.html.get("default")[0].template({
            assetId: '234323werw',
            timestamp: 'timestamp',
            description: 'description',
            name: 'name',
            proofs: 'proofs',
            sender: 'sender'
          }))

          body.insertAdjacentHTML('afterbegin', template.html.get("default")[0].template({
            assetId: '234323werw',
            timestamp: 'timestamp',
            description: 'description',
            name: 'name',
            proofs: 'proofs',
            sender: 'sender'
          }))

          this.router()
        })
        .catch(e => console.error('error', e))
  }
  disconnectedCallback() {
    // this.controller.addEventListener.terminate()
    console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    window.addEventListener("popstate", this.router);
    this.router()
  }
}

if(customElements.get(COMPONENT) === undefined) { customElements.define(COMPONENT, INDEX ) };
export default {
  component: COMPONENT,
  description: 'Шаблон компонента в котором сделанно подключение css темплейта'
}

