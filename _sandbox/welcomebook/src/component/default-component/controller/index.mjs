import addEventListener from './addEventListener/index.mjs'
import task from './task/index.mjs'
export const controller = (self, actions) => {
    return new Promise(async (resolve, reject) => {

        resolve({
            addEventListener: await addEventListener(self, actions),
            task: await task(self, actions)
        })
    })
}