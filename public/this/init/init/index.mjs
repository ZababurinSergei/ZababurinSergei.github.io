// import {html} from "../../../static/html/components/api-header/template/index.mjs";

export const init = (self) => {
    return new Promise(async (resolve, reject) => {
        const shadowDom = []
        const isTemplate = self.dataset.template !== undefined

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
        }
        resolve(self)
    })
}

export default {
    description: 'add style and template'
}