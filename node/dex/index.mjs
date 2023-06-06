import app from './server.mjs';
import config from 'config'
import path from "path";
let namespace = path.dirname(process.argv[1]).split('/');
namespace = namespace[namespace.length -1]

const port = (process.env.PORT)
    ? process.env.PORT
    : config.node[namespace].split(':')[1]

if(port) {
    app.listen(port ,() => {
        console.log('pid: ', process.pid)
        console.log('listening on http://localhost:'+ port);
    });
} else {
    console.error('Порт не найден проверьте  config')
}
