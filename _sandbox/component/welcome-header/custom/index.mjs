import { delay } from '../../../this/index.mjs'
export const welcomeHeader = async (self, event) => {
    if(event.detail.isDisable) {
        await delay(900)
        self.style.display = 'none'
    } else {
        self.style.display = 'flex'
    }
}