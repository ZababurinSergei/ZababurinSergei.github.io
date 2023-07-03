import { taskRelation, task, activeClass } from "../../../../this/index.mjs";
export default async (self, actions) => {
    const icon = self.shadowRoot.querySelector('svg')
    const text = self.shadowRoot.querySelector('.rules-relation_container_name')
    const container = self.shadowRoot.querySelector('.rules-relation_container')

    return {
        init: () => {
            for(let list of taskRelation.events['API-RELATION']) {
                task.get(true, 'await', '5', '', list.id, async (object) => {
                    if(object.relation !== self.dataset.event) {
                        icon.classList.remove(activeClass)
                        text.classList.remove(activeClass)
                        container.classList.remove(activeClass)
                    }
                    object.callback({
                        _scriptDir: import.meta.url,
                        status: true
                    })
                })
            }
        },
        terminate: () => {

        }
    }
}