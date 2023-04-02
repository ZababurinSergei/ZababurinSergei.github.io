import TextEditor from '/static/html/components/component_modules/codemirror/codemirror.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty.mjs'
import Parser from '/static/html/components/api-processor/modules/html2json/index.js'
import MD from '../modules/md/index.mjs'
import JQ from '../modules/jq/index.mjs'
// const system = await events(self)
import { json } from '/static/html/components/api-processor/modules/html2json/index.js'

export default (self) => {
    return new Promise(async (resolve, reject) => {
        const jq = await JQ()
        let component = self.shadowRoot === null
            ? self
            : self.shadowRoot

        const md2html = await MD()
        console.log('component==========================', self)
        let codemirror = await TextEditor(self.querySelector('.markdown__self'), 'javascript')
        let codemirror_json_html = await TextEditor(component.querySelector('.markdown__string_html_json_input'),'javascript')
        let codemirror_json_code = await TextEditor(component.querySelector('.markdown__string_views_json_input'),'javascript')
        let codemirror_android_json = await TextEditor(self.querySelector('.markdown__jasonelle_android_input'),'javascript')


        let backJson = (json) => {
            return new Promise(async (resolve, reject) => {
                let Json = await fetch(`${location.origin}/static/html/components/api-processor/${(json) ? json : 'index'}.json`)

                try {
                    Json = await Json.json()
                } catch (e) {
                    Json = {
                        status: false,
                        ok: false,
                        error: e
                    }
                }
                resolve(Json)
            })
        }

        try {
            let url = '/android/index.json'
            // if(location.hostname !== 'localhost'){
            //     url = 'https://zababurinsv.github.io/android/index.json'
            // }
            let jasonelle = await fetch(url)
            jasonelle = await jasonelle.text()
            codemirror_android_json.setValue(jasonelle)
            self.querySelector('.markdown__jasonelle_android_run').removeAttribute('disabled')
        }catch (e) {
            console.warn({
                _:'error',
                data:e
            })
        }

        let handler = {
            get: function (obj, prop) {
                console.log('proxy-body-get', {
                    obj: obj,
                    prop: prop
                })
                return obj[prop];
            },
            set: function (obj, prop, value) {
                obj[prop] = value;
                console.log('proxy-body-set', prop, value)
                switch (prop) {
                    case 'length':
                        if (obj.length === 1) {
                            let timerId = setTimeout(async function tick() {
                                if (obj.length === 0) {
                                    console.log('proxy-body-end')
                                    clearTimeout(timerId);
                                } else {
                                    console.log('proxy-body-all', obj, obj.length)
                                    console.log('proxy-body-now', obj[0])
                                    obj.shift()
                                    timerId = setTimeout(tick, 10);
                                }
                            }, 0);
                        }
                        break
                    default:
                        break
                }
                return true

            }
        }

        let system = {
            _scriptDir: import.meta.url,
            worker_main: {},
            validation: {
                key: (...args) => {
                    return validation.value
                },
                value: {onhashchange: ("onhashchange" in window)}
            },
            pull: {
                "resolve": async (item) => {
                    let pull = {}
                    try {
                        pull = await fetch(`https://zababurinsv.github.io/docs/${item ? item : 'index'}.md`)
                            .catch((e) => {
                                console.warn({"error": e})
                            })
                        if (pull.status === 404) {
                            return false
                        } else {
                            pull = await pull.text();
                            system.value = pull
                            return pull
                        }
                    } catch (e) {
                        return false
                    }

                },
                "orbitdb": async (path) => {
                    let pull = {}
                    try {
                        let dir = window.zb.fs['/body'].readdir("/body")
                        if (dir.find(item => item === `${path}.md`)) {
                            let mdfs = window.zb.fs[`${system.worker_main['fs.path']}`].readFile(`/body/${path}.md`, {encoding: "utf8"});
                            if (!isEmpty(mdfs)) {
                                system.value = mdfs
                            } else {
                                system.worker_main["md"] = "# Empty"
                                codemirror.setValue("# Empty")
                                // system.worker_main["markdown__self"].value= "# Empty"
                                system.worker_main["self.value"] = "# Empty"
                            }
                        } else {
                            console.log('query db')
                            pull = await task.set(true, 't', 'green', {
                                _: 'get orbitdb',
                                item: (path) ? path : 'external'
                            }, '/orbitdb')
                            if (pull.status === 'ok') {
                                system.value = pull.md[0]['md']
                                return pull
                            } else {
                                return false
                            }
                        }
                    } catch (e) {
                        return false
                    }
                }
            },
            location: location,
            value: {},
            json: {
                "ok": false,
                "status": false,
                "type": "main",
                "tagName": " main-html",
                "attributes": [{"key": "href", "value": "#"}],
                "swap": [],
                "children": await backJson()
            },
            proxy: new Proxy([], handler)
        }

        system.worker_main = {
            "self.value": await system["pull"]["resolve"](),
            "src": false,
            "url_md": undefined,
            "markdown__self": component.querySelector('.markdown__self'),
            "markdown__self_menu": component.querySelector('.markdown__self_menu'),
            "markdown__self_menu_aside_0": component.querySelector('.markdown__self_menu_aside_left'),
            "markdown__self_menu_aside_1": component.querySelector('.markdown__self_menu_aside_right'),
            "markdown__self_html": component.querySelector('.markdown__self_html'),
            "markdown__string_html": component.querySelector('.markdown__string_html'),
            "markdown__string_html.iframe": false,
            "markdown__string_html_json": component.querySelector('.markdown__string_html_json'),
            "markdown__string_html_json_input": component.querySelector('.markdown__string_html_json_input'),
            "markdown__string_html_json_output": component.querySelector('.markdown__string_html_json_output'),
            "markdown__string_views_json": component.querySelector('.markdown__string_views_json'),
            "markdown__string_views_json_input": component.querySelector('.markdown__string_views_json_input'),
            "markdown__string_views_json_output": component.querySelector('.markdown__string_views_json_output'),
            "markdown__string_menu_json_html_query": component.querySelector('.markdown__string_menu_json_html_query'),
            "markdown__string_menu_json_html_run": component.querySelector('.markdown__string_menu_json_html_run'),
            "markdown__string_menu_json_code_query": component.querySelector('.markdown__string_menu_json_code_query'),
            "markdown__string_menu_json_code_run": component.querySelector('.markdown__string_menu_json_code_run'),
            "CodeMirror": component.querySelectorAll('.CodeMirror'),
            "fs": undefined,
            "fs.path": undefined,
            "markdown__string_menu_codemirror_search": component.querySelector('.markdown__string_menu_codemirror_search'),
            "markdown__string_menu_codemirror_fnext": component.querySelector('.markdown__string_menu_codemirror_fnext'),
            "markdown__string_menu_codemirror_fprev": component.querySelector('.markdown__string_menu_codemirror_fprev'),
            "markdown__string_menu_codemirror_replace": component.querySelector('.markdown__string_menu_codemirror_replace'),
            "markdown__string_menu_codemirror_replall": component.querySelector('.markdown__string_menu_codemirror_replall'),
            "markdown__string_menu_codemirror_goto": component.querySelector('.markdown__string_menu_codemirror_goto'),
            "markdown__string_menu_codemirror_undo": component.querySelector('.markdown__string_menu_codemirror_undo'),
            "markdown__string_menu_codemirror_redo": component.querySelector('.markdown__string_menu_codemirror_redo'),
            "markdown__string_menu_change_views": component.querySelector('#markdown__string_menu_change_views'),
            "checkbox": component.querySelector('.markdown__string_menu_change_views'),
            "checkbox.checked": true,
            "markdown__button_views": component.querySelector('#markdown__button_views'),
            "output": [],
            "markdown__string_menu": component.querySelectorAll('.markdown__string_menu'),
            "markdown__string_views": component.querySelector('#markdown__string_views'),
            "markdown__jasonelle": component.querySelector('.markdown__jasonelle'),
            "markdown__jasonelle_android": component.querySelector('.markdown__jasonelle_android'),
            "markdown__jasonelle_android_input": component.querySelector('.markdown__jasonelle_android_input'),
            "markdown__jasonelle_android_output": component.querySelector('.markdown__jasonelle_android_output'),
            "markdown__jasonelle_android_query": component.querySelector('.markdown__jasonelle_android_query'),
            "markdown__jasonelle_android_run": component.querySelector('.markdown__jasonelle_android_run'),
            "markdown__button_query_anil": component.querySelector('.markdown__button_query_anil'),
            "markdown__button_update_anil": component.querySelector('.markdown__button_update_anil'),
            "markdown__button_delete_value": component.querySelector('#markdown__button_delete_value'),
            "markdown__button_delete": component.querySelector('.markdown__button_delete'),
            "markdown__button_url_value": component.querySelector('#markdown__button_url_value'),
            "markdown__button_url": component.querySelector('.markdown__button_url'),
        }

        if (isEmpty(system.json.children.view) && !isEmpty(system.location.hash)) {
            system.validation.value.fsRead = true
            system.validation.value.hashRead = false
        } else {
            if (isEmpty(system.json.children.view) && isEmpty(system.location.hash)) {
                system.validation.value.fsRead = true
                system.validation.value.hashRead = false
            } else {
                system.validation.value.hashRead = true
                system.validation.value.fsRead = false
            }
        }

        if (system.worker_main.markdown__self_menu_aside_1) {
            system.worker_main.markdown__self_menu_aside_1.innerHTML = ''
            system.worker_main.markdown__self_menu_aside_1.innerHTML = Parser.stringify(system.json.children.isMainThread)
            system.json.children.isMainThread.forEach(element => {
                switch (element.type) {
                    case"element":
                        system.worker_main.markdown__self_menu_aside_1.querySelector(`#${element.attributes[0].value}`).addEventListener('click', async (event) => {
                            event.preventDefault();
                            switch (event.target.id) {
                                case 'external':
                                    await system.pull.orbitdb(event.target.id)
                                    break
                                case 'anil':
                                    await system.pull.orbitdb(event.target.id)
                                    break
                                default:
                                    await system.pull.resolve(event.target.id)
                                    break
                            }
                            system.worker_main["markdown__string_views"].innerHTML = ''
                            system.worker_main["md"] = system.value
                            codemirror.setValue(system.value)
                            system.worker_main["markdown__self"].value = system.value
                            system.worker_main["self.value"] = system.value
                            updateUI('', 'isMainThread')
                        })
                        break
                    default:
                        break
                }
            });
        }

        const updateUI = async (event = {}, type) => {
            codemirror.refresh()
            codemirror_json_html.refresh()
            codemirror_json_code.refresh()
            codemirror_android_json.refresh()
            // console.log('updateUI', type)
            // if (type === 'codeMirror' || type === 'fsLoad') {
            //     system.worker_main["src"] = 'data:text/html;charset=utf-8,' + encodeURIComponent(system.worker_main["markdown__string_html.code"])
            //     system.worker_main["self.value"] = codemirror.getValue()
            // await saveMd()
            // } else {
            //     console.log('updateUI unknown', type)
            // }
        }

        const markdown__string_menu_change_false = (html) => {
            const result = Parser.parse(html)
            // const htmlJson = self.querySelector('.markdown__string_html')
            codemirror_json_html.setValue(json(result))
            codemirror_json_code.setValue(json(result))

            console.log('############### json ###############', result, json(result))
            updateUI()

            // console.log('@@@@@@@@@@@@@@@ code @@@@@@@@@@@@@@@', code)
            // if (system.worker_main["markdown__string_views"].querySelector('iframe')) {
            //     system.worker_main["markdown__string_views"].querySelector('iframe').remove()
            // }
            // let json = {
            //     code: Parser.parse(system.worker_main['markdown__string_html.code']),
            //     html: Parser.parse(system.worker_main['markdown__string_html.innerHTML'])
            // }

            // system.worker_main["markdown__string_html"].style.display = 'none'
            // system.worker_main["markdown__string_html_json"].style.display = 'flex'
            // codemirror_json_html.setValue(Parser.json(json.html))
            // system.worker_main["markdown__string_views"].style.display = 'none'
            // system.worker_main["markdown__string_views_json"].style.display = 'flex'
            // codemirror_json_code.setValue(Parser.json(json.code))
            // system.worker_main["markdown__string_menu_json_html_run"].disabled = false;
            // system.worker_main["markdown__string_menu_json_code_run"].disabled = false;
        }


        resolve({
            updateUI: updateUI,
            changeViews: (event) => {
                if (event.target.checked) {
                    // system.worker_main["markdown__self"].style.display = "block"
                    system.worker_main["markdown__self_html"].innerHTML = ''
                    system.worker_main["markdown__self_html"].style.display = "none"
                    system.worker_main["markdown__self_menu"].style.display = "grid"
                    system.worker_main["markdown__self_menu_aside_1"].style.display = "block"
                    system.worker_main["markdown__self_menu_aside_0"].style.display = "block"
                    system.worker_main["markdown__string_html"].style.display = "block"
                    system.worker_main["markdown__string_menu"][1].style.display = "flex"
                    system.worker_main['CodeMirror'][0].style.display = "block"
                } else {
                    system.worker_main["markdown__self"].style.display = "none"
                    system.worker_main["markdown__self_html"].innerHTML = ''
                    system.worker_main["markdown__self_html"].innerHTML = system.worker_main['markdown__string_html'].innerHTML
                    system.worker_main["markdown__self_html"].style.display = "block"
                    system.worker_main["markdown__self_menu"].style.display = "flex"
                    system.worker_main["markdown__self_menu"].style.height = "auto"
                    system.worker_main['CodeMirror'][0].style.display = "none"
                    system.worker_main["markdown__string_html"].style.display = "none"
                    system.worker_main["markdown__string_menu"][1].style.display = "none"
                    system.worker_main["markdown__self_menu_aside_1"].style.display = "none"
                    system.worker_main["markdown__self_menu_aside_0"].style.display = "none"
                }
            },
            markdown__string_menu_change_true: (event) => {
                system.worker_main["markdown__string_views"].innerHTML = ''
                if (system.worker_main["markdown__string_views"].querySelector('iframe')) {
                    system.worker_main["markdown__string_views"].querySelector('iframe').remove()
                }
                system.worker_main["markdown__string_html"].style.display = 'block'
                system.worker_main["markdown__string_html"].innerHTML = ''
                system.worker_main["markdown__string_html"].innerHTML = system.worker_main['markdown__string_html.innerHTML']
                system.worker_main["markdown__string_html"].style.whiteSpace = "initial"

                system.worker_main["markdown__string_html_json"].style.display = 'none'

                system.worker_main["markdown__string_html.iframe"] = document.createElement('iframe');
                system.worker_main["markdown__string_html.iframe"].src = system.worker_main["src"]
                system.worker_main["markdown__string_html.iframe"].width = "100%";
                system.worker_main["markdown__string_html.iframe"].height = "100%";
                system.worker_main["markdown__string_html.iframe"].style.border = "0";
                system.worker_main["markdown__string_html.iframe"].style.frameBorder = "0";
                system.worker_main["markdown__string_html.iframe"].sandbox = "allow-scripts";
                system.worker_main["markdown__string_views"].appendChild(system.worker_main["markdown__string_html.iframe"])
                system.worker_main["markdown__string_views"].style.height = '25vh'
                system.worker_main["markdown__string_views"].style.whiteSpace = "initial"
                system.worker_main["markdown__string_views"].style.display = "flex"

                system.worker_main["markdown__string_views_json"].style.display = 'none'

                system.worker_main["markdown__string_menu_json_html_run"].disabled = true;
                system.worker_main["markdown__string_menu_json_code_run"].disabled = true;
            },
            markdownToHTML: async (markdown) => {
                system.worker_main["output"] = [];
                window.zb.fs[`${system.worker_main['fs.path']}`].writeFile('/body/data.md', markdown)
                system.worker_main["output"] = md2html.parse(markdown)
                return system.worker_main["output"];
            },
            fetchMarkDown: async (event) => {
                system.worker_main["url_md"] = await fetch(system.worker_main['markdown__button_url_value'].value)
                    .catch((e) => {
                        console.warn({
                            "error": e
                        })
                        return undefined
                    })
                system.worker_main["url_md"] = await system.worker_main["url_md"].text()

                codemirror.setValue(system.worker_main["url_md"])
                system.worker_main["self.value"] = system.worker_main["url_md"]
                system.worker_main["checkbox.checked"] = true
                updateUI('', 'fetch url')
            },
            selected: async (event) => {
                event.preventDefault()
                system.worker_main["md"] = await fetch(`${location.origin}/markdown/${event.target.value}.md`)
                    .catch((e) => {
                        console.warn({
                            "error": e
                        })
                        return undefined
                    })
                if (!isEmpty(system.worker_main["md"])) {
                    system.worker_main["md"] = await system.worker_main["md"].text()
                } else {
                    let dir = window.zb.fs[`${system.worker_main['fs.path']}`].readdir("/body")
                    if (dir.find(item => item === 'data.md')) {
                        let mdfs = window.zb.fs[`${system.worker_main['fs.path']}`].readFile("/body/data.md", {encoding: "utf8"});
                        if (!isEmpty(mdfs)) {
                            system.worker_main["md"] = mdfs
                            codemirror.setValue(mdfs)
                            // system.worker_main["markdown__self"].value= mdfs
                            system.worker_main["self.value"] = mdfs
                        }
                    } else {
                        system.worker_main["md"] = "# Empty"
                    }
                }
                codemirror.setValue(system.worker_main["md"])
                system.worker_main["self.value"] = system.worker_main["md"]
                system.worker_main["checkbox.checked"] = true
                updateUI('', 'selected')
            },
            upload: () => {
                // console.log(event.path[0].files[0])
                let reader = new FileReader();
                reader.readAsText(event.path[0].files[0]);
                reader.onload = function () {
                    system.worker_main["markdown__string_views"].innerHTML = ''
                    system.worker_main["md"] = reader.result
                    codemirror.setValue(reader.result)
                    // system.worker_main["markdown__self"].value= reader.result
                    system.worker_main["self.value"] = reader.result
                    updateUI('', 'upload')
                };
                reader.onerror = function () {
                    console.log(reader.error);
                };
            },
            update: async (event) => {
                let res = {}
                let path = {}

                switch (event.target.id) {
                    case 'markdown__button_update_anil':
                        path = 'anil'
                        break
                    default:
                        path = 'external'
                        break
                }
                let status = await task.set(true, path, 'red', codemirror.getValue(), '/orbitdb/set/:external')
                // let status = await task.set(true,'','red',system['worker_main']['markdown__self'].innerHTML, '/orbitdb/set/:external')
            },
            query: async (event) => {
                let res = {}
                let path = {}
                switch (event.target.id) {
                    case'markdown__button_query':
                        path = 'external'
                        break
                    case 'markdown__button_query_anil':
                        path = 'anil'
                        break
                    default:
                        path = 'external'
                        break
                }
            },
            download: () => {
                let name = prompt('Введите название файла', 'default');
                let dir = window.zb.fs[`${system.worker_main['fs.path']}`].readdir("/body")
                let filename = `${name}.md`
                let text = ''
                if (dir.find(item => item === 'data.md')) {
                    text = window.zb.fs[`${system.worker_main['fs.path']}`].readFile("/body/data.md", {encoding: "utf8"});
                }
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                element.setAttribute('download', filename);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            },
            jqRun: (event) => {
                let out  = jq(
                    JSON.parse(codemirror_android_json.getValue()),
                    self.querySelector('.markdown__jasonelle_android_query').value
                );

                if(!isEmpty(out)) {
                    self.querySelector(".markdown__jasonelle_android_output").value =  JSON.stringify(JSON.parse(out), undefined, 4);
                }
            },
            checkbox: (event) => {
                switch (event.target.id) {
                    case'markdown__button_views':
                        system.worker_main['checkbox.checked'] = !system.worker_main['checkbox.checked']
                        const markdown__self_html = self.querySelector('.markdown__self_html')

                        if (!system.worker_main['checkbox.checked']) {
                            markdown__self_html.innerHTML = ''
                            let data = codemirror.getValue()
                            if (!data.length) {
                               data = '#Empty'
                            }
                            let result = md2html.parse(data)
                            markdown__self_html.insertAdjacentHTML('beforeend', result)
                            markdown__string_menu_change_false(result)
                        }

                        markdown__self_html.style.display = system.worker_main['checkbox.checked'] ? 'none' : 'flex'
                        self.querySelector('.CodeMirror').style.display = system.worker_main['checkbox.checked'] ? 'block' : 'none'

                        break
                    default:
                        // system.worker_main['checkbox.checked'] = event.target.checked
                        // system.worker_main['checkbox.checked']
                        //     ? markdown__string_menu_change_true('updateUI')
                        //     : markdown__string_menu_change_false('updateUI')
                        break
                }
            }
        })
    })
}
