import {activeClass} from '../../../this/index.mjs'
import { initSections } from '../custom/index.mjs'

export default (self) => {
    return new Promise(async (resolve, reject) => {
        const method = await initSections(self)
        const buttons = self.querySelectorAll('fer-button')
        const square = self.shadowRoot.querySelector('.square')

        const getActive = () => {
            for (let i = 0; i < buttons.length; ++i) {
                if (buttons[i].classList.contains(activeClass)) {
                    return parseInt(buttons[i].dataset.id, 10)
                }
            }
            return 0
        }

        resolve({
            mousemove: (event) => {
                if (event.clientX < 140) {
                    if (self.classList.contains('sliderOut')) {
                        self.classList.replace('sliderOut', 'sliderIn')
                    } else {
                        self.classList.add('sliderIn')
                    }

                    // console.log("mouse location:", self)
                } else {
                    let timeId = setTimeout(() => {
                        clearTimeout(timeId)
                        self.classList.replace('sliderIn', 'sliderOut')

                    }, 300)
                }
            },
            ferButton: async (event) => {
                method.activeAnimation(event)
                const gap = 26
                const fontSize = 30
                const stepFontSize = 4
                const opaticyDefault = 1
                const stepOpacity = 0.15

                let rect = buttons[event.detail.id].getBoundingClientRect()
                square.style.top = `${event.detail.id * rect.height + gap * event.detail.id}px`
                const activeItem = buttons[event.detail.id].shadowRoot.querySelector('p')

                activeItem.style.opacity = `${opaticyDefault}`
                activeItem.style.fontSize = `${fontSize}px`

                const activeId = getActive()
                // if(activeId !== 0) {
                let percent = 0
                for (let i = activeId + 1; i < buttons.length; ++i) {
                    const currentItem = buttons[i].shadowRoot.querySelector('p')
                    percent = percent + 1

                    const opacity = opaticyDefault - stepOpacity * percent
                    const currentFontSize = fontSize - stepFontSize * percent

                    currentItem.style.opacity = `${opacity}`
                    currentItem.style.fontSize = `${currentFontSize}px`
                }

                percent = 0
                for (let i = activeId - 1; i >= 0; --i) {
                    percent = percent + 1
                    const currentItem = buttons[i].shadowRoot.querySelector('p')

                    const opacity = opaticyDefault - stepOpacity * percent
                    const currentFontSize = fontSize - stepFontSize * percent

                    currentItem.style.opacity = `${opacity}`
                    currentItem.style.fontSize = `${currentFontSize}px`
                }
            }
        })
    })
}
