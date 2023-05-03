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
            Schema: {
                type: 'aside',
                service: 'rules',
                name: 'Схемы',
                icon: '/this/icons/schema.svg'
            },
            Rules: {
                type: 'aside',
                service: 'rules',
                name: 'Правила',
                icon: '/this/icons/rules.svg'
            },
            Manifest: {
                type: 'aside',
                service: 'rules',
                name: 'Манифесты',
                icon: '/this/icons/manifest.svg'
            },
            Region: {
                type: 'aside',
                service: 'rules',
                name: 'Регион',
                icon: '/this/icons/region.svg'
            },
            Domain: {
                type: 'aside',
                service: 'rules',
                name: 'Домен',
                icon: '/this/icons/domain.svg'
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
        title: "Browser",
        className: "auction-data__header_button"
    },{
        to:"/service/rules",
        title: "Rules",
        className: "auction-data__header_button"
    },{
        to:"/service/welcomebook",
        title: "Welcomebook",
        className: "auction-data__header_button"
    }]
}

export const link = {
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
