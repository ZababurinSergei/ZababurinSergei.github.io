import {activeClass} from '../../../this/index.mjs'

export default (self) => {
    return new Promise(async (resolve, reject) => {
        let isUp = false

        let percent = 0
        let start = null;
        let position = 0

        let description = self.shadowRoot.querySelector('.description')
        let descriptionDown = 20

        let content = self.shadowRoot.querySelector('.content')

        let imageScale = self.shadowRoot.querySelectorAll('.image-scale')

        // let elemContent = self.shadowRoot.querySelector('.content')
        // const style = getComputedStyle(elemContent)
        // const top = parseFloat(style.top.replace('px', ''))

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
        function requestAnimationFrame(timestamp) {
            if (!start) start = timestamp;
            let progress = timestamp - start;

            if (isAnimation) {
                const offsetDescription = 30;
                const offset = 100;

                percent = Math.round(progress) * 100 / 2000
                let oneStepPx = offset / 100
                let stepPx = oneStepPx * percent

                // console.log('ANIMATION progress', stepPx)

                if (description !== null) {
                    let stepVh = offsetDescription / 100
                    if (isUp) {
                        description.style.setProperty("--offset", `${stepVh * percent * -1}vh`);
                    } else {
                        let step = (descriptionDown / 100) * percent
                        description.style.setProperty("--offset", `${descriptionDown - step}vh`);
                    }
                }


                if(content !== null) {
                    percent = Math.round(progress) * 100 / 1500
                    let stepVh = offsetDescription / 100
                    if (isUp) {
                        // console.log('======= UP =======', percent)
                        content.style.setProperty("--offset", `${offsetDescription + stepVh * percent * -1}vh`);
                    } else {
                        console.log('======= DOWN =======')
                        // let step = (descriptionDown / 100) * percent
                        // content.style.setProperty("--offset", `${descriptionDown - step}vh`);
                    }
                }


                if (imageScale.length !== 0) {
                    const maxScale = 0.5
                    if (isUp) {
                        imageScale.forEach((item, index) => {
                            item.style.setProperty("--scale", `${1 + maxScale * percent / 100}`);
                            if(index === 1) {
                                percent = Math.round(progress) * 100 / 1500
                                item.style.setProperty("--opacity", `${1 - percent / 100}`);
                            }
                        })

                    } else {
                        if(tempScale === null) {
                            tempScale = imageScale[0].style.getPropertyValue("--scale");
                        }

                        if(tempOpacity === null) {
                            tempOpacity = imageScale[1].style.getPropertyValue("--opacity");
                        }

                        const offset = tempScale - 1.35
                        const scale = offset / 100
                        const step = percent * (offset / 100)

                        imageScale.forEach((item, index) => {
                            item.style.setProperty("--scale", `${tempScale - step}`);
                            if(index === 1) {
                                item.style.setProperty("--opacity", `${percent/100}`);
                            }
                        })

                    }
                }

                window.requestAnimationFrame(requestAnimationFrame);

            } else {
                if (description !== null) {
                    description.style.setProperty("--offset", `0`);
                }

                tempScale = null
                tempOpacity - null
                progress = 0
                start = null
            }
        }

        resolve({
            animationstart: (event) => {
                const id = parseInt(section.dataset.id, 10)
                const activeId = activeSection()
                isUp = activeId > id


                if (description !== null) {
                    description.style.setProperty("--offset", `0`);

                    if (id !== activeId) {
                        isAnimation = true
                        window.requestAnimationFrame(requestAnimationFrame);
                    }
                }

                if (imageScale.length !== 0) {
                    if (id === activeId) {
                        isUp = true
                    }

                    if (id >= activeId) {
                        isAnimation = true
                        window.requestAnimationFrame(requestAnimationFrame);
                    } else {
                        tempScale = imageScale[0].style.getPropertyValue("--scale");
                        let data = parseFloat(tempScale)
                        if(Number.isNaN(data) || parseFloat(tempScale) < 1.1) {
                            isAnimation = true
                            window.requestAnimationFrame(requestAnimationFrame);
                        }
                    }
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
            animationend: (event) => {
                isAnimation = false
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
