import { events } from '../../../this/index.mjs'

export default (self) => {
    return new Promise(async (resolve, reject) => {

        resolve({
            click: (event) => {
                if (self.disabled) {
                    return;
                }
                const buttons = document.querySelectorAll('fer-button')
                for(let i = 0; i < buttons.length; ++i) {
                    if(parseInt(buttons[i].dataset.id, 10) === 1 && buttons[i].dataset.type === 'welcome-menu') {
                        buttons[i].click()
                    }
                }

                events('welcome-header', {
                    'isDisable': true
                })


                // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', button)
                // if (!self.dataset.type) {
                //     console.error('Требуется указать в атрибутах компонента data-type', self)
                //     return;
                // }

                // if (!self.dataset.id) {
                //     console.error('Требуется указать в атрибутах компонента data-id', self)
                //     return;
                // }

                // console.log('  🥎 EVENT BUTTON', {
                //     type: self.dataset.type,
                //     id: self.dataset.id,
                //     action: `${self.dataset.type}__${self.dataset.id}`
                // })

                // window.dispatchEvent(new CustomEvent('fer-button', {
                //     bubbles: true,
                //     composed: true,
                //     detail: {
                //         type: self.dataset.type,
                //         id: self.dataset.id,
                //         action: `${self.dataset.type}__${self.dataset.id}`
                //     }
                // }));
                //
                // const timeId = setTimeout(() => {
                //     clearTimeout(timeId)
                //     if (self.dataset.switchoff !== undefined) {
                //         self.classList.remove(activeClass)
                //     }
                // }, 300)
            }

        })
    })
}
