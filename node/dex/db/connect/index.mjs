import webStorage from './web3-storage/index.mjs';
import pg from './pg/index.mjs'
import sql from './mysql/soundcheck.connect.mjs'

const FINDER = await pg()

export { sql }
export { webStorage };
export {FINDER}
export default {
    webStorage: webStorage
}
