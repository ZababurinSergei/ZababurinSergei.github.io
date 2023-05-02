// import React from "../../../../index.mjs";

export default (self) => {
    return new Promise(async (resolve, reject) => {

        let Context = {
            test: (setName) => {
                setName('ShadowRoot from html')
            }
        }

        // console.log('🥋 Connect virtual dom 🥋', await React(self, Context))

        let div_dialog = document.createElement('div')
        let slot_dialog = document.createElement('slot')

        let slot_header = document.createElement('slot')
        let slot_TabAccounts = document.createElement('slot')
        let slot_TabSend = document.createElement('slot')

        let slot_TabDapps = document.createElement('slot')
        let slot_TabSharding = document.createElement('slot')
        let slot_TabExplorer = document.createElement('slot')
        let slot_api_processor = document.createElement('slot')
        slot_api_processor.name = 'api-processor'
        div_dialog.slot = 'service'
        slot_dialog.name = 'service'

        if (window.location.pathname.startsWith('/node')) {
            slot_header.name = 'header_base'
            slot_TabAccounts.name = 'TabAccounts'
            slot_TabSend.name = 'TabSend'

            slot_TabDapps.name = 'TabDapps'
            slot_TabSharding.name = 'TabSharding'
            slot_TabExplorer.name = 'TabExplorer'
        } else if (window.location.pathname.startsWith('/jira')) {
            slot_header.name = 'api-jira'
        } else if (window.location.pathname.startsWith('/contributing')) {
            slot_header.name = 'api-contributing'
        } else if (window.location.pathname.startsWith('/json')) {
            slot_header.name = 'api-json'
        } else if (window.location.pathname === '/') {
            slot_header.name = 'api-json'
        } else {
            console.warn('необрабатываемый путь', window.location.pathname)
        }


        self.appendChild(div_dialog)
        div_dialog.appendChild(slot_dialog)

        self.appendChild(slot_api_processor)
        self.appendChild(slot_header)
        self.appendChild(slot_TabAccounts)
        self.appendChild(slot_TabSend)

        self.appendChild(slot_TabDapps)
        self.appendChild(slot_TabSharding)
        self.appendChild(slot_TabExplorer)

        // console.log(`     🟣 component: ${self.tagName} connectedCallback`)
        // self.shadowRoot.querySelector('p').addEventListener('click', self.push)

        // window.addEventListener('popstate', self.events);

        resolve({
            popstate: (event)=> {
                // debugger
                let soltNames = ['header_base', 'TabAccounts', 'TabSend', 'TabDapps', 'TabSharding', 'TabSharding', 'TabExplorer']

                if (event.detail && event.detail.pathname) {
                    const slots = self.querySelectorAll('slot');

                    switch (event.detail.pathname) {
                        case "/":
                            // for (let i = 0; i < slots.length; ++i) {
                            //     slots[i].name = i === 0 ? 'api-processor' : ''
                            //     console.log('@@@@@@@@----@@@@@@@@', slots[i])
                            // }
                            break
                        case "/jira":
                            for (let i = 0; i < slots.length; ++i) {
                                slots[i].name = i === 0 ? 'api-jira' : ''
                            }
                            break
                        case "/contributing":
                            for (let i = 0; i < slots.length; ++i) {
                                slots[i].name = i === 0 ? 'api-contributing' : ''
                            }
                            break
                        case "/json":
                            for (let i = 0; i < slots.length; ++i) {
                                slots[i].name = i === 0 ? 'api-processor' : ''
                            }
                            break
                        default:
                            console.log('@@@@@@@@@@@----@@@@@@@@@@@')
                            // for (let i = 0; i < slots.length; ++i) {
                            //     slots[i].name = soltNames[i]
                            // }
                            break
                    }
                }
            }
        })
    })
}
