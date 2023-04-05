import { html } from './template/index.mjs'
import styleLight from './template/css/index.light.css' assert { type: 'css' };
import styleShadow from './template/css/index.shadow.css' assert { type: 'css' };
import api from './api/index.mjs'
import * as md2html from  './modules/wasm/markdown.es.mjs'
import path from '../../../../modules/path/index.mjs'
import {loadHTML} from './template/html/index.mjs'

const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()

const init = (self) => {
  return new Promise(async (resolve, reject) => {
    await md2html.ready
    const MD = await loadHTML('/CONTRIBUTING.md', import.meta.url)
    const html = await md2html.parse(MD)
    // console.log('sssssssssssssssssssssssssss', html)
    self.insertAdjacentHTML('afterbegin', html)
    document.adoptedStyleSheets = [styleLight];
    let shadowDom = []
    let template = undefined
    const isTemplate = self.dataset.template !== undefined

    for (let i = 0; i < self.children.length; ++i) { 
      let isShadowDom = !self.children[i].tagName.includes('-')
      isShadowDom = self.dataset.swap !== undefined ? !isShadowDom: isShadowDom
      shadowDom.push({
        is: isShadowDom,
        self: self.children[i]
      })
    }

    if(isTemplate) {
      template = html.has(self.slot) 
      ? await html.get(self.slot)[0].template(self.slot)
      : await html.get('default')[0].template(self.slot)  
   
      self.innerHTML = ''
      self.insertAdjacentHTML('afterbegin', template)
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
      
    resolve(self)
  })
}

const index =  class extends HTMLElement {
  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
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

  onload = false;

  constructor () {
    super()
    init(this).then(self => (self.onload = true)).catch(error => console.warn('error', error))
  }

  markdownToHTML(markdown) {
    // system.worker_main["output"]  = [];
    // window.zb.fs[`${system.worker_main['fs.path']}`].writeFile('/body/data.md',markdown)
    // system.worker_main["output"] = md2html.parse(markdown)
    return '';
  }

  connectedCallback() {
    // let pathname = normalizePathName(window.location.pathname)
    // const self = this
    let timerId = setTimeout(function tick() {
      if(self.onload) {
        clearTimeout(timerId);
        console.log(`     🟣 component: ${self.tagName} slot: ${self.slot}`, self)
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
  customElements.define(COMPONENT, index);
} catch (e) {
  console.error('error',e)
}

export default index
