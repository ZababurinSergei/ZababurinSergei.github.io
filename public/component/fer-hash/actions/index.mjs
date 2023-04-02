import { activeClass } from '../../../_this/index.mjs'
export default (self) => {
    return new Promise(async (resolve, reject) => {

        resolve({
            click: (events) => {
                if (self.disabled) {
                    return;
                }

                if(!self.dataset.hash) {
                    console.error('Требуется указать в атрибутах компонента data-hash', self)
                    return;
                }

                if(!self.dataset.type) {
                    console.error('Требуется указать в атрибутах компонента data-type', self)
                    return;
                }

                self.disabled = true
                self.shadowRoot.querySelector('p').classList.add(activeClass)
                let url = new URL(window.location.href)
                url.hash = self.dataset.hash;
                self.disabled = false
                url.search = ''
                if(`#${self.dataset.hash}` !== window.location.hash) {
                    console.log('  🏀 EVENT HASH BUTTON', parent, events)
                    window.history.pushState({}, self.dataset.type, url);
                    window.dispatchEvent(new CustomEvent('hashchange', {
                        bubbles: true,
                        composed: true
                    }));
                }
                // task.set(true, '','red', {
                //     events: [{...element.dataset, pathname: normalizePathName(window.location.pathname), hash: window.location.hash}]
                // }, element.dataset.event).catch(e => {console.log('error devtool', e)})
                // const timeId = setTimeout(() => {
                // clearTimeout(timeId)
                //     self.shadowRoot.querySelector('p').classList.remove(activeClass)
                //     self.disabled = false
                // }, 300)
            },
            hashchange: (events) => {
                console.log(' HASH CHANGE ', self.tagName)
                if(`#${self.dataset.hash}` !== window.location.hash) {
                    self.shadowRoot.querySelector('p').classList.remove(activeClass)
                }
            },
            popstate: (events) => {
                console.log(' POPSTATE ', self.tagName)
                self.shadowRoot.querySelector('p').classList.remove(activeClass)
            },
        })
    })
}
