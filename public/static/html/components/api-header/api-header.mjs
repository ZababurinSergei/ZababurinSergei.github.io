import modules from '/static/html/components/api-header/modules/index.mjs'
import styleLight from './template/css/index.light.css' assert {type: 'css'};
import styleShadow from './template/css/index.shadow.css' assert {type: 'css'};
import {normalizePathName} from '../api-substrate/external/index.mjs'
import {html} from './template/index.mjs'
import path from './modules/path/index.mjs'

const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()
const init = (self) => {
    return new Promise(async (resolve, reject) => {
        document.adoptedStyleSheets = [styleLight];
        let pathname = await normalizePathName(window.location.pathname);
        let shadowDom = []
        let template = undefined
        const isTemplate = self.dataset.template !== undefined

        if (isTemplate) {
            template = html.has(self.slot)
                ? await html.get(self.slot)[0].template(self.slot)
                : await html.get('default')[0].template(self.slot)

            self.innerHTML = ''
            self.insertAdjacentHTML('afterbegin', template)
        } else {
            for (let i = 0; i < self.children.length; ++i) {
                let isShadowDom = !self.children[i].tagName.includes('-')
                isShadowDom = self.dataset.swap !== undefined ? !isShadowDom : isShadowDom
                shadowDom.push({
                    is: isShadowDom,
                    self: self.children[i]
                })
            }

            for (let i = 0; i < shadowDom.length; ++i) {
                if (shadowDom[i].is) {
                    if (!self.shadowRoot) {
                        self.attachShadow({mode: 'open'})
                    }
                    self.shadowRoot.adoptedStyleSheets = [styleShadow];
                    self.shadowRoot.appendChild(shadowDom[i].self)
                } else {
                    self.appendChild(shadowDom[i].self)
                }
            }
        }

        resolve(self)
    })
}

const index = class extends HTMLElement {
    isOnload = false;

    constructor() {
        super()
        init(this).then(self => self.isOnload = true).catch(error => console.warn('error', error))
    }

    onload = (self) => {
        return new Promise((resolve, reject) => {
            let timerId = setTimeout(function tick() {
                if (self.isOnload) {
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
                // modules(self.slot, self).catch(error => console.warn('error', error))
            })
            .catch(e => console.error('error', e))
    }

    disconnectedCallback() {
        console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
    }
}

try {
    customElements.define(COMPONENT, index);
} catch (e) {
    console.error('error', e)
}

export default index
