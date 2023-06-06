import mongoose from "mongoose"
import connection from "./module/connection.js"
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)
mongoose.set('bufferCommands', false)
let conn = null;
export default (view, property, color, substrate, relation)=>{
    return new Promise( async (resolve, reject) => {
        let out = (obj) => {
            resolve(obj)
        }
        let err = (error) => {
            console.log('~~~ err ~~~', error)
            reject(error)
        }
        switch (relation) {
            case 'feed':
                try {
                    if (conn === null) {
                        conn =   await connection('init')
                        conn['feed'].model('feed', new mongoose.Schema({ 'feed': Object, 'id': String, 'object': String }));
                    }else{
                        try {
                            conn['feed'].model('feed', new mongoose.Schema({ 'feed': Object, 'id': String, 'object': String }));
                        }catch (e) {
                
                        }
                    }
                    const request = conn['feed'].model('feed');
                    await request.find().exec().then(news => {
                            if(news.length === 0){
                                let none = `
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
</channel>
</rss>`
                                out(none)
                            }else{
                                out(news)
                            }
                        });
                } catch (e) { err(e) }
                break
            default:
                break
        }
    })
}
