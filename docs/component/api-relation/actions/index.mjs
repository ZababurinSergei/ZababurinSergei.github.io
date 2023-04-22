import { taskRelation, idKey } from "../../../this/index.mjs";

export default (self) => {
    return new Promise(async (resolve, reject) => {

        let menu = self.shadowRoot.querySelector('.api-relation')
        menu.innerHTML = ''
        for(let list of taskRelation.events[self.tagName]) {
            for(let event in list) {
                console.log('ssssssssssss',list[event])
                menu.insertAdjacentHTML('beforeend', `
                <api-button
                    data-role="aside"
                    data-cssshadow="rules"
                    data-key="${idKey()}"
                    data-type="api-relation"
                    data-event="${event}"
                    class="api-relation__relation_button"
                >
                <div class="rules-relation_container">
                    <img class="rules-relation_container_img" src="${list[event].icon}"/>
                    <p class="rules-relation_container_name">
                       ${list[event].name}
                    </p>
                </div>
                   
                </api-button>
            `)

            }
        }

        resolve({
            _doRender: (event) => {
                console.log('🏤 RENDER Relation 🏤', event)
            }
        })
    })
}
