import ferMain from "./component/fer-main/index.mjs"
import ferTree from "./component/fer-tree/index.mjs"
// import ferLink from './component/fer-link/index.mjs'
// import ferForm from './component/fer-form/index.mjs'
// import ferRegion from "./component/fer-region/index.mjs"
// import ferButton from './component/fer-button/index.mjs'
// import ferTable from './component/fer-table/index.mjs'
// import ferModal from './component/fer-modal/index.mjs'
// import ferHash from './component/fer-hash/index.mjs'
// import ferParams from './component/fer-params/index.mjs'
// import welcomeBook from './component/welcome-book/index.mjs'
// import welcomeInfo from './component/welcome-info/index.mjs'

export default async (mountPoint, Context) => {
    const shadow = mountPoint.attachShadow({mode: "open"});
    let template = document.querySelector('#system')
    let systemContent = template.content;
    shadow.prepend(systemContent);
}