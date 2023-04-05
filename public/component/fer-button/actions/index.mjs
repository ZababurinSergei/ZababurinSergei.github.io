import { activeClass } from '../../../_this/index.mjs'
export default (self) => {
    return new Promise(async (resolve, reject) => {

        resolve({
            click: (events) => {
                if (self.disabled) {
                    return;
                }
                if(!self.dataset.type) {
                    console.error('Требуется указать в атрибутах компонента data-type', self)
                    return;
                }
                if(!self.dataset.id) {
                    console.error('Требуется указать в атрибутах компонента data-id', self)
                    return;
                }

                self.disabled = true

                console.log('  🥎 EVENT BUTTON', {
                    type: self.dataset.type,
                    id: self.dataset.id,
                    class: `${self.dataset.type}__${self.dataset.id}`
                })

                self.shadowRoot.querySelector('p').classList.add(activeClass)

                // console.log(`  🥎 EVENT ${self.dataset.event} BUTTON ${this.dataset.type} PUSH`, {
                //     ...element.dataset,
                //     pathname: window.location.pathname,
                //     hash: window.location.hash
                // })

                // let url = new URL(window.location.href)
                // url.searchParams.set(`button_${element.dataset.id}`,  element.dataset.key);

                // window.history.pushState({}, self.dataset.event, `${url}`);

                // task.set(true, '','red', {
                //     events: [{...element.dataset, pathname: normalizePathName(window.location.pathname), hash: window.location.hash}]
                // }, element.dataset.event).catch(e => {console.log('error devtool', e)})
                const timeId = setTimeout(() => {
                clearTimeout(timeId)
                    self.shadowRoot.querySelector('p').classList.remove(activeClass)
                    self.disabled = false
                }, 300)
            },
            popstate: (events) => {
                console.log(' POPSTATE ', self.tagName)
            },
            hashchange: (events) => {
                console.log('HASH CHANGE', self.tagName)
            }
        })
    })
}
