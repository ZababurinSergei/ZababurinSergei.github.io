export const init = (self) => {
    return new Promise(async (resolve, reject) => {
        const shadowDom = []

        for (let i = 0; i < self.children.length; ++i) {
            let isShadowDom = !self.children[i].tagName.includes('-')

            if(self.children[i].dataset.exclusion !== undefined) {
                isShadowDom = !isShadowDom
            }

            if(isShadowDom) {
                shadowDom.push(self.children[i])
            }
        }

        if (shadowDom.length > 0) {
            let link = `../../../component/${self.tagName.toLowerCase()}/views/css/index.shadow.css`

            if (!self.shadowRoot) {
                self.attachShadow({mode: 'open'})
            }

            if (self.dataset.cssShadow) {
                link = `../../../component/${self.tagName.toLowerCase()}/views/css/${self.dataset.cssShadow}.shadow.css`
            }

            let styleShadow = (await import(link, {
                assert: {
                    type: "css",
                },
            }))['default'];

            self.shadowRoot.adoptedStyleSheets = [...self.shadowRoot.adoptedStyleSheets, styleShadow];

            for (let i = 0; i < shadowDom.length; ++i) {
                self.shadowRoot.appendChild(shadowDom[i])
            }
        }

        self.open = false
        resolve(self)
    })
}

export default {
    description: 'add style and template'
}