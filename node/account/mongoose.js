const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)
mongoose.set('bufferCommands', false)
const connection = require('./connection');
let conn = null;

module.exports =   (obj, func, ...args)=>{
    return new Promise( function (resolve, reject) {
        let out = (obj) => {
            resolve(obj)
        }
        let err = (error) => {
            console.log('~~~ err ~~~', error)
            reject(error)
        }
        switch (func) {
            case 'get':
                (async (obj, props,data) => {
                    try {
                        switch (obj[props]) {
                            case 'item':
                                (async (obj, props,data) => {
                                    try {
                                        if (conn == null) {
                                            conn =   await connection('init')

                                            try {
                                                conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }
                                        }else{
                                            try {
                                                conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }

                                        }

                                        const M =  conn['auction'].model('auction');

                                        M.findOne({ object: obj['id'] })
                                            .exec()
                                            .then((item) => {
                                                out(item)
                                            })
                                    } catch (e) { err(e) }
                                })(obj, args[0], args[1], args[2], args[3])
                                break
                            case 'winner':
                                (async (obj, props,data) => {
                                    try {
                                        if (conn == null) {
                                            conn =   await connection('init')

                                            try {
                                                conn['auction'].model('winner', new mongoose.Schema({ 'winner': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }
                                        }else{
                                            try {
                                                conn['auction'].model('winner', new mongoose.Schema({ 'winner': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }

                                        }


                                        const M =  conn['auction'].model('winner');

                                        M.find({ "id": obj['id'] })
                                            .exec()
                                            .then((item) => {
                                                out(item)
                                            })
                                    } catch (e) { err(e) }
                                })(obj, args[0], args[1], args[2], args[3])
                                break
                            case 'winnerObject':
                                (async (obj, props,data) => {
                                    try {
                                        if (conn == null) {
                                            conn =   await connection('init')

                                            try {
                                                conn['auction'].model('winner', new mongoose.Schema({ 'winner': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }
                                        }else{
                                            try {
                                                conn['auction'].model('winner', new mongoose.Schema({ 'winner': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }

                                        }


                                        const M =  conn['auction'].model('winner');

                                        M.find({ "object": obj['id'] })
                                            .exec()
                                            .then((item) => {
                                                out(item)
                                            })
                                    } catch (e) { err(e) }
                                })(obj, args[0], args[1], args[2], args[3])
                                break
                            case 'auction':
                                (async (obj, props,data) => {
                                    try {
                                        if (conn == null) {
                                            conn =   await connection('init')

                                            try {
                                                conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }
                                        }else{
                                            try {
                                                conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }

                                        }


                                        const M =  conn['auction'].model('auction');

                                        M.find()
                                            .exec()
                                            .then(news => {
                                                if(news.length === 0){

                                                    out({object:'-2'})
                                                }else{

                                                    out(news)
                                                }
                                            });
                                    } catch (e) { err(e) }
                                })(obj, args[0], args[1], args[2], args[3])
                                break
                            default:
                                err(`новое свойство ${obj[props]}`)
                                break
                        }
                    } catch (e) { err(e) }
                })(obj, args[0], args[1], args[2], args[3])
                break
            case 'save':
                (async (obj, props,data) => {
                    try {
                        switch (obj[props]) {
                            case 'winner':
                                (async (obj, props,data) => {
                                    try {
                                        if (conn == null) {

                                            conn =   await connection('init')

                                            try {
                                                conn['auction'].model('winner', new mongoose.Schema({ 'winner': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }
                                        }else{
                                            try {
                                                conn['auction'].model('winner', new mongoose.Schema({ 'winner': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }

                                        }

                                        const M =  conn['auction'].model('winner');
                                        out(await M.create(obj['data']))
                                    } catch (e) { err(e) }
                                })(obj, args[0], args[1], args[2], args[3])
                                break
                            default:
                                err(`новая функция ${func}`)
                                break
                        }
                    } catch (e) { err(e) }
                })(obj, args[0], args[1], args[2], args[3])
                break
            case 'create':
                (async (obj, props,data) => {
                    try {
                        // console.log(`${func}[(${obj['input']})${obj[props]}]`)
                        switch (obj[props]) {
                            case 'item':
                                (async (obj, props,data) => {
                                    try {
                                        if (conn == null) {
                                            conn =   await connection('init')
                                                conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));
                                        }else{
                                            try {
                                                conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }

                                        }
                                        const M =  conn['auction'].model('auction');

                                        obj['data']['auction']['endHeight'] = Date.now() + parseInt(obj['data']['auction']['startTime'],10)
                                        out(await M.create(obj['data']))
                                    } catch (e) { err(e) }
                                })(obj, args[0], args[1], args[2], args[3])

                                break
                            default:
                                err(`новая функция ${func}`)
                                break
                        }
                        out(obj)
                    } catch (e) { err(e) }
                })(obj, args[0], args[1], args[2], args[3])

                break
            case 'update':
                (async (obj, props,data) => {
                    try {
                        console.log(`${func}[(${obj['input']})${obj[props]}]`)
                        switch (obj[props]) {
                            case 'item':
                                (async (obj, props,data) => {
                                    try {
                                        if (conn == null) {
                                            conn =   await connection('init')

                                            conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));

                                        }else{
                                            try {
                                                conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));
                                            }catch (e) {

                                            }
                                        }

                                        const M =  conn['auction'].model('auction');

                                        M.findOneAndUpdate({_id: obj['_id']}, obj['data'])
                                            .exec()
                                            .then((product) => {
                                                out(product)
                                            })
                                    } catch (e) { err(e) }
                                })(obj, args[0], args[1], args[2], args[3])

                                break
                            default:
                                err(`новая функция ${func}`)
                                break
                        }


                        out(obj)
                    } catch (e) { err(e) }
                })(obj, args[0], args[1], args[2], args[3])

                break
            case 'delete':
                (async (obj, props,data) => {
                    try {
                        console.log(`${func}[(${obj['input']})${obj[props]}]`)
                        switch (obj[props]) {
                            case 'item':
                                (async (obj, props,data) => {
                                    try {
                                        if (conn == null) {
                                            conn =   await connection('init')

                                            try {
                                                conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));

                                            } catch (error) {

                                            }
                                        }else{
                                            try {
                                                conn['auction'].model('auction', new mongoose.Schema({ 'auction': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }

                                        }

                                        const M =  conn['auction'].model('auction');
                                        M.findOneAndRemove({ "object": obj['id'] })
                                            .exec()
                                            .then(() => {
                                                out({sucsess: 'true'})
                                            })
                                    } catch (e) { err(e) }
                                })(obj, args[0], args[1], args[2], args[3])
                                break
                            case 'winner':
                                (async (obj, props,data) => {
                                    try {
                                        if (conn == null) {

                                            conn =   await connection('init')

                                            try {
                                                conn['auction'].model('winner', new mongoose.Schema({ 'winner': Object, 'id': String, 'object': String }));

                                            } catch (error) {

                                            }
                                        }else{
                                            try {
                                                conn['auction'].model('winner', new mongoose.Schema({ 'winner': Object, 'id': String, 'object': String }));
                                            } catch (error) {

                                            }

                                        }
                                        const M =  conn['auction'].model('winner');

                                        M.findOneAndRemove({ object: obj['id'] })
                                            .exec()
                                            .then(() => {
                                                out({sucsess: 'true'})
                                            })
                                    } catch (e) { err(e) }
                                })(obj, args[0], args[1], args[2], args[3])
                                break
                            default:
                                err(`новая функция ${func}`)
                                break
                        }
                    } catch (e) { err(e) }
                })(obj, args[0], args[1], args[2], args[3])
                break
            default:
                err(`новая функция ${func}`)
                break
        }
    })
}
