import dex from './dex/index.mjs'

export default (self, admin) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve({
        dex: dex
      })
    } catch (e) {
      resolve({
        message: e
      })
    }
  })
}