import { activeClass } from '../../../this/index.mjs'
import { initSections } from '../custom/index.mjs'

export default (self) => {
    return new Promise(async (resolve, reject) => {
        const method = await initSections()
        method.styleOpacity(self)

        resolve({
            'fer-button-in': (event) => {
                if (event.detail.type === self.dataset.type && event.detail.action === 'disable') {
                    self.disabled = true
                } else if (event.detail.type === self.dataset.type && event.detail.action === 'enable') {
                    if (!self.classList.contains(activeClass)) {
                        self.disabled = false
                    }
                }
            },
            'fer-button': async (events) => {
                // if (events.detail.id === self.dataset.id) {
                //     method.animationButton(self)
                //     self.classList.add(activeClass)
                // } else {
                //     self.classList.remove(activeClass)
                // }
            },
            mouseover: (events) => {
                if (self.dataset.cssShadow === 'welcomebook') {
                    self.shadowRoot.querySelectorAll('.word__item').forEach(item => {
                        if (item.classList.contains('word__item--left')) {
                            item.classList.remove('word__item_active-right')
                            item.classList.add('word__item_active-left')
                        } else {
                            item.classList.remove('word__item_active-left')
                            item.classList.add('word__item_active-right')
                        }
                    })
                }
            },
            mouseout: (events) => {
                if (self.dataset.cssShadow === 'welcomebook') {
                    self.shadowRoot.querySelectorAll('.word__item').forEach(item => {
                        if (item.classList.contains('word__item--left')) {
                            item.classList.remove('word__item_active-left')
                            item.classList.add('word__item_active-right')
                        } else {
                            item.classList.remove('word__item_active-right')
                            item.classList.add('word__item_active-left')
                        }
                    })
                }
            },
            click: (events) => {
                if (self.disabled) {
                    return;
                } else {
                    self.disabled = true
                }

                if (!self.dataset.type) {
                    console.error('Требуется указать в атрибутах компонента data-type', self)
                    return;
                }

                if (!self.dataset.id) {
                    console.error('Требуется указать в атрибутах компонента data-id', self)
                    return;
                }

                console.log('  🥎 EVENT BUTTON', {
                    type: self.dataset.type,
                    id: self.dataset.id,
                    action: `${self.dataset.type}__${self.dataset.id}`
                })

                // console.log('@@@@@@@@@@@@@ BUTTONS @@@@@@@@@@@@@@@@', self, {
                //     type: self.dataset.type,
                //     id: self.dataset.id,
                //     action: `${self.dataset.type}__${self.dataset.id}`
                // })
                window.dispatchEvent(new CustomEvent('fer-button', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        type: self.dataset.type,
                        id: self.dataset.id,
                        action: `${self.dataset.type}__${self.dataset.id}`
                    }
                }));

                const timeId = setTimeout(() => {
                    clearTimeout(timeId)
                    if (self.dataset.switchoff !== undefined) {
                        self.classList.remove(activeClass)
                    }
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
