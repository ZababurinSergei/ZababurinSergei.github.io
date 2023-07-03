// import {html} from "../../../static/html/components/api-header/template/index.mjs";

export const init = (self) => {
    return new Promise(async (resolve, reject) => {
        const shadowDom = []
        const isTemplate = self.dataset.template !== undefined
        const isLight = "csslight" in self.dataset
        const isAttachShadow = "attachshadow" in self.dataset

        if(isAttachShadow) {
            self.attachShadow({mode: 'open'})
            let link = `../../../component/${self.tagName.toLowerCase()}/views/css/index.shadow.css`
            let styleShadow = (await import(link, {
                assert: {
                    type: "css",
                },
            }))['default'];

            self.shadowRoot.adoptedStyleSheets = [...self.shadowRoot.adoptedStyleSheets, styleShadow];
        }

        if(isLight) {
            const name = self.dataset.csslight.length === 0 ? 'index' : self.dataset.csslight
            const link = `../../../component/${self.tagName.toLowerCase()}/views/css/${name}.light.css`
            const root = self.getRootNode()
            const styleLight = (await import(link, {
                assert: {
                    type: "css",
                },
            }))['default'];


            root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleLight];
        }

        if (isTemplate) {
            const { html } = await import(`../../../component/${self.tagName.toLowerCase()}/views/index.mjs`)

            const template = html.has(self.slot)
                ? await html.get(self.slot)[0].template(self.slot)
                : await html.get('default')[0].template(self.slot)

            self.innerHTML = ''
            self.insertAdjacentHTML('afterbegin', template)
        } else {
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

                if (self.dataset.cssshadow) {
                    link = `../../../component/${self.tagName.toLowerCase()}/views/css/${self.dataset.cssshadow}.shadow.css`
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
        }
        resolve(self)
    })
}

export default {
    description: 'add style and template'
}