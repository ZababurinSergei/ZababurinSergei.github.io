import { template } from './template/index.mjs'
import style from './template/css/default/index.css' assert { type: 'css' };
import modules from './modules/index.mjs'
import { normalizePathName } from '../api-substrate/external/index.mjs'
import path from './modules/path/index.mjs'

const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()

const init = (self) => {
  return new Promise(async (resolve, reject) => {
    let pathname = await normalizePathName(window.location.pathname);
    
    const html = await template.has(pathname) 
            ? await template.get(pathname)[0].template(self.slot, self)
            : await template.get('default')[0].template(self.slot)

    document.adoptedStyleSheets = [style];
    self.innerHTML = ''
    self.insertAdjacentHTML('afterbegin', html)
    resolve(self)
  })
}

const index =  class extends HTMLElement {
  onload = false;

  constructor () {
    super()
    init(this).then(self => self.onload = true).catch(error => console.warn('error', error))
  }

  connectedCallback() {
    console.log(`     🟣 COMPONENTS ${this.tagName} connectedCallback`)
    let pathname = normalizePathName(window.location.pathname)
    const self = this
    let timerId = setTimeout(function tick() {
      if(self.onload){
        clearTimeout(timerId);
        modules(self).catch(error => console.warn('error', error))
      } else {
          timerId = setTimeout(tick, 15);
      }
    }, 50);
  }

  disconnectedCallback() {
    console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
  }
}

try {
  customElements.define(COMPONENT, index );
} catch (e) {
  console.error('error',e)
}

export default index
