import {html} from './template/index.mjs'
import styleLight from './template/css/index.light.css' assert {type: 'css'};
import styleShadow from './template/css/index.shadow.css' assert {type: 'css'};
import {activeClass, normalizePathName} from '../api-substrate/external/index.mjs'
import path from './modules/path/index.mjs'
import task from '/static/html/components/component_modules/heap/index.mjs'
import topology from '/static/html/components/api-button/events/actions/html.topology.mjs'
import eventsTask from './events/index.mjs'

const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()
const init = (self) => {
    return new Promise(async (resolve, reject) => {
        document.adoptedStyleSheets = [styleLight];
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

    isOnload = false;

    constructor() {
        super()
        init(this).then(self => (self.isOnload = true, eventsTask(self.shadowRoot))).catch(error => console.warn('error', error))
    }

    customEvents = (event) => {
        if (`${this.dataset.type}_${this.dataset.role}_${this.dataset.key}` !== event.detail && this.shadowRoot.querySelector('p').classList.contains(activeClass)) {
            this.disabled = false
            this.shadowRoot.querySelector('p').classList.remove(activeClass)
        }
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
        if (this.disabled) {
            return;
        }

        // if()
        // topology()

        const item = events.currentTarget
        const element = item.getRootNode().host

        item.classList.add(activeClass)

        console.log(`  🥎 EVENT ${element.dataset.event} BUTTON ${this.dataset.type} PUSH`, {
            ...element.dataset,
            pathname: window.location.pathname,
            hash: window.location.hash
        })

        if (element.dataset.role === 'aside') {
            window.document.dispatchEvent(new CustomEvent(`${element.dataset.type}_${element.dataset.role}`, {
                detail: `${element.dataset.type}_${element.dataset.role}_${element.dataset.key}`
            }))
        } else {
            let url = new URL(window.location.href)
            url.searchParams.set(`${element.dataset.role}_id`, element.dataset.key);
            window.history.pushState({}, element.dataset.event, `${url}`);
        }


        task.set(true, '', 'red', {
            events: [{
                ...element.dataset,
                pathname: normalizePathName(window.location.pathname),
                hash: window.location.hash
            }]
        }, element.dataset.event)
            .catch(e => {
                console.log('error devtool', e)
            })

        // const timeId = setTimeout(() => {
        // clearTimeout(timeId)
        // this.disabled = false
        // }, setTime)
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
                self.shadowRoot.querySelector('p').addEventListener('click', self.push)
                window.addEventListener('popstate', self.events);
                if (self.dataset.role === 'aside') {
                    window.document.addEventListener(`${self.dataset.type}_${self.dataset.role}`, self.customEvents);
                }
            })
            .catch(e => console.error('error', e))
    }

    disconnectedCallback() {
        console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
        task.close(true, 'API-BUTTON', 'red', 'API-BUTTON', 'API-BUTTON')
        this.shadowRoot.querySelector('p').removeEventListener('click', this.push)
        console.log('-----------------------', `${this.dataset.type}_${this.dataset.role}`)
        window.document.removeEventListener(`${this.dataset.type}_${this.dataset.role}`, this.customEvents);
        window.removeEventListener('popstate', this.events);
    }
}

try {
    customElements.define(COMPONENT, index);
} catch (e) {
    console.error('error', e)
}

export default index
