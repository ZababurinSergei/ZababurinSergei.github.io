const {
    activeClass,
    events,
    animationCount,
    config,
    delay,
    size
} = await import('../../../this/index.mjs')

export const initSections = (self) => {
    return new Promise((resolve, reject) => {

        let buttons = self.querySelectorAll('fer-button')
        let sections = self.assignedSlot.closest('div').querySelectorAll('.slider')
        let welcomeSections = self.getRootNode().querySelectorAll('welcome-section')

        const getActive = () => {
            for (let i = 0; i < buttons.length; ++i) {
                if (buttons[i].classList.contains(activeClass)) {
                    return parseInt(buttons[i].dataset.id, 10)
                }
            }
            return 0
        }

        const getShadowSection = (sectionArray, currentId) => {
            for (let i = 0; i < sectionArray.length; ++i) {
                let id = sectionArray[i].classList[0].split('_')
                if (parseInt(id.at(-1)) === currentId) {
                    return sectionArray[i]
                }
            }
            return undefined
        }
        const getWelcomeSection = (currentId) => {
            for (let i = 0; i < welcomeSections.length; ++i) {
                if (parseInt(welcomeSections[i].dataset.id, 10) === currentId) {
                    return welcomeSections[i]
                }
            }
            return undefined
        }

        const activeAnimationMenu = (currentId, id) => {
            if (currentId === 0 && id === 1) {
                if (self.classList.contains('sliderOut')) {
                    self.classList.replace('sliderOut', 'sliderIn')
                } else {
                    self.classList.add('sliderIn')
                }
            }

            if (currentId === 1 && id === 0) {
                if (self.classList.contains('sliderIn')) {
                    self.classList.replace('sliderIn', 'sliderOut')
                } else {
                    self.classList.add('sliderOut')
                }
            }
        }
        const activeButton = (event) => {
            for (let item of buttons) {
                if (event.detail.id === item.dataset.id) {
                    item.classList.add(activeClass)
                } else {
                    item.classList.remove(activeClass)
                }
            }
        }
        const current = (event) => {
            let currentButton = 0;
            for (let item of buttons) {
                if (item.classList.contains(activeClass)) {
                    currentButton = parseInt(item.dataset.id, 10)
                }
            }

            return currentButton
        }

        const backgroundSections = [
            'transparent',
            '#666666',
            '#666666',
            '#666666',
            'transparent'
        ]
        const preAnimation = (section) => {
            const id = parseInt(section.dataset.id, 10)
            const data = section.querySelector('slot').assignedElements()[0].shadowRoot.querySelector('.parallax')
            const image = data.querySelector('img')
            data.style.background = backgroundSections[id]
            if(id !== 4 ) {
                image.style.mixBlendMode = 'multiply'
            }
            // console.log('ssssssssssssssssssssssssssss ssssssssssssssssss', id)

        }

        resolve({
            activeAnimation: async (event) => {
                events('fer-button-in', {
                    type: 'welcome-menu',
                    action: 'disable'
                })

                const isUp = animationCount.getDirection()
                const currentId = current(event)
                const id = parseInt(event.detail.id, 10)
                const section = getWelcomeSection(currentId)

                const description = section.shadowRoot.querySelector('.first-page')?.querySelector('.content')

                let isNextCurrent = false
                let childrentId = {}
                let children = {}

                if (section.hasAttribute('children')) {
                    childrentId = section.getAttribute('children');
                    children = section.shadowRoot.querySelectorAll('section[class*="_children"]')

                    if (children.length !== 0) {
                        childrentId = childrentId.split('_')
                        if (childrentId.length > 1) {
                            let maxId = parseInt(childrentId[0], 10);
                            let currentId = parseInt(childrentId[1], 10);

                            if(isUp) {
                                if (maxId > currentId) {
                                    section.setAttribute('children', `${children.length}_${currentId + 1}`);
                                    childrentId[0] = parseInt(maxId, 10)
                                    childrentId[1] = parseInt(currentId + 1, 10)
                                    isNextCurrent = true
                                }
                            } else {
                                if (maxId >= currentId) {
                                    section.setAttribute('children', `${children.length}_${currentId - 1}`);
                                    childrentId[0] = parseInt(maxId, 10)
                                    childrentId[1] = parseInt(currentId - 1, 10)
                                    isNextCurrent = true
                                }
                            }
                        } else {
                            section.setAttribute('children', `${children.length}_1`);
                            childrentId[0] = parseInt(children.length, 10)
                            childrentId[1] = 1
                            isNextCurrent = true
                        }

                    }
                }

                if (isNextCurrent) {
                    events('welcome-header', {
                        isDisable: false
                    })

                    const list = section.shadowRoot.querySelectorAll('.content')

                    if(childrentId[1] !== 0) {
                        const isUp = animationCount.getDirection()
                        const item = getShadowSection(children, parseInt(isUp ? childrentId[1] - 1 : childrentId[1], 10))

                        if(isUp) {
                            section.shadowRoot.querySelector('.image-general').style.opacity = 1
                            if(list[0].classList.contains('descriptionDown')) {
                                list[0].classList.replace('descriptionDown', 'descriptionUp')
                            } else {
                                list[0].classList.add('descriptionUp')
                            }

                            if(list[1].classList.contains('descriptionDown2')) {
                                list[1].classList.replace('descriptionDown2', 'descriptionUp2')
                            } else {
                                list[1].classList.add('descriptionUp2')
                            }
                        } else {

                            section.shadowRoot.querySelector('.image-general').style.opacity = 0

                            if(list[0].classList.contains('descriptionUp')) {
                                list[0].classList.replace('descriptionUp', 'descriptionDown')
                            } else {
                                list[0].classList.add('descriptionDown')
                            }

                            if(list[1].classList.contains('descriptionUp2')) {
                                list[1].classList.replace('descriptionUp2', 'descriptionDown2')
                            } else {
                                list[1].classList.add('descriptionDown2')
                            }
                        }
                    } else {
                        section.shadowRoot.querySelector('.image-general').style.opacity = 0
                        const item = getShadowSection(children, 0)

                        if(list[0].classList.contains('descriptionUp')) {
                            list[0].classList.replace('descriptionUp', 'descriptionDown')
                        } else {
                            list[0].classList.add('descriptionDown')
                        }

                        if(list[1].classList.contains('descriptionUp2')) {
                            list[1].classList.replace('descriptionUp2', 'descriptionDown2')
                        } else {
                            list[1].classList.add('descriptionDown2')
                        }
                    }

                    events('fer-button-in', {
                        type: 'welcome-menu',
                        action: 'enable'
                    })
                } else {
                    events('welcome-header', {
                        isDisable: true
                    })

                    activeButton(event)
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
                                        sections[itemId].classList.add('animation2')
                                        sections[itemId].classList.add('scrollIn')
                                        isNext ? '' : await delay(300)
                                    } else {
                                        if (config.page.first.isDynamic) {
                                            sections[itemId].classList.add(currentId === 0 ? 'animation' : 'animation4')
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
                                        if (id + 1 === itemId) {
                                            if (config.page.first.isDynamic) {
                                                if(id === 0 ) {
                                                    events('welcome-header', {
                                                        isDisable: false
                                                    })
                                                }

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
            },
            animateMenu: (event) => {
                const square = self.shadowRoot.querySelector('.square')
                const gap = 26
                const fontSize = 30
                const stepFontSize = 4
                const opaticyDefault = 1
                const stepOpacity = 0.15

                let rect = buttons[event.detail.id].getBoundingClientRect()
                square.style.top = `${size(event.detail.id * rect.height + gap * event.detail.id, 1920)}rem`
                const activeItem = buttons[event.detail.id].shadowRoot.querySelector('p')

                activeItem.style.opacity = `${opaticyDefault}`
                activeItem.style.fontSize = `${size(fontSize, 1920)}rem`
                activeItem.style.fontWeight = `600`

                const activeId = getActive()

                let percent = 0
                for (let i = activeId + 1; i < buttons.length; ++i) {
                    const currentItem = buttons[i].shadowRoot.querySelector('p')
                    percent = percent + 1
                    const opacity = opaticyDefault - stepOpacity * percent
                    const currentFontSize = fontSize - stepFontSize * percent

                    currentItem.style.opacity = `${opacity}`
                    currentItem.style.fontSize = `${size(currentFontSize, 1920)}rem`
                    currentItem.style.fontWeight = `400`
                }

                percent = 0

                for (let i = activeId - 1; i >= 0; --i) {
                    percent = percent + 1
                    const currentItem = buttons[i].shadowRoot.querySelector('p')
                    const opacity = opaticyDefault - stepOpacity * percent
                    const currentFontSize = fontSize - stepFontSize * percent

                    currentItem.style.opacity = `${opacity}`
                    currentItem.style.fontSize = `${size(currentFontSize, 1920)}rem`
                    currentItem.style.fontWeight = `400`
                }
            }
        })
    })
};