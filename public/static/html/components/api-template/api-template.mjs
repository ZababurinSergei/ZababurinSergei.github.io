import modules from '/static/html/components/api-template/modules/index.mjs'
import task from '/static/html/components/component_modules/heap/index.mjs'
import { normalizePathName } from '../api-substrate/external/index.mjs'
import template from '/static/html/components/api-template/template/html/index.mjs'

const component = (self) => {
  return new Promise(async (resolve, reject) => {
    const style = document.createElement('style')
    style.innerText = `@import "/static/html/components/api-template/template/css/default/index.css";`
    let pathname = await normalizePathName(window.location.pathname);
    // if(property_relation.has(pathname)) {
    //   template = property_relation.get(pathname).template()
    // } else {
    //   template = property_relation.get('default').template()
    // }
    // self.insertAdjacentHTML('afterbegin', `<slot name={'markdown__self_menu'}></slot>`)
    self.appendChild(style)
    // self.api = await events(self)
    resolve(self)
  })
}

const index =  class extends HTMLElement {
  constructor () {
    super()
    component(this)
      .then(self => modules(self))
      .catch(error => {
        console.warn('error', error)
      })
  }

  connectedCallback() {
    let pathname = normalizePathName(window.location.pathname)
    console.log('     🟣 COMPONENTS API_TEMPLATE connectedCallback', pathname)
  }

  disconnectedCallback() {
    console.log('     🔴 COMPONENTS API_TEMPLATE disconnected')
  }
}

try {
  customElements.define('api-template', index );
} catch (e) {
  console.error('error',e)
}

export default index
