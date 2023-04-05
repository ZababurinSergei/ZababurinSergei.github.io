import virtualDOM from './virualDom/index.mjs'
import virtualCSS from './virualDom/index.css' assert { type: 'css' }
import lightCSS from './css/index.light.css' assert  { type: 'css' }
export { loadHTML } from './mjs/index.mjs'
export { init, onload, slotRouter } from './init/index.mjs'
export { virtualDOM }
export { virtualCSS }
export { lightCSS }
export default {
    description: 'all modules for this'
}