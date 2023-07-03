import virtualDOM from './virualDom/index.mjs'
import virtualCSS from './virualDom/index.css' assert { type: 'css' }

import shadowCSS from './css/index.shadow.css' assert { type: 'css' }
import lightCSS from './css/index.light.css' assert { type: 'css' }

export { task, loadHTML, timer, activeClass, normalizePathName, idKey, isEmpty, emoji } from './mjs/index.mjs'
export { config, taskProperty, taskRelation, eventsName, link  } from './config/index.mjs'
export { verification, init, onload, slotRouter } from './init/index.mjs'
export { virtualDOM }
export { virtualCSS }
export { lightCSS }
export { shadowCSS }
export { store } from './store/index.mjs'
export default {
    description: 'all modules for this',
    store: 'https://github.com/jaywcjlove/store.js'
}