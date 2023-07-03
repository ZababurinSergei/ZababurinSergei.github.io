import {taskRelation} from "../../../this/index.mjs";

export default (self) => {
    return new Promise(async (resolve, reject) => {

        let menu = self.shadowRoot.querySelector('.api-relation')
        menu.innerHTML = ''
        for(let i = 0; i < taskRelation.events[self.tagName].length; ++i) {
            const item = taskRelation.events[self.tagName][i]
            menu.insertAdjacentHTML('beforeend', `
                <api-button
                    data-role="aside"
                    data-services-path="system"
                    data-cssshadow="rules"
                    data-key="${i}"
                    data-type="api-relation"
                    data-event="${item.id}"
                    class="api-relation__relation_button"
                >
                <div class="rules-relation_container">
                    ${item.icon}
                    <p class="rules-relation_container_name">
                       ${item.name}
                    </p>
                </div>
                   
                </api-button>
            `)
        }

        resolve({
            _doRender: (event) => {
                console.log('🏤 RENDER Relation 🏤', event)
            }
        })
    })
}
