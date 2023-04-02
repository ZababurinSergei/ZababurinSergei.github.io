import { html } from './template/index.mjs'
import styleLight from './template/css/index.light.css' assert { type: 'css' };
import styleShadow from './template/css/index.shadow.css' assert { type: 'css' };
import { activeClass, normalizePathName } from '../api-substrate/external/index.mjs'
import path from './modules/path/index.mjs'
import task from '/static/html/components/component_modules/heap/index.mjs'
import events from './events/index.mjs'
import api from '/modules/api/index.mjs'

const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()

const init = (self) => {
  return new Promise(async (resolve, reject) => {
    document.adoptedStyleSheets = [styleLight];
    let pathname = await normalizePathName(window.location.pathname);
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
  // A getter/setter for an open property.
  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  // A getter/setter for a disabled property.
  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    // Reflect the value of the disabled property as an HTML attribute.
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  onload = false;
  isTimeout = false;

  constructor () {
    super()
    init(this).then(self => (self.onload = true, events(self.shadowRoot))).catch(error => console.warn('error', error))
  }

  push = (events) => {
    if (this.disabled) {
      return;
    }
  }


  connectedCallback() {
    let pathname = normalizePathName(window.location.pathname)
    const self = this
    let timerId = setTimeout(function tick() {
      if(self.onload) {
        clearTimeout(timerId);
        api.post("/project")
          .then((data) => {
            console.log('JIRA PROJECT',data);
          });
        console.log(`     🟣 component: ${self.tagName} slot: ${self.slot}`, self)
        window.addEventListener('popstate', self.events);
      } else {
          timerId = setTimeout(tick, 15);
      }
    }, 50);
  }

  disconnectedCallback() {
    console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
    task.close(true,'API-BUTTON','red','API-BUTTON','API-BUTTON')
    window.removeEventListener('popstate', this.events);
  }
}

try {
  customElements.define(COMPONENT, index );
} catch (e) {
  console.error('error',e)
}

export default index
