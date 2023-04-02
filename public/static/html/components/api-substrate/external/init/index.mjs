import task from '/static/html/components/component_modules/heap/index.mjs'
// import terminal from '/dex/components/terminal/browser.js'
import {normalizePathName, verification, config, state} from '../index.mjs'

let timerId = undefined

export default async (self) => {
    const pathname = normalizePathName(window.location.pathname)
    let linkHeader = self.querySelector('.grid__header_substrate')

    switch (pathname.toLowerCase()) {
        // case '/dex/':
            // terminal(self)
            // break
        case '/dex/processor/':
            linkHeader.textContent = 'Link'
            break
        default:
            // linkHeader.innerHTML = ''    
            // for(let item of config.link) {
                // linkHeader.insertAdjacentHTML('beforeend', `
                    // <link-auction
                        // to=${item.to}
                        // class=${item.className}
                    // >
                        // ${item.title}
                    // </link-auction>`)
                // }
            break
    }



    //todo вынести в конфг как переключатель для хедера свойств
    // const gridHeaderProperty = self.querySelector('.grid__header_property')
    // task.header(gridHeaderProperty)

    // timerId = setInterval(async () => {
    //     await task.list()
    // }, 1000);

    // let template = ''
    // const main = self.querySelector('#substrate .main')
// 
    // console.log(`   🟢 template for ${pathname}`, property_relation.has(pathname))

    // if(property_relation.has(pathname)) {
        // template = property_relation.get(pathname).tag()
    // } else {
        // template = property_relation.get('default').tag()
    // }
// 
    // main.innerHTML = ''
    // main.insertAdjacentHTML('afterbegin', template)

    // task.set(true, 'T','red', { }, '/fitAddon/fit/').catch(e => console.error('api-dex',e));

    return true
}