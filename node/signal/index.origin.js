import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
let __dirname = path.dirname(process.argv[1]);
__dirname = __dirname.replace(/\/node_modules\/pm2\/lib/gi, '')
__dirname = __dirname.replace(/\/node_modules\/.bin/gi, '')
__dirname = __dirname.replace(/usr\/lib/ig,"home/system")
const app = express()
app.use(cors());
app.use(express.json())
let privateKey  = fs.readFileSync(`${__dirname}/cert/web3.news/privkey.pem`, 'utf8');
let certificate = fs.readFileSync(`${__dirname}/cert/web3.news/fullchain.pem`, 'utf8');
let credentials = {key: privateKey, cert: certificate};
// import https from 'https'
import http from 'http'
// let httpsServer = https.createServer(credentials, app);
let httpServer = http.createServer(app);
// import {Server} from "socket.io";
// const io = new Server(httpServer,{
//   transports:'websocket',
//   allowEIO3:true
// });
// io.on('connection', (socket) => {
//     console.log('!!!!!!!!!!!!!!!!!! connect')
//   socket.onAny(async  (eventName, type, ...args) => {
//
//   })
// })

let connect = {
  initiator: (element) => ['QmcrQZ6RJdpYuGvZqD5QEHAv6qX4BrQLJLQPQUrTrzdcgm'].some((item) => element.indexOf(item) !== -1),
  dialer: (element) => ['Qma3GsJmB47xYuyahPZPSadh1avvxfyYQwk8R3UnFrQ6aP'].some((item) => element.indexOf(item) !== -1),
  broadcast: {
    initiator: [],
    dialer: []
  },
  message: {
    offer: undefined,
    answer: undefined
  }
};

let whitelist = [
  'https://web3.news',
  'http://localhost:1937',
  'http://localhost:1928',
  'https://gateway.pinata.cloud/ipfs/QmQR9dkv6iPTUisdWeAZTsdw24eF54twXuFgfmgZ2ac1PX',
  'https://gateway.pinata.cloud/ipfs/QmPPdz4tc1papquYZgiJYDsQ974a13bR4wuLXZK4ghjExQ'
]

let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

async function sendEventsToInitiator(message) {
  connect.broadcast.initiator.forEach((client) => {
    client.response.write(`data: ${JSON.stringify({
      pathname: "",
      clientID: "",
      message: message,
      _scriptDir: import.meta.url,
      success: true,
      status:'message'
    })}\n\n`)
  })
}

async function sendEventsToDialer(message) {
  connect.broadcast.dialer.forEach((client) => {
    client.response.write(`data: ${JSON.stringify({
      pathname: "",
      clientID: "",
      message: message,
      _scriptDir: import.meta.url,
      success: true,
      status:'message'
    })}\n\n`)
  })
}

app.get('/favicon.ico', async (req, res) => {
  res.sendFile('/favicon.ico', { root: __dirname });
})

