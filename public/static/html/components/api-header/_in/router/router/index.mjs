import task from '/static/html/components/component_modules/heap/index.mjs'
import { store } from '/static/html/components/api-substrate/external/index.mjs'

export default (self) => {
    for(let pathname of  store.substrate) {
        task.get(true, 'await', '5', '', pathname, async (object) => {
            console.log(`   🟢p🟢p🟢 ${object.relation} set template`, self)

            object.callback({
                _scriptDir: import.meta.url,
                status: true
            })
        })
    }
}