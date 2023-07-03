import { request } from "../index.mjs";

export const Manifest = (self, config) => {
    return new Promise((resolve, reject) => {
        const URL_MANIFEST = "/v1/manifest";
        const URL_MANIFEST_COUNT = "/v1/manifest/count";
        const URL_MANIFEST_DELETE = "/v1/manifest/delete";
        const URL_MANIFEST_LIST = "/v1/manifest/list";
        const URL_MANIFEST_SAVE = "/v1/manifest/save";
        const URL_MANIFEST_VERIFY = "/v1/manifest/verify/results";

        const postManifest = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_MANIFEST,  config.manifest.self)
                    console.log('MANIFEST COUNT ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postManifestCount = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_MANIFEST_COUNT,  config.manifest.count)
                    console.log('MANIFEST COUNT ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postManifestDelete = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_MANIFEST_DELETE, config.manifest.delete)
                    console.log('MANIFEST DELETE', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }
        const postManifestList = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_MANIFEST_LIST, config.manifest.list)
                    console.log('MANIFEST LIST ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postManifestSave = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_MANIFEST_SAVE, config.manifest.save)
                    console.log('MANIFEST SAVE ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postManifestVerify = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_MANIFEST_SAVE, config.manifest.verify)
                    console.log('MANIFEST SAVE ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        resolve({
            post: {
                self: postManifest,
                count: postManifestCount,
                save: postManifestSave,
                delete: postManifestDelete,
                list: postManifestList,
                verify: postManifestVerify
            }
        })
    })
}