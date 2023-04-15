const components = ['welcome-feedback','welcome-logo','fer-link', 'fer-hash', 'fer-button', 'fer-scroll', 'welcome-menu', 'welcome-section', 'welcome-header']
const {
    events,
    animationCount,
    activeClass,
    config,
    anime,
    size,
    vhToPixel
} = await import('./this/index.mjs')
// import {events, activeClass, delay} from './this/index.mjs'

for(let i = 0; i < components.length; ++i) {
    import(`./component/${components[i]}/index.mjs`)
}
// import ferHash from './component/fer-hash/index.mjs'
// import ferButton from './component/fer-button/index.mjs'
// import ferScroll from './component/fer-scroll/index.mjs'
// import welcomeMenu from './component/welcome-menu/index.mjs'
// import welcomeSection from './component/welcome-section/index.mjs'
// import welcomeHeader from './component/welcome-header/index.mjs'
// import welcomeGeneral from './component/welcome-general/index.mjs'
// import welcomeLogo from './component/welcome-logo/index.mjs'
// import welcomeFeedback from './component/welcome-feedback/index.mjs'

// import lightDom from './index.css' assert { type:'css' }
// import shadowDom from './shadow.css' assert { type:'css' }
// import shadowDom from './index.css' assert { type:'css' }
// import parallax from './parallax.css' assert { type:'css' }
// import scroll from './scroll.css' assert { type:'css' }

