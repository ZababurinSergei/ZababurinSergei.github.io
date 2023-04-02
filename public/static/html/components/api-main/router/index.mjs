import task from '/static/html/components/component_modules/heap/index.mjs'
import { store, normalizePathName } from '/static/html/components/api-substrate/external/index.mjs'

export default (self) => {
    for(let pathname of  store.substrate) {
        task.get(true, 'await', '5', '', pathname, async (object) => {
            let pathName = normalizePathName(window.location.pathname)

            console.log(`   🟢 MAIN ROUTER ${object.relation}`)
            object.callback({
                _scriptDir: import.meta.url,
                status: true
            })
        })
    }
}