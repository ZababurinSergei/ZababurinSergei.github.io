import {loadHTML} from '../index.mjs'

let components = new Map();

components.set('default', [{
    type: 'component',
    template: async (slot, props = {}) => {
        let template = ''
        let keys = []
        switch(slot) { 
            default:
                console.error('Неизвестный API-FOOTER слот: ', slot)
            break
        }
    }
}])


export default components