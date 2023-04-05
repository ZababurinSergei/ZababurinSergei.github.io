import router from '/static/html/components/api-substrate/external/router/index.mjs'
import init from './init/index.mjs'

export const state = {
    console: {
        log:() => (console.log(state), state),
    },
    'API-SUBSTRATE':[{
        header: undefined,
        body: undefined,
        footer: undefined,
        template:[{}]
    }],
    'SYSTEM':[{
        header: undefined,
        body: undefined,
        footer: undefined,
        template:[{}]
    }]
}

export const eventsName = {
    'API-PROPERTY':['API-BUTTON'],
    'API-RELATION': ['API-BUTTON'],
    'API-MAIN': ['API-BUTTON']
}

export const taskProperty = {
    events: [{
        'default': '',
        'MD': 'API-BUTTON',
        'HTML': 'API-BUTTON',
        'JSON': 'API-BUTTON',
        'ANDROID': 'API-BUTTON',
        'API-SUBSTRATE_SET': [{}],
        'API-MAIN_SET': [{}],
        'LIB-MARKDOWN_SET':[{}],
        'API-SUBSTRATE_GET': [{}],
        'API-MAIN_GET': [{}],
        'LIB-MARKDOWN_GET':[{}]
    }]
}

export const taskRelation = {
    events: {
        'default': '',
        'API-RELATION': [{
            Domain: {
                type: 'aside'
            },
            Region: {
                type: 'aside'
            },
            Event: {
                type: 'aside'
            },
            Rule: {
                type: 'aside'
            },
            Manifest: {
                type: 'aside'
            },
            validators: {
                type: 'aside'
            },
            Connections: {
                type: 'aside'
            }
        }]
    }
}

export const config = {
    button: [{
        key: undefined,
        type: "MD",
        event: (tagName = 'default') => taskProperty.events[0][tagName] ? taskProperty.events[0][tagName] : taskProperty.events[0]['default'] ,
        class: (type = 'relation') => `substrat__${type}_button`,
        text: '🔴'
    },{
        key: undefined,
        type: "HTML",
        event: (tagName = 'default') => taskProperty.events[0][tagName] ? taskProperty.events[0][tagName] : taskProperty.events[0]['default'] ,
        class: (type = 'relation') => `substrat__${type}_button`,
        text: '🟠'
    },{
        key: undefined,
        type: "JSON",
        event: (tagName = 'default') => taskProperty.events[0][tagName] ? taskProperty.events[0][tagName] : taskProperty.events[0]['default'] ,
        class: (type = 'relation') => `substrat__${type}_button`,
        text: '🟡'
    },{
        key: undefined,
        type: "ANDROID",
        event: (tagName = 'default') => taskProperty.events[0][tagName] ? taskProperty.events[0][tagName] : taskProperty.events[0]['default'] ,
        class: (type = 'relation') => `substrat__${type}_button`,
        text: '🟢'
    }],

    link: [{
        to:"/",
        title: "Markdown",
        className: "auction-data__header_button"
    }, {
        to:"/json",
        title: "Json",
        className: "auction-data__header_button"
    }]
}

export const store = {
    substrate: config.link.map(item => item.to)
}

export const activeClass = 'auction-link__active'

export const eventsConfig = {
    button: {
        mainMenu: 'mainMenu'
    }
}

export const setTime = 800

export const normalizePathName = (pathname) => {
    pathname = pathname.startsWith('/') ? pathname : `/${pathname}`
    pathname = pathname.endsWith('/') ? pathname : `${pathname}/`
    return pathname
}

export const verification = (types, pathname) => {
    for(let type of types) {
        switch (type) {
        case "relation":
            if(['/dex/processor/', '/docs/', '/dex/'].some(item => pathname === item)) {
                return true
            }
            break
        case "property":
            if(['/dex/processor/', '/docs/', '/dex/'].some(item => pathname === item)) {
                return true
            }
            break
        default:
            break
        }
    }
    return false
}

// export const apiButton = async (self, type = 'relation', className={relation: 'grid__header_relation', property: 'grid__header_property'}) => {
    // if(verification([type], normalizePathName(window.location.pathname))) {
        // const initialValue = '';
        // const templateHtml = {
            // relation: self.querySelector(`.${className.relation}`),
            // property: self.querySelector(`.${className.property}`),
        // }
        // const element = self.getRootNode().host
        //todo ZB_COMMENT надо поставить очистку
        // console.log('ssssssssssssss - ------------- sssssssssssssssssssss', state[element.tagName], element.tagName)
        // for(let object of ['relation', 'property']) {
            // templateHtml[object].textContent = ''
            // templateHtml[object].insertAdjacentHTML('beforeend', config.apiButton.reduce((accumulator, item, index) => {
                // console.log('🎯',object, index, item)
                // let temp = `
                // <api-button
                    // data-role="${object}"
                    // data-key="${index}"
                    // data-type="${item.type}"
                    // data-event="${item.event(item.type)}"
                    // class="${item.class(object)}"
                // >
                //   ${item.text}
                // </api-button>`
                // return accumulator + temp
            // }, initialValue));
        // }
    // } else {
        // const menu_property = self.querySelector(`.${className.property}`)
        // const menu_relation = self.querySelector(`.${className.relation}`)
        // menu_property.textContent = ''
        // menu_relation.textContent = ''
        // menu_property.textContent = 'Property'
        // menu_relation.textContent = 'Relation'
    // }
// }

export default async (v,p,c,s,r) => {
    await init(s.this.shadowRoot).catch(e => console.error(e))
    // await router(s.this.shadowRoot).catch(e => console.error(e))
}
