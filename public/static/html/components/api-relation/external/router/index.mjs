import task from '/static/html/components/component_modules/heap/index.mjs'
import api from '../api/api.mjs';
import matcher from '../api/matcher.mjs';
import { store, normalizePathName, eventsName} from '/static/html/components/api-substrate/external/index.mjs'

//TODO надо перенести в основной компонент что бы событие обрабатывалось  с начала

export default (self) => {
    let request = undefined
    for(let pathname of  store.substrate) {
        task.get(true, 'await', '5', '', pathname, async (object) => {
            let pathName = normalizePathName(window.location.pathname)
            // let element = self.querySelector('.relation')
            // element.innerHTML = '';

            // switch (pathName.toLowerCase()) {
                // case '/dex/':
                    // request = (await api()).concat(await matcher())
                    // forEach(request, 'api-relation', (html) => {
                        // element.insertAdjacentHTML('afterbegin', html)
                    // })
                    // return request
                // default:
                    // console.warn('Роут не обрабатывается', 'api-relation', pathName)
                    // break
            // }

            console.log(`   🟢 RELATION ROUTER ${object.relation} set template`)
            object.callback({
                _scriptDir: import.meta.url,
                status: true
            })
        })
    }

    for(const event of eventsName[self.tagName]) {
        task.get(true, 'await', '5', '', event, async (object) => {
            let pathName = normalizePathName(window.location.pathname)

            console.log(`   🟩 RELATION BUTTON EVENT ${object.relation}`)
            object.callback({
                _scriptDir: import.meta.url,
                status: true
            })
        })
    }
}