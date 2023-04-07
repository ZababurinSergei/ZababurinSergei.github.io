import virtualRootCSS from './css/index.shadowRoot.css' assert { type: 'css' }
import lightDomCSS from './css/index.lightDom.css' assert { type: 'css' }
export { verification, init, onload, slotRouter } from './init/index.mjs'
export { pixelToVH, pixelToVW, customPixelToVW, vhToPixel, vwToPixel, clearnPx,
        activeClass, normalizePathName, events, delay } from './mjs/index.mjs'

export { virtualRootCSS }
export { lightDomCSS }
export default {
    description: 'all modules for this'
}