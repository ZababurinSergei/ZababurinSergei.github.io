import { normalizePathName } from "../../../this/index.mjs";
import MKB from '/services/mkb/build/index.mjs'
import lightCSS from '/services/mkb/build/index.css' assert {type: "css"}
export default (self) => {
    return new Promise(async (resolve, reject) => {
        const divRoot = document.createElement('div')
        divRoot.id = 'root'

        const pathname = normalizePathName(window.location.pathname)
        let linkHeader = self.shadowRoot.querySelector('.grid__header_substrate')

        const shadowRoot = self.shadowRoot.querySelector('#shadow')
        const shadow = shadowRoot.attachShadow({mode: "open"});
        shadow.appendChild(divRoot)

        document.adoptedStyleSheets = [...document.adoptedStyleSheets, lightCSS];
        shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, lightCSS];

        shadow.appendChild(divRoot)

        const virtualDom = Symbol("virtualDOM");

        let mkb = await MKB(virtualDom, shadow)

        mkb[virtualDom].app.props.root = {}

        mkb.render(mkb[virtualDom].app);

        switch (pathname.toLowerCase()) {
            case '/dex/processor/':
                linkHeader.textContent = 'Link'
                break
            default:
                break
        }

        resolve({


        })
    })
}
