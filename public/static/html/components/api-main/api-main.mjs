import {html} from './template/index.mjs'
import styleLight from './template/css/index.light.css' assert {type: 'css'};
import styleShadow from './template/css/index.shadow.css' assert {type: 'css'};
import {activeClass, normalizePathName} from '../api-substrate/external/index.mjs'
import path from './modules/path/index.mjs'
import router from './router/index.mjs'
import task from '/static/html/components/component_modules/heap/index.mjs'
import React from '/index.mjs'

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
        init(this).then(self => (self.isOnload = true, router(self))).catch(error => console.warn('error', error))
    }

    popstate = (event) => {
        let soltNames = ['header_base', 'TabAccounts', 'TabSend', 'TabDapps', 'TabSharding', 'TabSharding', 'TabExplorer']

        if (event.detail && event.detail.pathname) {
            const slots = this.querySelectorAll('slot');

            switch (event.detail.pathname) {
                case "/":
                    for (let i = 0; i < slots.length; ++i) {
                        slots[i].name = i === 0 ? 'api-processor' : ''
                    }
                    break
                case "/jira":
                    for (let i = 0; i < slots.length; ++i) {
                        slots[i].name = i === 0 ? 'api-jira' : ''
                    }
                    break
                case "/contributing":
                    for (let i = 0; i < slots.length; ++i) {
                        slots[i].name = i === 0 ? 'api-contributing' : ''
                    }
                    break
                case "/json":
                    for (let i = 0; i < slots.length; ++i) {
                        slots[i].name = i === 0 ? 'api-processor' : ''
                    }
                    break
                default:
                    for (let i = 0; i < slots.length; ++i) {
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

                let Context = {
                    test: (setName) => {

                        setName('ShadowRoot from html')
                    }
                }


                console.log('============ React =============>>>', await React(self, Context))

                window.addEventListener('popstate', self.popstate);
                let div_dialog = document.createElement('div')
                let slot_dialog = document.createElement('slot')

                let slot_header = document.createElement('slot')
                let slot_TabAccounts = document.createElement('slot')
                let slot_TabSend = document.createElement('slot')

                let slot_TabDapps = document.createElement('slot')
                let slot_TabSharding = document.createElement('slot')
                let slot_TabExplorer = document.createElement('slot')
                let slot_api_processor = document.createElement('slot')
                slot_api_processor.name = 'api-processor'
                div_dialog.slot = 'dialog'
                slot_dialog.name = 'dialog'
                if (window.location.pathname.startsWith('/node')) {
                    slot_header.name = 'header_base'
                    slot_TabAccounts.name = 'TabAccounts'
                    slot_TabSend.name = 'TabSend'

                    slot_TabDapps.name = 'TabDapps'
                    slot_TabSharding.name = 'TabSharding'
                    slot_TabExplorer.name = 'TabExplorer'
                } else if (window.location.pathname.startsWith('/jira')) {
                    slot_header.name = 'api-jira'
                } else if (window.location.pathname.startsWith('/contributing')) {
                    slot_header.name = 'api-contributing'
                } else if (window.location.pathname.startsWith('/json')) {
                    slot_header.name = 'api-json'
                } else {
                    console.warn('необрабатываемый путь', window.location.pathname)
                }


                self.appendChild(div_dialog)
                div_dialog.appendChild(slot_dialog)

                self.appendChild(slot_api_processor)
                self.appendChild(slot_header)
                self.appendChild(slot_TabAccounts)
                self.appendChild(slot_TabSend)

                self.appendChild(slot_TabDapps)
                self.appendChild(slot_TabSharding)
                self.appendChild(slot_TabExplorer)

                // console.log(`     🟣 component: ${self.tagName} connectedCallback`)
                // self.shadowRoot.querySelector('p').addEventListener('click', self.push)

                // window.addEventListener('popstate', self.events);
            }).catch(e => console.error('error', e))

        // let pathname = normalizePathName(window.location.pathname)
        // switch (pathname) {
        // case '/dex/':
        // this.isDex = true
        // this.api = this.api.then(api => api.dex(this)).catch(e => console.error('api-main', e))
        // break
        // case '/docs/':
        // this.isDex = true
        // this.api = this.api.then(api => api.dex(this)).catch(e => console.error('api-main', e))
        // break
        // default:
        // break
        // }

        // console.log('     🟣 COMPONENTS API_MAIN connectedCallback')
        // for(let item of taskProperty.events) {
        // if(item[`${this.tagName}_SET`]) {
        // const events = item[`${this.tagName}_SET`]
        // for(let tasks of events) {
        // for(let lvalue in tasks) {
        // console.log(`${this.tagName}_SET 🟣 TASK SET`,lvalue,'from', tasks[lvalue], this)
        // task.set(true, 'T','red', {
        // lvalue: lvalue,
        // rvalue: tasks[lvalue]
        // }, lvalue).catch(e => console.error('api-dex',e));
        // }
        // }
        // } else {
        // console.log('🥊не найденны таски для', `${this.tagName}_SET`, this)
        // }
        // }
        // task.set(true, 'T','red', { }, taskProperty.events.update['lib-markdown']).catch(e => console.error('api-dex',e));
    }

    disconnectedCallback() {
        // if(this.isDex) {
        // this.api.then(api => api.terminate()).catch(e => console.error('api-main', e))
        // }
        window.removeEventListener('popstate', this.popstate);
        console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
    }
}

try {
    customElements.define(COMPONENT, index);
} catch (e) {
    console.error('error', e)
}

export default index
