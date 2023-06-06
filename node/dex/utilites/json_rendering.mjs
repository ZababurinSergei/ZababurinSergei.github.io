import jsonHtml from "./template/json.mjs";
import formatHighlight from '../../../modules/json-format-highlight/index.mjs';
// var highlight = require('pygments').colorize;
// import highlight from 'pygments'
// console.log('########### highlight ##############', highlight.colorize)
export const jsonify = (obj, status = 200) => {

    return jsonHtml({
        raw_object: JSON.stringify(obj),
        highlight_json: formatHighlight(obj)
    })
}

export default  {
    jsonify
}