import {request} from "../index.mjs";

export const Event = (self, config) => {
    return new Promise((resolve, reject) => {
        const URL_EVENT = "/v1/event";
        const URL_EVENT_COUNT = "/v1/event/count";
        const URL_EVENT_DELETE = "/v1/event/delete";
        const URL_EVENT_LIST = "/v1/event/list";
        const URL_EVENT_SAVE = "/v1/event/save";

        const postEvent = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EVENT,  config.event.self)
                    console.log('EVENT COUNT ', data)
                    resolve(data)
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postEventCount = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EVENT_COUNT,  config.event.count)
                    console.log('EVENT COUNT ', data)
                    resolve(data)
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postEventDelete = (data = {
             eventId: "1bd287c7-be8d-4f17-999c-cc6f5565ac51"
        }) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await request.post(URL_EVENT_DELETE, data)
                    console.log('EVENT DELETE', data)
                    resolve(result)
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postEventList = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await request.post(URL_EVENT_LIST, config.event.list)
                    console.log('EVENT LIST ', data)
                    resolve(data)
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        const postEventSave = (data = {
            "event": {
                "slug": "test.test.1",
                "name": "newevt12",
                "title": "newevt",
                "description": "description of newevt",
                "errors": [
                    {
                        "code": "1",
                        "message": "ошибка 1",
                        "howToFix": "как исправить ошмбку 1"
                    }
                ],
                "jsonSchema": {
                    "title": "Схем для проверки события newevt",
                    "properties": {
                        "filed1": {
                            "description": "описание поля filed1",
                            "type": "string"
                        }
                    },
                    "required": ["filed1"]
                }
            }
        }) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await request.post(URL_EVENT_SAVE, data)
                    console.log('EVENT SAVE ', result)
                    resolve(result)
                } catch (e) {
                    console.error('ERROR REQUEST', e)
                }
            })
        }

        resolve({
            post: {
                self: postEvent,
                count: postEventCount,
                save: postEventSave,
                delete: postEventDelete,
                list: postEventList
            }
        })
    })
}