export const welcomebook = (root = document.body, template = undefined) => {
    return new Promise((resolve, reject) => {

        window.scrollTo(0,0)
        let templateContent = template
            ? template.content
            : root

        let shadow = root.attachShadow({mode: "open"});
        let shadowData = templateContent.querySelector('.welcome__book')
        shadow.appendChild(shadowData)

        if(template) {
            root.appendChild(templateContent)
        }

        // const mainCss = document.createElement('style')
        // mainCss.innerText = `@import "./main.css";`
        // shadow.appendChild(mainCss)
        // document.body.appendChild(mainCss)

        const indexCss = document.createElement('style')
        indexCss.innerText = `@import "./index.css";`
        document.body.appendChild(indexCss)

        const pageStyle = document.createElement('style')
        pageStyle.innerText = `@import "./shadow.css";`
        shadow.appendChild(pageStyle)

        const parallaxCss = document.createElement('style')
        parallaxCss.innerText = `@import "./parallax.css";`
        shadow.appendChild(parallaxCss)

        const scrollCss = document.createElement('style')
        scrollCss.innerText = `@import "./scroll.css";`
        shadow.appendChild(scrollCss)
        // console.log('================================', shadowDom)
        // document.adoptedStyleSheets = [...document.adoptedStyleSheets, lightDom];
        // shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, shadowDom];
        // shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, parallax];
        // shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, scroll];

        let menu = document.body.querySelector('welcome-menu')
        let buttons = menu.querySelectorAll('fer-button')

        const current = () => {
            for (let item of buttons) {
                if (item.classList.contains(activeClass)) {
                    return parseInt(item.dataset.id, 10)
                }
            }
            return 0
        };

        const sensitivity = 340
        const mousemove = (event) => {
            const currentId = current()
            if(currentId !== 0) {
                if(event.clientX < sensitivity) {
                    if(menu.classList.contains('sliderOut')) {
                        menu.classList.replace('sliderOut', 'sliderIn')
                    } else {
                        menu.classList.add('sliderIn')
                    }
                } else {
                    let timeId = setTimeout(() => {
                        clearTimeout(timeId)
                        menu.classList.replace('sliderIn', 'sliderOut')

                    }, 20000)
                }
            }
        }

        let isFiring = false;
        function throttleEvent(event) {
            if (isFiring === false) {
                setTimeout(() => {
                    mousemove(event);
                    isFiring = false;
                }, 300);
            }
            isFiring = true;
        }
        const getWelcomeSection = (currentId) => {
            const sections = document.body.querySelectorAll('welcome-section')
            for(let i = 0; i < sections.length; ++i) {
                if(parseInt(sections[i].dataset.id, 10) === currentId) {
                    return sections[i]
                }
            }
            return  undefined
        }

        document.addEventListener('mousemove', throttleEvent)

        let position = 0
        let lock = false
        const onWheel = (event) => {
            if(!lock) {
                event = event || window.event;
                let delta = event.deltaY || event.detail || event.wheelDelta;
                position = position + delta
                let currentId = undefined

                if(position > 100) {
                    lock = true
                    currentId = current()
                    if((currentId + 1) < buttons.length) {
                        animationCount.setDirection(true)
                        buttons[currentId + 1].click();
                        position = 0
                    } else {
                        position = 0
                        lock = false
                    }
                } else if(position < -100) {
                    currentId = current()

                    if(currentId - 1 >= 0) {
                        lock = true
                        currentId = current()
                        animationCount.setDirection(false)
                        buttons[currentId - 1].click()
                        position = 0
                    } else {
                        const section = getWelcomeSection(currentId)
                        if (section.hasAttribute('children')) {
                            const childrentId = section.getAttribute('children');
                            if (childrentId.length > 1) {
                                let maxId = parseInt(childrentId[0], 10);
                                let currentId = parseInt(childrentId[1], 10);

                                if(maxId !== currentId) {
                                    buttons[0].classList.remove(activeClass)
                                    // buttons[0].disable = false
                                    buttons[0].removeAttribute('disabled')
                                }
                            } else {
                                buttons[0].classList.remove(activeClass)
                                buttons[0].removeAttribute('disabled')
                            }
                        }

                        animationCount.setDirection(false)
                        buttons[currentId].click()
                        position = 0
                        lock = false
                    }
                }
                lock = false
            }
        }

        let isFiringWheel = false;
        function throttleWheel(event) {
            if (isFiringWheel === false) {
                setTimeout(() => {
                    if(config.page.isMain.get()) {
                        onWheel(event);
                    }
                    isFiringWheel = false;
                }, 200);
            }
            isFiringWheel = true;
        }

        if (document.body.addEventListener) {
            if ('onwheel' in document) {
                document.body.addEventListener("wheel", throttleWheel);
            } else if ('onmousewheel' in document) {
                document.body.addEventListener("mousewheel", throttleWheel);
            } else {
                document.body.addEventListener("MozMousePixelScroll", throttleWheel);
            }
        } else {
            document.body.attachEvent("onmousewheel", throttleWheel);
        }


        let sectionChildren = {}
        let sectionChildrenContent = {}
        let containersScrollTop = []
        let sectionsScroll = []
        let offset = 0
        let offsetChukdren = 0
        let filter = 0

        // console.log('dddddddddddddd', window.screen.availHeight, window.outerHeight, window.innerHeight)
        const currentSection = () => {
            // console.log('dddddddddddddd', window.screen.availHeight)
            const topDistance = window.scrollY + window.innerHeight;
            // const topDistance = window.scrollY;
            for (let i = 0; i < containersScrollTop.length; ++i) {
                const position = containersScrollTop[i] - topDistance

                if(position > 0) {
                    const percent = position * 100 / containersScrollTop[i]
                    const reversePercent = 100 - percent
                    let heigthData = 0
                    if(heigthData === 0) {
                        heigthData = vhToPixel(100)
                    }
                    let object = []
                    for(let j = 0; j < sectionChildren[i].length; ++j) {
                        if(sectionChildrenContent[i][j].classList.contains('section_content_item_img')) {
                            const pos = sectionChildren[i][j] - topDistance

                            console.log('---------------------------', pos <= heigthData, pos > -heigthData, heigthData, sectionChildren[i][j] - topDistance)

                            // const rect = child[j].getBoundingClientRect()
                            // const bottom = Math.round(offsetChukdren + rect.height)
                            if(pos <= heigthData && pos > -heigthData ) {
                                if(sectionChildren[i][j] - topDistance > 0) {

                                    let position = sectionChildren[i][j] - topDistance

                                    object.push({
                                        i: i,
                                        j: j,
                                        this: sectionsScroll[i],
                                        container: sectionChildrenContent[i][j],
                                        isNeg: false,
                                        img: sectionChildrenContent[i][j].querySelector('img'),
                                        position: position,
                                        percent: {
                                            this: percent,
                                            invert: reversePercent
                                        }
                                    })
                                } else {
                                    let position = sectionChildren[i][j] - topDistance

                                    object.push({
                                        i: i,
                                        j: j,
                                        this: sectionsScroll[i],
                                        container: sectionChildrenContent[i][j],
                                        isNeg: true,
                                        img: sectionChildrenContent[i][j].querySelector('img'),
                                        position: position,
                                        percent: {
                                            this: percent,
                                            invert: reversePercent
                                        }
                                    })
                                }
                            }
                        }
                    }

                    // console.log('dddddddddd ---- ddddddddddd', object)
                    return  object


                }
                // sectionChildren

                // if (i !== 0) {
                    // const position = topDistance + containersScrollTop[0]
                    // const intensive = containersScrollTop[i] - position

                    // if (intensive > 0 && filter < 1) {
                    //     const height = sectionsScroll[i].getBoundingClientRect().height
                    //     const percent = Math.round((100 * intensive) / height)
                    //     const reversePercent = 100 - percent
                    //     filter = filter + 1
                        // console.log('===================================', percent)
                        // return {
                        //     this: sectionsScroll[i],
                        //     props: {
                        //         percent: percent,
                        //         reversePercent: reversePercent
                        //     }
                        // }
                    // }

                    // if (i === containersScrollTop.length - 1) {
                    //     filter = 0
                    // }
                // } else {
                //
                // }
            }
            return []
        }

        window.addEventListener('scroll', (event) => {
            const top  = window.pageYOffset || document.documentElement.scrollTop
            const object = currentSection()

            object.forEach(item => {
                console.log('---------- item.position -----------', item.position)
                if(item.isNeg) {
                    item.img.style.transform = `translateY(${item.position * -1}px)`
                } else {
                    item.img.style.transform = `translateY(${-item.position}px)`
                }

                // console.log('================', item.img)
            })

            let step = 0
            if(object?.img) {
                switch (object.i) {
                    case 0:
                        // console.log('ssssssssssssssssssssss', object.percent.this)
                        // step = object.container[0]?.clientHeight / 10
                        // object.img.style.transform = `translateY(${size((step * object.percent.this * -1) + 240, 1920)}vw)`
                        break
                    case 1:
                        // step = object.container[0]?.clientHeight / 95
                        // object.img[0].style.transform = `translateY(${size((step * object.percent.this * -1) + 240, 1920)}vw)`
                        // object.img[1].style.transform = `translateY(${size((step * object.percent.this * -1) + 10, 1920)}vw)`
                        break
                    case 2:
                        // step = object.container[0]?.clientHeight / 98
                        // object.img[0].style.transform = `translateY(${size((step * object.percent.this * -1) + 80, 1920)}vw)`
                        break
                    case 3:
                        // step = object.container[0]?.clientHeight / 98
                        // object.img[0].style.transform = `translateY(${size((step * object.percent.this * -1) + 100, 1920)}vw)`
                        // object.img[1].style.transform = `translateY(${size((step * object.percent.this * -1) + 300, 1920)}vw)`
                        break
                    case 4:
                        // step = object.container[0]?.clientHeight / 98
                        // object.img[0].style.transform = `translateY(${size((step * object.percent.this * -1) + 200, 1920)}vw)`
                        // object.img[1].style.transform = `translateY(${size((step * object.percent.this * -1), 1920)}vw)`
                        break
                    case 5:
                        // step = object.container[0]?.clientHeight / 98
                        // object.img[0].style.transform = `translateY(${size((step * object.percent.this * -1) + 200, 1920)}vw)`
                        // object.img[1].style.transform = `translateY(${size((step * object.percent.this * -1), 1920)}vw)`
                        break
                }
            }

            // if (object) {
            //     object.self.style.opacity = object.props.reversePercent / 100
            // }
            //       // movement = topDistance * 2;
            //
            //     // fadeOut(scrollIndicator[0], topDistance, 150);
            //   // tweenHeight(scrollIndicatorLine[0], topDistance, 100, 25);
            //   //
            //   // elements.forEach(function (element) {
            //   //     movement = -(topDistance * element.dataset.speed);
            //   //     move(element, movement);
            //   //     fadeOut(element, topDistance, tweenDistance);
            //   // });
        });

        window.addEventListener('change-views', (event) => {
            config.page.isMain.set(false)
            const animation = document.body.querySelector('.animation')
            const welcomeBody = document.body.shadowRoot.querySelector('.welcome-body')
            const welcomeSection = document.body.shadowRoot.querySelector('.welcome-body_section_1_0')
            const sections = document.body.shadowRoot.querySelectorAll('div[class*="welcome-body_section"]')
            let activeSection = undefined

            for(let i =0; i < sections.length; ++i) {
                if(parseInt(sections[i].dataset.id, 10) === event.detail.id) {
                    activeSection = sections[i]
                    break
                }
            }

            if(!activeSection) {
                console.assert(false, 'Должен определиться слот')
                activeSection = welcomeSection
            }

            let children = activeSection.querySelector('slot')

            children = children.assignedNodes()

            animation.style.opacity = '1';
            animation.style.display = 'grid'

            let tl = anime.timeline({
                easing: 'easeOutExpo',
                duration: 850
            });

            tl.add({
                targets: animation.querySelectorAll('.item'),
                width: '100%',
                backgroundColor: '#00A0A8',
                delay: anime.stagger(100),
                changeComplete: () => {
                    if(event.detail.type === 'transform' && event.detail.action === 'to') {
                        activeSection.style.display = 'flex'
                        welcomeBody.style.display = 'none'
                        document.body.style.overflow = 'overlay'
                        window.scrollTo(0,0)
                    }

                    if(event.detail.type === 'transform' && event.detail.action === 'from') {
                        config.page.isMain.set(true)
                        activeSection.style.display = 'none'
                        welcomeBody.style.display = 'flex'
                        document.body.style.overflow = 'hidden'
                        window.scrollTo( 0, 0);
                    }
                }
            });

            tl.add({
                targets: animation.querySelectorAll('.item'),
                delay: anime.stagger(70),
                width: '100%',
                backgroundColor: 'rgba(15,223,239,0.42)',
                changeBegin: () => {
                    for(let i = 0; i < children.length; ++i) {
                        const rect = children[i].getBoundingClientRect()
                        const bottom = Math.round(offset + rect.height)

                        if(!sectionChildren[i]) {
                            sectionChildren[i] = []
                        }

                        if(!sectionChildrenContent[i]) {
                            sectionChildrenContent[i] = []
                        }

                        const child = children[i].shadowRoot.querySelector('.section_content').children
                        for(let j = 0; j < child.length; ++j) {
                            const rect = child[j].getBoundingClientRect()
                            const bottom = Math.round(offsetChukdren + rect.height)
                            sectionChildren[i].push(bottom)
                            sectionChildrenContent[i].push(child[j])
                            offsetChukdren = bottom
                        }

                        sectionsScroll.push(children[i])
                        containersScrollTop.push(bottom)
                        offset = bottom
                    }

                    animation.style.opacity = '0';
                },
                changeComplete: () => {
                    animation.style.display = 'none';
                    let offset = 0
                }
            });
        })

        resolve()
    })
}

export default () => {

}