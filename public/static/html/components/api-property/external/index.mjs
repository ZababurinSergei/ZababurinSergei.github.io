import task from '/static/html/components/component_modules/heap/index.mjs'
import router from './router/index.mjs'

let property = {
    header: undefined,
    property: undefined,
    queue: [],
    init: (v,p,c,s,r) => {
        router(s.this)
        property.property = s.this.shadowRoot.querySelector('.property')
        task.property(property.property)
        if(property.queue.length > 0) {
            property.property.innerHTML = ''
          for(let html of property.queue) {
              property.property.insertAdjacentHTML('afterbegin', html)
          }
        }
    }
}

export default property