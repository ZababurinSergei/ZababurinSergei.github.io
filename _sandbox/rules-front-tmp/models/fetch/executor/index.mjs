import { request } from "../index.mjs";
export const Executor = (self, config) => {
    return new Promise((resolve, reject) => {
        const URL_EXECUTOR_APPLY = "/v1/executor/apply";
        const URL_EXECUTOR_INFO = "/v1/executor/info";
        const URL_EXECUTOR_SET = "/v1/executor/mapping/set";
        const URL_EXECUTOR_REMOVE = "/v1/executor/remove";
        const URL_EXECUTOR_VALIDATORS = "/v1/executor/validators";
        const URL_EXECUTOR_VERIFY = "/v1/executor/verify";

        /**
         * EXECUTOR
         * @returns {Promise<unknown>}
         */
        const postExecutorApply = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_APPLY,  config.executor.apply)
                    console.log('EXECUTOR APPLY', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postExecutorInfo = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_INFO, config.executor.info)
                    console.log('EXECUTOR INFO', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postExecutorSet = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_SET, config.executor.set)
                    console.log('EXECUTOR SET', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postExecutorRemove = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_REMOVE, config.executor.remove)
                    console.log('EXECUTOR REMOVE', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postExecutorValidators = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_VALIDATORS, config.executor.validators)
                    console.log('EXECUTOR VALIDATORS', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postExecutorVerify = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EXECUTOR_VERIFY, config.executor.verify)
                    console.log('EXECUTOR VERIFY', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        resolve({
            post: {
                apply: postExecutorApply,
                info: postExecutorInfo,
                set: postExecutorSet,
                remove: postExecutorRemove,
                validators: postExecutorValidators,
                verify: postExecutorVerify
            }
        })
    })
}