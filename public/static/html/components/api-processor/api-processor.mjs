import styleLight from './template/css/index.light.css' assert { type: 'css' };
import styleShadow from './template/css/index.shadow.css' assert { type: 'css' };
import { activeClass, normalizePathName } from '../api-substrate/external/index.mjs'
import events from './events/index.mjs'
import path from './modules/path/index.mjs'
// import {template} from "../api-footer/template/index.mjs";

const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()
const init = (self) => {
  return new Promise(async (resolve, reject) => {
    let styles = document.createElement('style')
    styles.textContent = `@import "/static/html/components/api-processor/template/css/index.light.css"`

    // self.adoptedStyleSheets = [styleLight];
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

    self.appendChild(styles)
    resolve(self)
  })
}

const index =  class extends HTMLElement {
  set open(val) {
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
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

  isOnload = false;
  system = undefined;

  constructor () {
    super()
    init(this).then(self => (self.isOnload = true)).catch(error => console.warn('error', error))
  }

  popstate = (event) => {
    let soltNames = ['header_base', 'TabAccounts', 'TabSend', 'TabDapps', 'TabSharding', 'TabSharding', 'TabExplorer']

    if(event.detail && event.detail.pathname) {
      const slots = this.shadowRoot.querySelectorAll('slot');
      switch(event.detail.pathname) {
        case "/":
          for(let i = 0; i < slots.length; ++i) {
            slots[i].name = i === 0 ? 'api-main': ''
          }
          break
        case "/jira":
          for(let i = 0; i < slots.length; ++i) {
            slots[i].name = i === 0 ? 'api-jira': ''
          }
          break
        case "/contributing":
          for(let i = 0; i < slots.length; ++i) {
            slots[i].name = i === 0 ? 'api-contributing': ''
          }
          break
        case "/json":
          for(let i = 0; i < slots.length; ++i) {
            slots[i].name = i === 0 ? 'api-json': ''
            let dom = slots[i].assignedNodes()
            // console.log('ssssssssssssss', this.system)
            this.system.updateUI()
            // if(dom) {
              // for(let i = 0; i < dom.length; ++i) {

                // if(dom[i].classList.contains('markdown__jasonelle')) {
                //   dom[i].querySelector('.CodeMirror').focus()
                //   const CodeMirror = dom[i].querySelector('.CodeMirror')
                //   CodeMirror.querySelector('textarea').focus();
                //   console.log('dddddddddddddddddddddddddddddddddddddddddd', CodeMirror.querySelector('textarea'))
                //   dom[i].focus()
                // }
              // }
            // }
            // this.system.updateUI(event, 'codeMirror')
          }
          break
        default:
          for(let i = 0; i < slots.length; ++i) {
            slots[i].name = soltNames[i]
          }
          break
      }
      // console.log('LOCATION API-MAIN', this.querySelector('slot'), event.detail.pathname)
    }
  }
  onload = (self) => {
    return new Promise((resolve, reject) => {
      let timerId = setTimeout(function tick() {
        if(self.isOnload) {
          clearTimeout(timerId);
          console.log(`     🟣 component: ${self.tagName} connectedCallback`)
          resolve(self)
        } else {
          timerId = setTimeout(tick, 15);
        }
      }, 50);
    })
  }
  connectedCallback() {
    this.onload(this)
      .then(async (self) => {
        let component = self.shadowRoot === null
            ? self
            : self.shadowRoot

        const slot = this.shadowRoot.querySelector('slot');
        const pathname = window.location.pathname
        if(pathname.startsWith('/json')) {
          slot.name = 'api-json'
        } else if(pathname.startsWith('/json')) {
          slot.name = 'api-main'
        } else {
          console.warn('не обрабатывается путь', window.location.pathname)
        }


        window.addEventListener('popstate', self.popstate);

        self.system = await events(self)

        self.querySelector('.markdown__string_menu_json_html_run').addEventListener("click", self.system.jqRun);
        self.querySelector('.markdown__jasonelle_android_run').addEventListener("click", self.system.jqRun);
        self.querySelector('.markdown__string_menu_change_views').addEventListener("change", self.system.checkbox);
        component.querySelector('.markdown__button_views').addEventListener("change", self.system.checkbox);
        component.querySelector('.markdown__button_update').addEventListener("click", self.system.update);
        component.querySelector('.markdown__button_query').addEventListener("click", self.system.query);
        component.querySelector('.markdown__button_download').addEventListener("click", self.system.download);
        component.querySelector('.markdown__button_upload').addEventListener("change", self.system.upload);
        component.querySelector('.markdown__button_select').addEventListener("change", self.system.selected);
      })
      .catch(e => console.error('error', e))
  }
  disconnectedCallback() {
    let component = this.shadowRoot === null
        ? this
        : this.shadowRoot

    this.querySelector('.markdown__string_menu_json_html_run').removeEventListener("click", this.system.jqRun);
    this.querySelector('.markdown__jasonelle_android_run').removeEventListener("click", this.system.jqRun);
    component.querySelector('.markdown__button_views').removeEventListener("change", this.system.checkbox);
    component.querySelector('.markdown__string_menu_change_views').removeEventListener("change", this.system.checkbox);
    component.querySelector('.markdown__button_update').removeEventListener("click", this.system.update);
    component.querySelector('.markdown__button_query').removeEventListener("click", this.system.query);
    component.querySelector('.markdown__button_download').removeEventListener("click", this.system.download);
    component.querySelector('.markdown__button_upload').removeEventListener("change", this.system.upload);
    component.querySelector('.markdown__button_select').removeEventListener("change", this.system.selected);
    console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
  }
}

try {
  customElements.define(COMPONENT, index );
} catch (e) {
  console.error('error',e)
}
export default index
