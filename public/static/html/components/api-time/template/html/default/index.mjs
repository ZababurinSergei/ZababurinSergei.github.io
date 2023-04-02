import {loadHTML} from '../index.mjs'
let hydration = new Function('test', 'template', 'return template');

let components = new Map();

components.set('/dex/processor/', [{
    type: 'component',
    template: async (children) => {
        const template = (await loadHTML('./template/index.html', import.meta.url)).content.cloneNode(true);
        return template
    }
}])

components.set('default', [{
    type: 'component',
    template: async (slot, props = {}) => {
        let template = ''
        let keys = []

        switch(slot) {
            case"footer_relation":
                template = await loadHTML('./relation/index.html', import.meta.url);
                keys = Object.keys(props)
                
                for(let key of keys) {
                    template = template.replace(`\${${key}\}`, props[key])
                }
                
                return template
            case"footer_substrate":
                template = await loadHTML('./substrate/index.html', import.meta.url);
                keys = Object.keys(props)
                
                for(let key of keys) {
                    template = template.replace(`\${${key}\}`, props[key])
                }
                
                return template
            case"footer_property":
                template = await loadHTML('./property/index.html', import.meta.url);
                keys = Object.keys(props)
                
                for(let key of keys) {
                    template = template.replace(`\${${key}\}`, props[key])
                }
                
                return template
            default:
                console.error('API-TIME Неизвестный слот : ', slot)
                break
        }
    }
}])


export default components