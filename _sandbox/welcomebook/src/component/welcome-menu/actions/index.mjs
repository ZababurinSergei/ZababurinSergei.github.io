import {activeClass} from '../../../this/index.mjs'
import { initSections } from '../custom/index.mjs'

export default (self) => {
    return new Promise(async (resolve, reject) => {
        const method = await initSections(self)

        resolve({
            ferButton: async (event) => {
                method.activeAnimation(event)
                method.animateMenu(event)
            }
        })
    })
}
