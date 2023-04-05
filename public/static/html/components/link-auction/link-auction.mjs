import {html} from './template/index.mjs'
import styleLight from './template/css/index.light.css' assert {type: 'css'};
import styleShadow from './template/css/index.shadow.css' assert {type: 'css'};
import {activeClass, normalizePathName} from '../api-substrate/external/index.mjs'
import path from './modules/path/index.mjs'

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
            isShadowDom = self.dataset.swap !== undefined ? !isShadowDom : isShadowDom
            shadowDom.push({
                is: isShadowDom,
                self: self.children[i]
            })
        }

        if (isTemplate) {
            template = html.has(self.slot)
                ? await html.get(self.slot)[0].template(self.slot)
                : await html.get('default')[0].template(self.slot)

            self.innerHTML = ''
            self.insertAdjacentHTML('afterbegin', template)
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

        resolve(self)
    })
}

const index = class extends HTMLElement {
    isOnload = false;

    constructor() {
        super()
        init(this).then(self => self.isOnload = true).catch(error => console.warn('error', error))
    }

    events = (event) => {
        if (event.detail) {
            const url = this.getAttribute('to')

            if (url !== event.detail.pathname) {
                this.shadowRoot.querySelector('p').classList.remove(activeClass)
            }
        }
    }

    push = (events) => {
        const item = events.currentTarget
        const state = {}
        const title = ''
        const url = item.getRootNode().host.getAttribute('to')
        item.classList.add(activeClass)
        let req = new URL(window.location.href)
        req.pathname = url

        window.history.pushState(state, title, req.href);

        window.dispatchEvent(new CustomEvent('popstate', {
            bubbles: true,
            composed: true,
            detail: {
                pathname: url
            }
        }));
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
            .then((self) => {
                let pathname = normalizePathName(window.location.pathname)
                const link = self.shadowRoot.querySelector('p')

                if (pathname === normalizePathName(self.getAttribute('to'))) {
                    link.classList.add(activeClass)
                }

                link.addEventListener('click', self.push)
                window.addEventListener('popstate', self.events);
            })
            .catch(e => console.error('error', e))
    }

    disconnectedCallback() {
        window.removeEventListener('popstate', this.events);
        this.shadowRoot.querySelector('p').removeEventListener('click', this.push)
        console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
    }
}

try {
    customElements.define(COMPONENT, index);
} catch (e) {
    console.error('error', e)
}

export default index
