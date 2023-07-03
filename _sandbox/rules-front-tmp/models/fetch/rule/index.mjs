import { request } from "../index.mjs";

export const Rule = (self, config) => {
    return new Promise((resolve, reject) => {
        const URL_RULE = "/v1/rule";
        const URL_RULE_COUNT = "/v1/rule/count";
        const URL_RULE_DELETE = "/v1/rule/delete";
        const URL_RULE_LIST = "/v1/rule/list";
        const URL_RULE_SAVE = "/v1/rule/save";

        const postRule = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_RULE,  config.rule.self)
                    console.log('RULE COUNT ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postRuleCount = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_RULE_COUNT,  config.rule.count)
                    console.log('RULE COUNT ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postRuleDelete = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_RULE_DELETE, config.rule.delete)
                    console.log('RULE DELETE', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postRuleList = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_RULE_LIST, config.rule.list)
                    console.log('RULE LIST ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postRuleSave = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_RULE_SAVE, config.rule.save)
                    console.log('RULE SAVE ', data)
                    resolve({})
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        resolve({
            post: {
                self: postRule,
                count: postRuleCount,
                save: postRuleSave,
                delete: postRuleDelete,
                list: postRuleList
            }
        })
    })
}