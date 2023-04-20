import {events, animationCount, activeClass} from '../../../this/index.mjs'

export default (self) => {
    return new Promise(async (resolve, reject) => {

        const isNextSectionById = (welcomeSection, id) => {
            let isNextSectionById = true
            welcomeSection.forEach(section => {
                const currentId = section.dataset.id
                if(section.dataset.id === id.toString() && section.hasAttribute('children')) {
                    const childrentId = section.getAttribute('children').split('_');
                    let maxId = parseInt(childrentId[0], 10);
                    let currentId = parseInt(childrentId[1], 10);
                    if(maxId > currentId) {
                        isNextSectionById = false
                    }
                    console.log('sssssssssss 🏤sssssssssssssssssss',maxId, currentId)
                }

            })

            return isNextSectionById
        }

        resolve({
            click: (event) => {
                if (self.disabled) {
                    return;
                }

                animationCount.setDirection(true)

                const buttons = document.querySelectorAll('fer-button')


                const root = self.getRootNode()
                const welcomeSection = root.querySelectorAll('welcome-section')

                let currentButtonIndex = undefined
                let currentButton = undefined
                let currentButtonId= undefined

                for(let i = 0; i < buttons.length; ++i) {
                    const id = parseInt(buttons[i].dataset.id, 10)
                    if(buttons[i].dataset.type === 'welcome-menu' && buttons[i].classList.contains(activeClass)) {
                       currentButtonIndex = i
                        currentButtonId = id
                        currentButton = buttons[i]
                        break
                    }

                    if(id === 0) {
                        currentButtonIndex = 0
                        currentButtonId = 0
                        currentButton = buttons[i]
                    }
                    // console.log('dddddddddddddddddd', buttons[i].dataset.id, )
                    //     if(parseInt(buttons[i].dataset.id, 10) === 1 && buttons[i].dataset.type === 'welcome-menu') {
                    //     buttons[i].click()
                    // }
                }


                if(isNextSectionById(welcomeSection, currentButtonId)) {
                    buttons[currentButtonId + 1].click()
                } else {
                    buttons[parseInt(currentButtonId, 10)].click()
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
