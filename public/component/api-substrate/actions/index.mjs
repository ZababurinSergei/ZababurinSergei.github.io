import { normalizePathName } from "../../../this/index.mjs";
export default (self) => {
    return new Promise(async (resolve, reject) => {
        const pathname = normalizePathName(window.location.pathname)
        let linkHeader = self.shadowRoot.querySelector('.grid__header_substrate')

        switch (pathname.toLowerCase()) {
            case '/dex/processor/':
                linkHeader.textContent = 'Link'
                break
            default:
                break
        }


        resolve({


        })
    })
}
