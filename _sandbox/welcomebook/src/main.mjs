
export const welcomebook = (mount = {}) => {
    return new Promise(async (resolve, reject) => {
        window.scrollTo(0, 0)

        const {pathname, CSSVariables, mountPoint, template} = Object.assign({
            pathname: '.',
            mountPoint: document.body,
            template: undefined,
            CSSVariables: undefined
        }, mount);

        if (CSSVariables) {
            for (let type in CSSVariables) {
                if (type === 'root') {
                    for (let key in CSSVariables[type]) {
                        mountPoint.style.setProperty(key, CSSVariables[type][key]);
                    }
                }
            }
        }

        const {
            shadowCSS,
            lightCSS,
            events,
            animationCount,
            activeClass,
            config,
            anime,
            size,
            vhToPixel
        } = await import(`${pathname}/this/index.mjs`)

        const components = ['welcome-diagram','welcome-feedback', 'welcome-logo', 'fer-link', 'fer-hash', 'fer-button', 'fer-scroll', 'welcome-menu', 'welcome-section', 'welcome-header']

        for (let i = 0; i < components.length; ++i) {
            import(`${pathname}/component/${components[i]}/index.mjs`)
        }

        window.scrollTo(0, 0)

        let templateContent = template
            ? template.content
            : mountPoint

        let shadow = mountPoint.attachShadow({mode: "open"});

        const raleway = new FontFace('Raleway', `url(${pathname}/this/fonts/Raleway/Raleway-VariableFont_wght.ttf)`)
        const ralewayItalic = new FontFace('Raleway italic', `url(${pathname}/this/fonts/Raleway/Raleway-Italic-VariableFont_wght.ttf)`)

        raleway.load().then(function (loaded_face) {
            document.fonts.add(loaded_face)
            // shadow.fonts.add(loaded_face)
        }).catch(function (error) {
            console.log('error', error)
        });

        ralewayItalic.load().then(function (loaded_face) {
            // shadow.fonts.add(loaded_face)
            document.fonts.add(loaded_face)
        }).catch(function (error) {
            console.log('error', error)
        });

        shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, shadowCSS];
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, lightCSS];

        let shadowData = templateContent.querySelector('.welcome__book')
        shadow.appendChild(shadowData)

        if (template) {
            mountPoint.appendChild(templateContent)
        }

        // const mainCss = document.createElement('style')
        // mainCss.innerText = `@import "./main.css";`
        // shadow.appendChild(mainCss)
        // document.body.appendChild(mainCss)

        let menu = document.body.querySelector('welcome-menu')
        let buttons = menu.querySelectorAll('fer-button')
        let welcomeLogo = document.body.querySelector('welcome-logo')

        const current = () => {
            for (let item of buttons) {
                if (item.classList.contains(activeClass)) {
                    return item.dataset.id
                }
            }
            return 0
        };

        const sensitivity = 340
        const mousemove = (event) => {
            const currentId = current()
            if (currentId !== 0) {
                if (event.clientX < sensitivity && welcomeLogo.dataset.id !== '0') {
                    if (menu.classList.contains('sliderOut')) {
                        menu.classList.replace('sliderOut', 'sliderIn')
                    } else {
                        menu.classList.add('sliderIn')
                    }
                } else {
                    // let timeId = setTimeout(() => {
                    //     clearTimeout(timeId)
                    //     menu.classList.replace('sliderIn', 'sliderOut')
                    // }, 20000)
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
            for (let i = 0; i < sections.length; ++i) {
                if (sections[i].dataset.id === currentId) {
                    return sections[i]
                }
            }
            return undefined
        }

        document.addEventListener('mousemove', throttleEvent)


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
                }

            })

            return isNextSectionById
        }

        const welcomeSection = mountPoint.querySelectorAll('welcome-section')
        let position = 0
        let lock = false
        const onWheel = (event) => {
            if (!lock) {
                lock = true
                event = event || window.event;
                let delta = event.deltaY || event.detail || event.wheelDelta;
                position = position + delta
                let currentId = undefined
                if (position > 100) {
                    currentId = current().toString()
                    //__zb__
                    const currentLength = currentId.split('_')
                    if(currentLength.length === 1) {
                        if ((parseInt(currentId, 10) + 1) < buttons.length) {
                            let step = 0
                            if(isNextSectionById(welcomeSection, currentId)) {
                                step = 1
                            }
                            animationCount.setDirection(true)
                            buttons[parseInt(currentId, 10) + step].click();
                            position = 0
                        } else {
                            position = 0
                            lock = false
                        }
                    }
                } else if (position < -100) {
                    currentId = current()

                    if (currentId - 1 >= 0) {
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

                                if (maxId !== currentId) {
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
                    if (config.page.isMain.get()) {
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

        const currentSection = () => {
            const topDistance = window.scrollY + window.innerHeight;

            for (let i = 0; i < containersScrollTop.length; ++i) {
                const position = containersScrollTop[i] - topDistance

                if (position > 0) {
                    const percent = position * 100 / containersScrollTop[i]
                    const reversePercent = 100 - percent
                    let heigthData = 0

                    if (heigthData === 0) {
                        heigthData = vhToPixel(100)
                    }

                    let object = []

                    for (let j = 0; j < sectionChildren[i].length; ++j) {
                        if (sectionChildrenContent[i][j].classList.contains('section_content_item_img')) {
                            const pos = sectionChildren[i][j] - topDistance

                            if (pos <= heigthData && pos > -heigthData) {
                                if (sectionChildren[i][j] - topDistance > 0) {

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

                    return object
                }
            }
            return []
        }

        window.addEventListener('scroll', (event) => {
            const top = window.pageYOffset || document.documentElement.scrollTop
            const object = currentSection()

            object.forEach(item => {
                if (item.isNeg) {
                    item.img.style.transform = `translateY(${item.position * -1}px)`
                } else {
                    item.img.style.transform = `translateY(${-item.position}px)`
                }
            })
        });

        window.addEventListener('change-views', (event) => {
            config.page.isMain.set(false)
            let id = {}
            id.array = event.detail.id.split('_')
            id.section = event.detail.section
            id.isFirst = id.array.length === 1
            const animation = mountPoint.querySelector('.animation')
            const welcomeBody = mountPoint.shadowRoot.querySelector('.welcome-body')
            const welcomeSection = mountPoint.shadowRoot.querySelector('.welcome-body_section_1_0')
            const welcomeLogo = mountPoint.querySelector('welcome-logo')
            const ferScroll = mountPoint.querySelector('fer-scroll')
            const welcomeMenu = mountPoint.querySelector('welcome-menu')
            const sections = mountPoint.shadowRoot.querySelectorAll('div[class*="welcome-body_section"]')
            let activeSection = undefined
            const welcomeSections = mountPoint.querySelectorAll(`welcome-section[data-id*="${id.array[0]}_"]`)
            const percent = '15vh'
            if(id.isFirst) {
                for (let i = 0; i < sections.length; ++i) {
                    if (sections[i].dataset.id === event.detail.id) {
                        activeSection = sections[i]
                        break
                    }
                }

                if (!activeSection) {
                    // console.assert(false, 'Должен определиться слот')
                    activeSection = welcomeSection
                }

                const self = document
                const root = self.getRootNode()
                const welcomeSectionActive = root.querySelector(`welcome-section[data-id="${activeSection.dataset.section}"]`)
                const hasAnimations = welcomeSectionActive.shadowRoot.querySelectorAll('.has-animation')

                for(let i =0; i < welcomeSections.length;++i) {
                    if(welcomeSections[i].dataset.id === id.section) {
                        welcomeLogo.dataset.id = welcomeSections[i].dataset.id
                        welcomeLogo.section = id.section
                        ferScroll.section = id.section
                        // console.log('!!!!!!!!!!!!!!!!!', welcomeSections[i].dataset.id, id.section)
                    }
                }

                // welcomeLogo.dataset.id = activeSection.dataset.section



                // console.log('😔 SECTIONS 😔 ',sections, activeSection.dataset.section, event.detail.id)
                let children = activeSection.querySelector('slot')

                children = children.assignedNodes()

                animation.style.opacity = '1';
                animation.style.display = 'grid'

                let currentSection = {}

                let tl = anime.timeline({
                    easing: 'easeOutExpo',
                    duration: 850
                });

                tl.add({
                    targets: animation.querySelectorAll('.item'),
                    height: percent,
                    backgroundColor: '#00A0A8',
                    delay: anime.stagger(100),
                    changeComplete: () => {
                        if (event.detail.type === 'transform' && event.detail.action === 'to') {
                            for(let i = 0; i < welcomeSections.length; ++i) {
                                if(welcomeSections[i].dataset.id === id.section) {
                                    currentSection = welcomeSections[i]
                                }
                            }


                            activeSection.style.display = 'flex'
                            welcomeBody.style.display = 'none'
                            // document.body.style.overflow = 'overlay'
                            welcomeLogo.style.top = 'calc(100% - 6.5vw)'
                            welcomeLogo.style.left = 'unset'
                            welcomeLogo.style.right = '5%'
                            // const color = getComputedStyle(ferScroll).getPropertyValue('--color');
                            welcomeMenu.style.display = 'none'
                            ferScroll.style.setProperty("--color", '#000000');
                            // const welcomeLogoOutSide = ferScroll.shadowRoot.querySelector('span')

                            const welcomeLogoOutSide = welcomeLogo.shadowRoot.querySelector('.welcome-logo')
                            const squareButtom = welcomeLogo.shadowRoot.querySelector('.square-buttom')
                            const squareTitle = welcomeLogo.shadowRoot.querySelector('.square-title')

                            welcomeLogoOutSide.style.border = '0.20833vw solid #000000'
                            // welcomeLogoOutSide.style.background = '#000000'
                            squareButtom.style.background = '#000000'
                            squareTitle.style.color = '#fff'

                            welcomeLogo.shadowRoot.querySelector('.square-title').textContent = 'Назад';
                            // welcomeLogo.style.position = 'fixed'
                            // ferScroll.style.position = 'fixed'
                            //

                            hasAnimations.forEach(item => {
                                item.classList.add('animate-in')
                            })
                        }

                        if (event.detail.type === 'transform' && event.detail.action === 'from') {
                            config.page.isMain.set(true)
                            activeSection.style.display = 'none'
                            welcomeBody.style.display = 'flex'
                            document.body.style.overflow = 'hidden'
                            // window.scrollTo(0, 0);
                        }
                    }
                });

                tl.add({
                    targets: animation.querySelectorAll('.item'),
                    delay: anime.stagger(70),
                    height: percent,
                    backgroundColor: 'rgba(15,223,239,0.42)',
                    changeBegin: () => {
                        currentSection.scrollIntoView()

                        for (let i = 0; i < children.length; ++i) {
                            const rect = children[i].getBoundingClientRect()
                            const bottom = Math.round(offset + rect.height)

                            if (!sectionChildren[i]) {
                                sectionChildren[i] = []
                            }

                            if (!sectionChildrenContent[i]) {
                                sectionChildrenContent[i] = []
                            }

                            const child = children[i].shadowRoot.querySelector('.section_content').children

                            for (let j = 0; j < child.length; ++j) {
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
                    }
                })
            } else {
                for (let i = 0; i < sections.length; ++i) {
                    if (sections[i].dataset.id === id.array[0]) {
                        activeSection = sections[i]
                        break
                    }
                }

                if (!activeSection) {
                    console.assert(false, 'Должен определиться слот')
                    activeSection = welcomeSection
                }

                welcomeLogo.section = activeSection.dataset.section
                ferScroll.section = activeSection.dataset.section

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
                    height: percent,
                    backgroundColor: '#00A0A8',
                    delay: anime.stagger(100),
                    changeComplete: () => {
                        if (event.detail.type === 'transform' && event.detail.action === 'to') {
                            activeSection.style.display = 'none'
                            welcomeBody.style.display = 'flex'
                            welcomeSections.forEach(item => {
                                item.style.transform =  `translateY(0)`
                            })

                            welcomeMenu.style.display = 'flex'
                            welcomeLogo.dataset.id = id.array[0]
                            welcomeLogo.section = `${id.array[0]}_0`
                            ferScroll.section = id.array[0]
                            ferScroll.class = `fer-scroll_${id.array[0]}`
                            ferScroll.style.setProperty("--color", '#ffffff');
                            const welcomeLogoOutSide = welcomeLogo.shadowRoot.querySelector('.welcome-logo')
                            const squareButtom = welcomeLogo.shadowRoot.querySelector('.square-buttom')
                            const squareTitle = welcomeLogo.shadowRoot.querySelector('.square-title')
                            squareTitle.style.color = 'black'
                            welcomeLogoOutSide.style.border = '0.20833vw solid #ffffff'
                            squareButtom.style.background = '#ffffff'

                            welcomeLogo.style.top = 'calc(100% - 12.3vw)'
                            welcomeLogo.style.left = '49.67%'
                            welcomeLogo.style.right = 'unset'
                            welcomeLogo.shadowRoot.querySelector('.square-title').textContent = 'Больше'

                            window.scrollTo(0, 0)

                        }

                        if (event.detail.type === 'transform' && event.detail.action === 'from') {
                            config.page.isMain.set(true)
                            activeSection.style.display = 'none'
                            welcomeBody.style.display = 'flex'
                            document.body.style.overflow = 'hidden'
                            window.scrollTo(0, 0);
                        }
                    }
                });

                tl.add({
                    targets: animation.querySelectorAll('.item'),
                    delay: anime.stagger(70),
                    height: percent,
                    backgroundColor: 'rgba(15,223,239,0.42)',
                    changeBegin: () => {
                        for (let i = 0; i < children.length; ++i) {

                            const rect = children[i].getBoundingClientRect()
                            const bottom = Math.round(offset + rect.height)

                            if (!sectionChildren[i]) {
                                sectionChildren[i] = []
                            }

                            if (!sectionChildrenContent[i]) {
                                sectionChildrenContent[i] = []
                            }

                            const child = children[i].shadowRoot.querySelector('.section_content').children

                            for (let j = 0; j < child.length; ++j) {
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
                        config.page.isMain.set(true)
                        animation.style.display = 'none';
                    }
                })
            }

        })

        resolve()
    })
}

export default () => {

}