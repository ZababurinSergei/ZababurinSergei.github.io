import { taskRelation, idKey } from "../../../this/index.mjs";

export default (self) => {
    return new Promise(async (resolve, reject) => {

        let menu = self.shadowRoot.querySelector('.api-relation')
        menu.innerHTML = ''
        for(let list of taskRelation.events[self.tagName]) {
            for(let event in list) {
                menu.insertAdjacentHTML('beforeend', `
                <api-button
                    data-role="aside"
                    data-key="${idKey()}"
                    data-type="api-relation"
                    data-event="${event}"
                    class="api-relation__relation_button"
                >
                    <p
                        class="substrat__relation_button"
                    >
                       ${event}
                    </p>
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
