import init from '../../_this/init/index.mjs'
import onload from '../../_this/onload/index.mjs'
import addEventListener from './controller/addEventListener/index.mjs'
import actions from './actions/index.mjs'

// const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()
const COMPONENT = 'fer-region'
const INDEX =  class extends HTMLElement {
  _doRender() {
    if(this._state.tree) {
      console.log('🥎 RENDER 🥎')
    }
  }
  getState(path) {
    return this._state[path];
  }
  setState(path, value) {
    if (this._state[path] !== value) {
      this._state[path] = value;
      this._doRender();
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
  constructor () {
    super()
    this.controller = {};
    this._isOnload = false;
    this._state = { };
    this._doRender = this._doRender.bind(this);
    init(this).then(self => (self._isOnload = true)).catch(error => console.warn('error', error))
  }

  connectedCallback() {
    onload(this)
      .then(async (self) => {
        self.controller.addEventListener = await addEventListener(self, await actions(self))
        self.controller.addEventListener.init()
      })
      .catch(e => console.error('error', e))
  }
  disconnectedCallback() {
    this.controller.addEventListener.terminate()
    console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
  }
}

try {
  customElements.define( COMPONENT, INDEX );
} catch (e) {
  console.error('error',e)
}
export default {
  component: COMPONENT,
  description: `Компонент ${COMPONENT}`,
}
