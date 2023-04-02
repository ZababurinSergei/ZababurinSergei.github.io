import { template } from './template/index.mjs'
import styleLight from './template/css/default/index.light.css' assert { type: 'css' };
import styleShadow from './template/css/default/index.shadow.css' assert { type: 'css' };
import modules from './modules/index.mjs'
import { normalizePathName } from '../api-substrate/external/index.mjs'
import path from './modules/path/index.mjs'

const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()

const init = (self) => {
  return new Promise(async (resolve, reject) => {
    document.adoptedStyleSheets = [styleLight];
    let shadowDom = []
    let html = undefined
    const isTemplate = self.dataset.template !== undefined

    for (let i = 0; i < self.children.length; ++i) {
      let isShadowDom = !self.children[i].tagName.includes('-')
      isShadowDom = self.dataset.swap !== undefined ? !isShadowDom: isShadowDom

      if(self.children[i].dataset.exclusion !== undefined) {
        isShadowDom = !isShadowDom
      }

      shadowDom.push({
        is: isShadowDom,
        self: self.children[i]
      })
    }

    for(let i = 0; i < shadowDom.length; ++i) {
      if(shadowDom[i].is) {
        if(!self.shadowRoot) {
          self.attachShadow({mode: 'open'})
        }
        self.shadowRoot.adoptedStyleSheets = [styleShadow];
        self.shadowRoot.appendChild(shadowDom[i].self)
      } else {
        self.appendChild(shadowDom[i].self)
      }
    }

    if(isTemplate) {
      html = template.has(self.slot) 
      ? await template.get(self.slot)[0].template(self.slot)
      : await template.get('default')[0].template(self.slot)  
   
      self.innerHTML = ''
      self.insertAdjacentHTML('afterbegin', html)
    }

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
    let pathname = normalizePathName(window.location.pathname)
    console.log(`     🟣 component: ${this.tagName} connectedCallback`)
    const self = this
    let timerId = setTimeout(function tick() {
      if(self.onload){
        clearTimeout(timerId);
        modules(self.slot, self).catch(error => console.warn('error', error))
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
