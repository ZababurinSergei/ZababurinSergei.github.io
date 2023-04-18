import { activeClass, normalizePathName, task } from "../../../this/index.mjs";

export default (self) => {
    return new Promise(async (resolve, reject) => {

        resolve({
            customEvents: (event) => {
                if (`${self.dataset.type}_${self.dataset.role}_${self.dataset.key}` !== event.detail && self.shadowRoot.querySelector('p').classList.contains(activeClass)) {
                    self.disabled = false
                    self.shadowRoot.querySelector('p').classList.remove(activeClass)
                }
            },
            popstate: (event) => {
                if (event.detail) {
                    const url = self.getAttribute('to')
                    if (url !== event.detail.pathname) {
                        self.shadowRoot.querySelector('p').classList.remove(activeClass)
                    }
                }
            },
            click: (event) => {
                if (self.disabled) {
                    return;
                }

                const item = event.currentTarget
                const element = item.getRootNode().host

                item.classList.add(activeClass)

                console.log(`  🥎 EVENT ${element.dataset.event} BUTTON ${self.dataset.type} PUSH`, {
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
                }, element.dataset.event).catch(e => {
                    console.log('error devtool', e)
                })

                // const timeId = setTimeout(() => {
                // clearTimeout(timeId)
                // this.disabled = false
                // }, setTime)
            }
        })
    })
}