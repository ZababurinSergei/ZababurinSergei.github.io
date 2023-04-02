//https://itnext.io/adding-state-to-custom-html-elements-639961c7c529
import init from '../../_this/init/index.mjs'
import onload from '../../_this/onload/index.mjs'
import TreeView from './views/mjs/treeView/index.mjs'
import { unflatten } from './views/mjs/treeView/utils/index.mjs'

// const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()
const COMPONENT = 'fer-tree'
const INDEX =  class extends HTMLElement {
  _doRender() {
    if(this._state.tree) {
      //todo надо убрать преобразование и вставить его в само рендер дерева через конфиг что бы моно было переключать
      this._state.module.expandedArray = this._state.expandedArray ? this._state.expandedArray : [1]
      this._state.module.data = unflatten(this._state.tree).children
      this._state.module.render()
    }
  }
  getState(path) {
    return this._state[path];
  }
  setState(path, value) {
    if(!this._state.hasOwnProperty(path)) {
      console.assert(false, `надо определить свойство ${path} в стейте`, {
        state: this._state
      })
      debugger
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
  constructor () {
    super()
    this._isOnload = false;
    this._state = {
      expandedArray: [],
      module: undefined,
      tree: undefined
    };
    this._doRender = this._doRender.bind(this);
    init(this).then(self => (self._isOnload = true)).catch(error => console.warn('error', error))
  }

  connectedCallback() {
    onload(this)
      .then(async (self) => {
        console.log(`     🟡 COMPONENTS ${this.tagName} connected`)

        self.setState('module', new TreeView({
          name: '',
          children: []
        }, self.shadowRoot.querySelector('#tree')))

        // expandAll.onclick = function () {
        //     tree.expandAll();
        // };

        // collapseAll.onclick = function () {
        //     tree.collapseAll();
        // };

        this._state.module.on('select', function (event) {
            console.log('========== select ==========', event.data)
        });

        this._state.module.on('expand', function () {

        });

        this._state.module.on('expandAll', function () {

        });

        this._state.module.on('collapse', function () {

        });

        this._state.module.on('collapseAll', function () {

        });
      })
      .catch(e => console.error('error', e))
  }
  disconnectedCallback() {
    // this.eventListener.terminate()
    console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
  }
}

try {
  customElements.define( COMPONENT, INDEX );
} catch (e) {
  console.error('error',e)
}
export default {
  component: 'fer-tree',
  api: '',
  description: 'Компонент для отображения данных в виде дерева'
}
