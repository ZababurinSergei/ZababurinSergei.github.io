import { virtualDOM, virtualCSS, lightCSS } from './this/index.mjs'

export default async (mountPoint, Context) => {
    const shadow = mountPoint.attachShadow({mode: "open"});

    let root = document.createElement('div')
    root.id = 'root'
    for(let item of virtualCSS.cssRules) {
        if(item.selectorText.split('__')[0] === '#index-module_root') {
            root.id = item.selectorText.replace('#','')
            break
        }
    }

    shadow.appendChild(root)

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, lightCSS];
    shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, virtualCSS];
    const virtual = Symbol("virtual");

    const shadowRoot = await virtualDOM(virtual, shadow.querySelector(`#${root.id}`), Context)
    shadowRoot.render(shadowRoot[virtual].app);
    return shadowRoot[virtual].app
}