app.options('/events/:id', cors(corsOptions))
app.get('/events/:id', eventsHandler);
function eventsHandler(request, response, next) {
 let origin = request.get('origin')
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': (whitelist.some(item => item === origin )) ? origin : "xxx"
  };
  response.writeHead(200, headers);
  const clientId = request.params.id;
  let itetiator = connect.initiator(request.params.id)
  let dialer = connect.dialer(request.params.id)
  let newClient = {}
  console.log(itetiator, '< --- > ', dialer)
  if(itetiator) {
    if(connect.broadcast.initiator.length === 0) {
      newClient = {
        id: clientId,
        response
      };
      connect.broadcast.initiator.push(newClient)
      const data = `data: ${JSON.stringify({
        pathname: request.pathname,
        clientID: "",
        message: "",
        _scriptDir: import.meta.url,
        success: true,
        status:'set initiator without message'
      })}\n\n`;
      response.write(data);
    } else {
      console.log('--- iterator', connect)
    }
  } else {
    console.log('dialer --- 2 ', connect.broadcast.dialer.length === 0)
    if(dialer) {
      if(connect.broadcast.dialer.length === 0) {
        if(connect.message.offer) {
          console.log('send offer message')
          const data = `data: ${JSON.stringify({
            pathname: request.pathname,
            clientID: "",
            message: connect.message.offer,
            _scriptDir: import.meta.url,
            success: true,
            status:'message'
          })}\n\n`;
          response.write(data);
        } else {
          try {
            console.log('dialer without offer message')
            newClient = {
              id: clientId,
              response
            };
            connect.broadcast.dialer.push(newClient)
            const data = `data: ${JSON.stringify({
              pathname: request.originalUrl,
              clientID: "",
              message: "",
              _scriptDir: import.meta.url,
              success: true,
              status:'await offer message'
            })}\n\n`;
            response.write(data);
            //console.log('incoming open dialer', connect.broadcast)
          }catch (e) {
            console.log('error', e)
          }
        }
      } else {
        console.log('dialer more one', connect)
        if(connect.message.offer) {
          const data = `data: ${JSON.stringify({
            pathname: request.pathname,
            clientID: "",
            message: connect.message.offer,
            _scriptDir: import.meta.url,
            success: true,
            status:'message'
          })}\n\n`;
          response.write(data);
        } else {
          const data = `data: ${JSON.stringify({
            pathname: request.pathname,
            clientID: "",
            message: "",
            _scriptDir: import.meta.url,
            success: true,
            status:'events: await initiator'
          })}\n\n`;
          response.write(data);
        }
      }
    }
  }

  request.on('close', () => {
    //console.log(`${clientId} Connection closed`);
    connect.broadcast.initiator = connect.broadcast.initiator.filter((client) => {
      if(client.id !== clientId) {
        return true
      } else {
        connect.message.initiator = undefined
        return false
      }
    });
    connect.broadcast.dialer = connect.broadcast.dialer.filter((client) => {
     if(client.id !== clientId) {
       return true
     } else {
       connect.message.dialer = undefined
       return false
     }
    });
    //console.log('after close', connect.broadcast)
  });
}

app.options('/*', cors(corsOptions))
app.get('/*',function(req, res) {
  res.send({status:"true"})
})

app.options('/initiator', cors(corsOptions))
app.post('/initiator',async function(req, res) {
  console.log('get offer message dialer is',connect.broadcast.dialer.length === 1)
  connect.message.offer = req.body
  if(connect.broadcast.dialer.length === 1) {
    await sendEventsToDialer(req.body)
    res.send({
      pathname: "",
      clientID: "",
      message: "",
      _scriptDir: import.meta.url,
      success: true,
      status:'await answer message'
    })
  } else {
    res.send({
      pathname: "",
      clientID: "",
      message: "",
      _scriptDir: import.meta.url,
      success: true,
      status:'post: save offer message'
    })
  }
})

app.options('/dialer', cors(corsOptions))
app.post('/dialer',async function(req, res) {
  console.log('get answer message initiator is',  connect.broadcast.initiator.length === 1 )
  connect.message.answer = req.body
  if(connect.broadcast.initiator.length === 1) {
   await sendEventsToInitiator(req.body)
    res.send({
      pathname: "",
      clientID: "",
      message: "",
      _scriptDir: import.meta.url,
      success: true,
      status:'post: send answer message'
    })
  } else {
    res.send({
      pathname: "",
      clientID: "",
      message: "",
      _scriptDir: import.meta.url,
      success: true,
      status:'post: save answer message'
    })
  }
})

app.options('/*', cors(corsOptions))
app.post('/*',async function(req, res) {
  res.send(JSON.stringify({status:"path not found"}))
})

let port = process.env.PORT || 8888
// httpsServer.listen(port ,() =>{
//   console.log('pid: ', process.pid)
//   console.log('listening on http://localhost:'+ port);
// });
httpServer.listen(4434 ,() =>{
  console.log('pid: ', process.pid)
  console.log('listening on http://localhost:'+ 4434);
});
// if(!process.env.PORT) {
//
// }

