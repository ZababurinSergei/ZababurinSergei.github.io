import task from '/static/html/components/component_modules/heap/index.mjs'
import { property_relation } from '/static/html/components/api-substrate/external/template/index.mjs'
// import terminal from '/dex/components/terminal/browser.js'
import { normalizePathName, verification, store, state } from '../index.mjs'


export default async (self) => {
    for(let pathname of  store.substrate) {

        task.get(true, 'await', '5', '', normalizePathName(pathname), async (object)=> {
            let pathname = normalizePathName(window.location.pathname)
            
            const main = self.querySelector('#substrate .main')
            let template = ''

            console.log(`   🟢 ${object.relation} set template`, property_relation.has(object.relation))

            if(property_relation.has(object.relation)) {
                template = property_relation.get(object.relation).tag()
            } else {
                template = property_relation.get('default').tag()
            }

        
            main.innerHTML = ''
            main.insertAdjacentHTML('afterbegin', template)




            // task.set(true, 'T','red', { }, '/fitAddon/fit/').catch(e => console.error('api-dex',e));

            switch (pathname.toLowerCase()) {
                case '/dex/':
                    // terminal(self)
                    break
                default:
                    // console.warn('Роутне обрабатывается', 'api-substrate', pathName)
                    break
            }

            object.callback({
                _scriptDir: import.meta.url,
                status: true
            })
        })
    }
}