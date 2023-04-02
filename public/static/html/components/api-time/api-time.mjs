import modules from '/static/html/components/api-footer/modules/index.mjs'
import styleLight from './template/css/default/index.light.css' assert {type: 'css'};
import styleShadow from './template/css/default/index.shadow.css' assert {type: 'css'};
import {template} from '/static/html/components/api-footer/template/index.mjs'
import {normalizePathName} from '../api-substrate/external/index.mjs'
import path from './modules/path/index.mjs'
import events from "../api-processor/events/index.mjs";
import MD from "../api-processor/modules/md/index.mjs";
import JQ from "../api-processor/modules/jq/index.mjs";

const COMPONENT = path.dirname(import.meta.url).split(path.sep).pop()

const timer = {
    timeID: undefined,
    init: (container) => {
        let countDownDate = Date.now();

        timer.timeID = setInterval(function () {
            let now = Date.now();
            let distance = now - countDownDate;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const timer = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            container.innerHTML = ''
            container.insertAdjacentHTML('afterbegin',
                `<div>
              ${timer}
            </div>`)

            if (distance < 0) {
                clearInterval(x);
                container.innerHTML = "EXPIRED";
            }
        }, 1000);
    },
    terminate: () => {
        return clearInterval(timer.timeID)
    }
}


const init = (self) => {
    return new Promise(async (resolve, reject) => {
        document.adoptedStyleSheets = [styleLight];
        let pathname = await normalizePathName(window.location.pathname);
        let shadowDom = []
        let html = undefined
        const isTemplate = self.dataset.template !== undefined

        for (let i = 0; i < self.children.length; ++i) {
            let isShadowDom = self.children[i].tagName !== 'SECTION'
            isShadowDom = self.dataset.swap !== undefined ? !isShadowDom : isShadowDom
            shadowDom.push({
                is: isShadowDom,
                self: self.children[i]
            })
        }

        if (isTemplate) {
            html = template.has(pathname)
                ? await template.get(pathname)[0].template(self.slot, self)
                : await template.get('default')[0].template(self.slot)
        }


        for (let i = 0; i < shadowDom.length; ++i) {
            if (shadowDom[i].is) {
                if (!self.shadowRoot) {
                    self.attachShadow({mode: 'open'})
                }
                self.shadowRoot.adoptedStyleSheets = [styleShadow];
                self.shadowRoot.appendChild(shadowDom[i].self)
            } else {
                if (isTemplate) {
                    self.innerHTML = ''
                    self.insertAdjacentHTML('afterbegin', html)
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
                timer.init(self.querySelector('section'))
            })
            .catch(e => console.error('error', e))
    }

    disconnectedCallback() {
        timer.terminate()
        console.log(`     🔴 COMPONENTS ${this.tagName} disconnected`)
    }
}

try {
    customElements.define(COMPONENT, index);
} catch (e) {
    console.error('error', e)
}

export default index
