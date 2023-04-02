let components = new Map();

components.set('/dex/processor/', [{
    type: 'component',
    tag: (children) => `<slot name="lib-markdown"></slot>`,
}])

components.set('default', [{
    type: 'component',
    tag: (children) => `<slot name="lib-markdown"></slot>`,
}])


export default components