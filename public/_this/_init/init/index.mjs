// import template from "../template/index.mjs";
// import styleShadow from "../template/css/index.shadow.css"  assert { type: 'css' };
// import cssLoader from "../template/css/loader/index.mjs";

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

        if(shadowDom.length > 0) {
            if(!self.shadowRoot) {
                self.attachShadow({mode: 'open'})
            }

            let styleShadow = (await import(`/component/${self.tagName.toLowerCase()}/views/css/index.shadow.css`, {
                assert: {
                    type: "css",
                },
            }))['default'];

            self.shadowRoot.adoptedStyleSheets = [...self.shadowRoot.adoptedStyleSheets, styleShadow];

            for(let i = 0; i < shadowDom.length; ++i) {
                self.shadowRoot.appendChild(shadowDom[i])
            }
        }

        let styleLight = (await import(`/component/${self.tagName.toLowerCase()}/views/css/index.light.css`, {
            assert: {
                type: "css",
            },
        }))['default'];

        document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleLight];

        self.open = false
        resolve(self)
    })
}

export default {
    description: 'add style and template'
}