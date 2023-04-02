import task from '/static/html/components/component_modules/heap/index.mjs'
import { store, normalizePathName, eventsName} from '/static/html/components/api-substrate/external/index.mjs'

export default (self) => {
    for(let pathname of  store.substrate) {
        task.get(true, 'await', '5', '', pathname, async (object) => {
            console.log(`   🟢 PROPERTY ROUTER ${object.relation}`)

            object.callback({
                _scriptDir: import.meta.url,
                status: true
            })
        })
    }

    for(const event of eventsName[self.tagName]) {
        task.get(true, 'await', '5', '', event, async (object) => {
            let pathName = normalizePathName(window.location.pathname)

            console.log(`      🟩 PROPERTY BUTTON EVENT ${object.relation}`)
            object.callback({
                _scriptDir: import.meta.url,
                status: true
            })
        })
    }
}