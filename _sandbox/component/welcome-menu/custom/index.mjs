import { activeClass, events, config, delay } from '../../../this/index.mjs'

export const initSections = (self) => {
    return new Promise((resolve, reject) => {
        let menu = document.body.querySelector('welcome-menu')
        let buttons = menu.querySelectorAll('fer-button')
        let sections = document.body.shadowRoot.querySelectorAll('.slider')

        const activeAnimationMenu = (currentId, id) => {
            if(currentId === 0 && id === 1) {
                if(self.classList.contains('sliderOut')) {
                    self.classList.replace('sliderOut', 'sliderIn')
                } else {
                    self.classList.add('sliderIn')
                }
            }

            if(currentId === 1 && id === 0) {
                if(self.classList.contains('sliderIn')) {
                    self.classList.replace('sliderIn', 'sliderOut')
                } else {
                    self.classList.add('sliderOut')
                }
            }
        }
        const activeButton = (button, isActive) => {
            if (isActive) {
                button.classList.add(activeClass)
            } else {
                button.classList.remove(activeClass)
            }
        }
        const current = (event) => {
            let currentButton = 0;
            for (let item of buttons) {
                if(item.classList.contains(activeClass)) {
                    currentButton = parseInt(item.dataset.id, 10)
                }
                if (event.detail.id === item.dataset.id) {
                    activeButton(item, true)
                } else {
                    activeButton(item, false)
                }
            }
            return currentButton
        }

        const backgroundSections = [
            'transparent',
            '#666666',
            '#00A0A8',
            '#666666',
            '#00A0A8'
        ]
        const preAnimation = (section) => {
            const id = parseInt(section.dataset.id, 10)
            const data = section.querySelector('slot').assignedElements()[0].shadowRoot.querySelector('.parallax')
            const image = data.querySelector('img')
            data.style.background = backgroundSections[id]
            image.style.mixBlendMode = 'multiply'
        }

        resolve({
            activeAnimation: async (event) => {
                events('fer-button-in', {
                    type: 'welcome-menu',
                    action: 'disable'
                })

                const currentId = current(event)
                const id = parseInt(event.detail.id, 10)
                activeAnimationMenu(currentId, id)

                if (id !== currentId) {
                    const isNext = (id - 1) === currentId || (id + 1) === currentId
                    const isBack = currentId >= id

                    if (!isBack) {
                        for (let i = 0; i < sections.length; ++i) {
                            const itemId = parseInt(sections[i].dataset.id, 10)
                            if (itemId === id) {
                                preAnimation(sections[itemId])
                                isNext ? '' : await delay(300)
                                sections[itemId].classList.add('animation2')
                                sections[itemId].classList.add('scrollIn')
                            } else if (itemId < id) {
                                if (!sections[i].classList.contains('scrollIn') && !sections[i].classList.contains('parallax-container-on')) {
                                    sections[itemId].classList.add('animation')
                                    sections[itemId].classList.add('scrollIn')
                                    isNext ? '' : await delay(300)
                                } else {
                                    if(config.page.first.isDynamic) {
                                        console.log('ddddddddddddddd',currentId)
                                        sections[itemId].classList.add(currentId === 0 ?'animation':'animation4')
                                        sections[itemId].classList.add('scrollIn')
                                    }
                                }
                            }
                        }
                    } else {
                        for (let i = (sections.length - 1); i >= 1; --i) {
                            const itemId = parseInt(sections[i].dataset.id, 10)
                            if (id < itemId) {
                                if (sections[i].classList.contains('parallax-container-on')) {
                                    if(id + 1 === itemId) {
                                        if(config.page.first.isDynamic) {
                                            console.log('dddddddddddddddddddddddd', sections[i - 1])
                                            sections[i - 1].classList.add('animation3')
                                            sections[i - 1].classList.add('scrollTopDown')
                                        }
                                    }
                                    sections[i].classList.add('animation5')
                                    sections[i].classList.add('scrollOut')
                                    isNext ? '' : await delay(300)
                                }
                            } else {

                            }
                        }
                    }
                }
            }
        })
    })
};