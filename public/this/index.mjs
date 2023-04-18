import virtualDOM from './virualDom/index.mjs'
import virtualCSS from './virualDom/index.css' assert { type: 'css' }
import lightCSS from './css/index.light.css' assert  { type: 'css' }
export { task, loadHTML, timer, activeClass, normalizePathName, idKey } from './mjs/index.mjs'
export { config, taskProperty, taskRelation, store, eventsName  } from './config/index.mjs'
export { verification, init, onload, slotRouter } from './init/index.mjs'
export { virtualDOM }
export { virtualCSS }
export { lightCSS }
export default {
    description: 'all modules for this'
}