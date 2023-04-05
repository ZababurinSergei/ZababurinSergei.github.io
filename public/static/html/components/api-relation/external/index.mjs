import { taskRelation } from '../../api-substrate/external/index.mjs'
import {idKey} from '/static/html/components/component_modules/idKey/index.mjs'
export default async (v,p,c,s,r) => {
    let menu = s.this.shadowRoot.querySelector('.api-relation')
    menu.innerHTML = ''
    for(let list of taskRelation.events[s.this.tagName]) {
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
}