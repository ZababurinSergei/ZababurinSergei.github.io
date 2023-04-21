import {activeClass, events, config, animationCount, randomColor} from '../../../this/index.mjs'
import { initSections } from '../custom/index.mjs'

export default (self) => {
    return new Promise(async (resolve, reject) => {
        const method = await initSections(self)
        let start = null;
        let position = 0
        const template = method.get.template()

        let description = self.shadowRoot.querySelector('.description')
        let content = self.shadowRoot.querySelectorAll('.text-offset')
        let imageScale = self.shadowRoot.querySelectorAll('.image-scale')

        let menuFormEmail = self.shadowRoot.querySelector('.description-without-background-item-4')

        let isAnimation = false
        let section = self.assignedSlot.closest('section')
        let menuButtons = section.closest('.welcome__book').querySelector('slot[name="welcome-menu"]').assignedElements()[0].querySelectorAll('fer-button')

        const activeSection = () => {
            for (let i = 0; i < menuButtons.length; ++i) {
                if (menuButtons[i].classList.contains(activeClass)) {
                    return parseInt(menuButtons[i].dataset.id, 10)
                }
            }
            return 0
        }

        let tempScale = null
        let tempOpacity = null

        const speedAnimationImageTop = getComputedStyle(self, 'host').getPropertyValue("--speedAnimationImageTop");
        const speedAnimationImageBottom = getComputedStyle(self, 'host').getPropertyValue("--speedAnimationImageBottom");
        const k = speedAnimationImageTop * 100 / speedAnimationImageBottom

        // console.log('##### 2######### self ##############', speedAnimationImageTop, speedAnimationImageBottom)

        const maxScale = 1.2
        const maxOpacity = 0

        function requestAnimationFrame(timestamp) {
            if (!start) start = timestamp;
            const isUp =  animationCount.getDirection()
            let progress = timestamp - start;

            if (isAnimation) {
                const offsetDescription = 14;
                const offsetDescriptionDown = 14;

                if (description !== null) {
                    const percentDescriptionUp = Math.round(progress * (k + 1) / speedAnimationImageTop);
                    const percentDescriptionDown = Math.round(progress * ( 135) / speedAnimationImageBottom);

                    let stepVh = offsetDescription / 100
                    let stepVhDown = offsetDescriptionDown / 100

                    if (isUp) {
                        description.style.setProperty("--offset", `${stepVh * percentDescriptionUp * -1}vh`);
                    } else {
                        description.style.setProperty("--offset", `${(offsetDescriptionDown - stepVhDown * percentDescriptionDown) * -1}vh`);
                    }
                }

                if (content.length !== 0) {
                    let percentContentUp = Math.round(progress * 101 / speedAnimationImageTop)
                    let percentContentDown = Math.round(progress * 101 / speedAnimationImageBottom)

                    const offsetToCenter = -35
                    const offsetToTop = 10

                    if (isUp) {
                        if (section.classList.contains('animation4')) {
                            const step = offsetToTop / 100
                            if(menuFormEmail !== null) {
                                menuFormEmail.style.transform = `translateY(${step * percentContentUp * -1}vh)`
                                // menuFormEmail.style.background = randomColor();
                            } else {
                                content.forEach(item => {
                                    item.style.transform = `translateY(${step * percentContentUp * -1}vh)`
                                })
                            }
                        }

                        if (section.classList.contains('animation2')) {
                            const step = offsetToCenter / 100
                            if(menuFormEmail !== null) {
                                menuFormEmail.style.transform = `translateY(${offsetToCenter + step * percentContentUp * -1}vh)`
                                // menuFormEmail.style.ba          // item.style.background = randomColor();ckground = randomColor();
                            } else {
                                content.forEach(item => {
                                    item.style.transform = `translateY(${offsetToCenter + step * percentContentUp * -1}vh)`
                                    // item.style.background = randomColor();
                                })
                            }

                        }
                    } else {
                        const startTop = -45
                        const endDown = -15
                        const step = startTop / 100
                        const stepEndDown = endDown / 100
                        if (section.classList.contains('animation3')) {
                            if(menuFormEmail !== null) {
                                menuFormEmail.style.transform = `translateY(${startTop - step * percentContentUp}vh)`
                                menuFormEmail.style.background = randomColor();
                            } else {
                                content.forEach(item => {
                                    item.style.transform = `translateY(${startTop - step * percentContentUp}vh)`
                                    // item.style.background = randomColor();
                                })
                            }
                        }

                        if (section.classList.contains('animation5')) {

                            if(menuFormEmail !== null) {
                                menuFormEmail.style.transform = `translateY(${stepEndDown * percentContentUp * -1}vh)`
                                // menuFormEmail.style.background = randomColor();
                            } else {
                                content.forEach(item => {
                                    item.style.transform = `translateY(${stepEndDown * percentContentUp * -1}vh)`
                                })
                            }

                        }
                    }
                }

                if (imageScale.length !== 0) {
                    let percentImageUp = Math.round(progress  * 101 / speedAnimationImageTop)
                    let percentImageDown = Math.round(progress  * 135 / speedAnimationImageBottom)
                    let percentImageDown2 = Math.round(progress  * 101 / speedAnimationImageBottom)

                    if (isUp) {
                        if (section.classList.contains('animation4')) {

                            const step = (maxScale - 1) / 100
                            const stepOpacity = (1 - maxOpacity) / 100

                            imageScale.forEach((item, index) => {
                                item.style.transform = `scale(${maxScale - step * percentImageUp})`
                                if(index === 1) {
                                    item.style.opacity = `${maxOpacity + stepOpacity * percentImageDown2}`
                                }
                            })
                        }

                        if (section.classList.contains('animation2')) {
                            const step = (maxScale - 1) / 100
                            const stepOpacity = (1 - maxOpacity) / 100

                            imageScale.forEach((item, index) => {
                                item.style.transform = `scale(${1 + step * percentImageUp})`
                                if(index === 1) {
                                    item.style.opacity = `${1 - stepOpacity * percentImageUp}`
                                }
                            })
                        }
                    } else {
                        if (section.classList.contains('animation3')) {
                            const step  = (maxScale - 1) / 100
                            const stepOpacity = (1 - maxOpacity) / 100

                            imageScale.forEach((item, index) => {
                                item.style.transform = `scale(${1 + step * percentImageDown})`
                                if(index === 1) {
                                    item.style.opacity = `${(1 - maxOpacity) - stepOpacity * percentImageDown}`
                                }
                            })
                        }

                        if (section.classList.contains('animation5')) {
                            const step = (maxScale - 1) / 100
                            const stepOpacity = (1 - maxOpacity) / 100

                            imageScale.forEach((item, index) => {
                                item.style.transform = `scale(${maxScale - step * percentImageDown })`
                                if(index === 1) {
                                    item.style.opacity = `${stepOpacity * percentImageDown}`
                                }
                            })
                        }
                    }
                }

                window.requestAnimationFrame(requestAnimationFrame);

            } else {
                const isUp =  animationCount.getDirection()

                if (description !== null) {
                    description.style.setProperty("--offset", `0`);
                }

                if (content.length !== 0) {
                    content.forEach(item => {
                        item.style.transform = `translateY(0)`
                    })
                }

                if(isUp) {
                    imageScale.forEach((item, index) => {
                        item.style.transform = `scale(${maxScale})`
                        if(index === 1) {
                            item.style.opacity = maxOpacity
                        }
                    })
                } else {
                    imageScale.forEach((item, index) => {
                        item.style.transform = `scale(${maxScale})`
                        if(index === 1) {
                            item.style.opacity = `0`
                        }
                    })
                }

                maxOpacity
                tempScale = null
                tempOpacity - null
                progress = 0
                start = null
            }
        }

        resolve({
            click: (event) => {
                if(event.target.tagName === 'LI' ) {
                    let welcomeMenu = self.getRootNode().querySelector('welcome-menu')
                    const activeMenu = welcomeMenu.querySelector(`.${activeClass}`)
                    window.dispatchEvent(new CustomEvent('change-views', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            id: activeMenu.dataset.id,
                            type: 'transform',
                            action: `to`,
                            section: event.target.dataset.id
                        }
                    }));
                }
            },
            animationstart: (event) => {
                animationCount.increment()
                const count = animationCount.get()
                const activeId = activeSection()
                const id = parseInt(section.dataset.id, 10)

                if (count === 1) {
                   animationCount.setDirection(activeId > id)
                }

                if (description !== null) {
                    description.style.setProperty("--offset", `0`);
                    isAnimation = true
                    window.requestAnimationFrame(requestAnimationFrame);
                }


                if (imageScale.length !== 0) {
                    // if (id >= activeId) {

                    isAnimation = true
                    window.requestAnimationFrame(requestAnimationFrame);
                    // } else {
                    //         tempScale = imageScale[0].style.getPropertyValue("--scale");
                    //
                    //         let data = parseFloat(tempScale)
                    //         if(Number.isNaN(data) || parseFloat(tempScale) < 1.1) {
                    //             isAnimation = true
                    //             window.requestAnimationFrame(requestAnimationFrame);
                    //         }
                    // }
                }

            },
            animationend: (event) => {
                isAnimation = false
                const animationEndCount = animationCount.decrement()
                const currentId = method.current()
                const id = parseInt(event.currentTarget.dataset.id, 10)
                const section = self.assignedSlot.closest('section')

                if (event.animationName === 'inPage') {
                    method.clearClass(section)

                    section.classList.remove('parallax-container-off')
                    section.classList.replace('scrollIn', 'parallax-container-on')
                } else if (event.animationName === 'outPage') {
                    method.clearClass(section)
                    section.classList.replace('parallax-container-on', 'parallax-container-off')
                    section.classList.remove('scrollOut')
                } else if (event.animationName === 'scrollTop') {
                    method.clearClass(section)

                    if (config.page.first.isDynamic) {
                        section.classList.remove('animation')
                        section.classList.remove('scrollTopDown')
                    }
                }
                if (animationEndCount === 0) {

                    events('fer-button-in', {
                        type: 'welcome-menu',
                        action: 'enable'
                    })
                }
            },
            onWheel: (event) => {
                event = event || window.event;
                let delta = event.deltaY || event.detail || event.wheelDelta;
                position = position + delta
                // elem.style.top = `${position}px`
                // console.log('=======================', position)
                // info.innerHTML = +
                //     e.preventDefault ? e.preventDefault() : (e.returnValue = false);
            },
            animationiteration: (event) => {
            },
            mutationObserver: (mutations) => {
                // mutations.forEach(function(mutation) {
                // console.log('mutation',mutation.target.classList);

                // if (mutation.oldValue === 'search-trigger') {
                //     document.getElementsByTagName('body')[0].classList.add('noscroll');
                // } else {
                //     document.getElementsByTagName('body')[0].classList.remove('noscroll');
                // }
                // });
            }
        })
    })
}
