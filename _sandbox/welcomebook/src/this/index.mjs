import { svg } from './img/diagram/index.mjs'
import shadowCSS from './css/index.shadow.css' assert { type: 'css' }
import lightCSS from './css/index.light.css' assert { type: 'css' }
export { verification, init, onload, slotRouter } from './init/index.mjs'

export {
    loadHTML,
    pixelToVH,
    pixelToVW,
    size,
    vhToPixel,
    vwToPixel,
    clearnPx,
    activeClass,
    normalizePathName,
    events,
    delay,
    animationCount,
    randomColor,
    anime
} from './mjs/index.mjs'
export { config } from './config/index.mjs'
export { shadowCSS }
export { lightCSS }
export default {
    description: 'all modules for this'
}