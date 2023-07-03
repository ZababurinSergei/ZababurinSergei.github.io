import { request } from "../index.mjs";

export const Mapping = (self, config) => {
    return new Promise((resolve, reject) => {
        const URL_EXECUTOR = "/v1/mapping";
        const URL_EXECUTOR_COUNT = "/v1/mapping/count";
        const URL_EXECUTOR_DELETE = "/v1/mapping/delete";
        const URL_EXECUTOR_LIST = "/v1/mapping/list";
        const URL_EXECUTOR_SAVE = "/v1/mapping/save";

        const postExecutor = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR,  config.executor.self)
                    console.log('EXECUTOR COUNT ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postExecutorCount = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_COUNT,  config.executor.count)
                    console.log('EXECUTOR COUNT ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postExecutorDelete = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_DELETE, config.executor.delete)
                    console.log('EXECUTOR DELETE', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postExecutorList = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_LIST, config.executor.list)
                    console.log('EXECUTOR LIST ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postExecutorSave = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_SAVE, config.executor.save)
                    console.log('EXECUTOR SAVE ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        resolve({
            post: {
                self: postExecutor,
                count: postExecutorCount,
                save: postExecutorSave,
                delete: postExecutorDelete,
                list: postExecutorList
            }
        })
    })
}