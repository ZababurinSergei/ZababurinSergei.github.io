import { state, activeClass, setTime } from '../../api-substrate/external/index.mjs';
import task from '/static/html/components/component_modules/heap/index.mjs'
import topology from '/static/html/components/api-button/events/actions/html.topology.mjs'
export default (self) => {
  return new Promise(async (resolve, reject) => {
    const element = self.getRootNode().host
    const events = async (object) => {
      console.log('   🥎 api-button end', state, element.tagName)
      element.disabled = true
      let item = self.host.shadowRoot.querySelector('p')

      for(let event of object.substrate.events) {
        if(event.type === element.dataset.type) {
          if(element.dataset.role === event.state) {
           
            // console.log(`🥎🥎 1|0 ${element.dataset.event}  ${element.dataset.role} ${(new URL(import.meta.url)).pathname} /api-button/modules/index.mjs`, event)
            item.classList.add(activeClass)
            const timeId = setTimeout(() => {
              // item.classList.remove(activeClass)
              element.disabled = false
              clearTimeout(timeId)
            },setTime)
          } else {
            // console.log(`🥎🥎 0|1 ${element.dataset.event}  ${element.dataset.role} ${(new URL(import.meta.url)).pathname} /api-button/modules/index.mjs`, event)
          }
        } else {
          item.classList.remove(activeClass)
          const timeIdAll = setTimeout(() => {
            element.disabled = false
            clearTimeout(timeIdAll)
          },setTime)
        }
      }
      // element.disabled = false
      object.callback({
        'meta.url': import.meta.url,
        status: true
      })
    }

    task.get(true, 'await', '5', '',element.dataset.event, events)

    resolve(self)
  })
}