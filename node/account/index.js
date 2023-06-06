let empty = require('is-empty')
let express = require("express")
let cors = require('cors')
let Enqueue = require('express-enqueue')
let mongo  = require( './db.js')
let compression = require('compression')
let formidableMiddleware = require('express-formidable');
const address = require('@waves/ts-lib-crypto')
const { transfer } = require('@waves/waves-transactions')
const {broadcast} =  require('@waves/waves-transactions');
const {issue} =  require('@waves/waves-transactions');
const {invokeScript} =  require('@waves/waves-transactions');
const {data} =  require('@waves/waves-transactions');
const {waitForTx} =  require('@waves/waves-transactions');
const EventEmitter = require('events');
const Stream = new EventEmitter();
let app = express();
app.use(compression())
app.use(cors())
app.use(formidableMiddleware());
const queue = new Enqueue({
  concurrentWorkers: 4,
  maxSize: 200,
  timeout: 30000
});
const nodeUrl = 'https://pool.testnet.wavesnodes.com';
const account = "3N8n4Lc8BMsPPyVHJXTivQWs7ER61bB7wQn"

const accountAliceAddress = "3MsSxnyAwzfi8jsT2ua3Vt8m4BSvYs4YSpw"
const accountBobAddress = "3MvegjWphvbYgEgQmqJiJhYWXnqPNTpieVc"
const accountCooperAddress = "3Mr6qVieFjKZfE8Z2hxLSS1HBZCFMdB4zmy"

const accountSeed = "zone tower six sound oblige horn false blue enroll flash pact all"

const accountAliceSeed = "convince bubble claim case tube domain grief eyebrow decline witness bachelor mansion"
const accountBobSeed = "kitten tooth maze behave purity dance differ stereo faint immune century peace"
const accountCooperSeed = "discover swim emerge demise dwarf inmate utility cycle hospital pistol sugar emotion"

let seed = [accountAliceSeed,accountBobSeed,accountCooperSeed]

app.use(queue.getMiddleware());
let whitelist = ['http://localhost:9876','https://web3-monopoly.web.app','http://localhost:8886','https://zababurinsv.github.io','https://zababurinsv.github.io/monopoly/','http://localhost:8887','http://localhost:8888','http://localhost:6040','https://xart-3e938.firebaseapp.com','https://xart-3e938.web.app','https://universitykids.ru','https://vashi-faili.web.app','https://vashi-faili.web.app',  'https://www.universitykids.ru', 'https://tuning-fork.firebaseapp.com','http://localhost:8888','https://jainagul-tezekbaeva.firebaseapp.com','https://tezekbaeva.firebaseapp.com','http://localhost:6112']

let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.options('/stream', cors(corsOptions))
app.get('/stream', cors(corsOptions), function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  Stream.on("push", function(event, data) {
    res.write("event: " + String(event) + "\n" + "data: " + JSON.stringify(data) + "\n\n");
    res.end()
  });
});

app.get('/', async (req, res) => {
  res.send({account:'1.0.0'})
})

app.get('/auction', async (req, res) => {
  res.send(await mongo.get.auction.self())
})

let verify = null
app.options('/winner', cors(corsOptions))
app.post('/winner', cors(corsOptions), async (req, res) => {
  if(verify === req.fields['auctionId']){

  } else {
    verify = req.fields['auctionId']
    let pay = +req.fields['lotAmount'] * 10000000
    let price = parseInt(req.fields['lotAmount'], 10) * 10000000
    let ts = {
      dApp: account,
      chainId: 84,
      fee: 1400000,
      call:{
        function: "endAuction",
        args: [
          {type:"string", value:  req.fields['auctionId']},
          {type:"string", value: req.fields['winner']},
          {type:"integer", value: parseInt(req.fields['endHeight'],10)},
          {type:"integer", value: price},
          {type:"integer", value: parseInt(req.fields['bid'],10)}]
      },
      payment:[{amount: pay, assetId: null }]
    }

    // дописать catch блок если не удалось сохранить получить с блокчейна и попробовать снова
    mongo.save.auction.winner({
      id: req.fields['winner'],
      object: req.fields['auctionId'],
      winner: ts
    }).catch(e => {
      console.log('error save winner', e)
    })

    let dataOut = {
      fee: 500000,
      data:[{
        key:`${req.fields['auctionId']}_winner`,
        value: `${req.fields['winner']}`}
      ]
    }

    try {
      let txSight  =  data(dataOut,accountSeed)
      let tx =  await broadcast(txSight, nodeUrl)
      res.send(tx)
    } catch (e) {
      console.log('error save winner', e)
      res.json(e)
    }
  }
})

app.options('/winner/:id', cors(corsOptions))
app.get('/winner/:id', cors(corsOptions), async (req, res) => {
  res.send(await mongo.get.auction.winner(req.params.id))
})


app.options('/winner/:id', cors(corsOptions))
app.delete('/winner/:id', cors(corsOptions), async (req, res) => {
  res.send(await mongo.delete.auction.winner(req.params.id))
})

app.options('/nft', cors(corsOptions))
app.post('/nft', cors(corsOptions), async (req, res) => {
  let tokenParamsCustomIndivisible = {
    name: req.fields['id'],
    quantity:1,
    decimals:0,
    fee: 100000 + 400000,
    reisuable: false,
    description:'товар для аукциона',
    chainId: 84
  }

  const signedIssueTx = issue(tokenParamsCustomIndivisible, accountSeed)
  let txObjectSignedTwo = issue(signedIssueTx, seed[0])
  let txObjectSignedThree = issue(txObjectSignedTwo, seed[1])

  try {
    let tx = await broadcast(txObjectSignedThree, nodeUrl)
    res.send(tx)
  }catch (e) {
    res.json(e)
  }
})

app.options('/auction', cors(corsOptions))
app.post('/auction', cors(corsOptions), async (req, res) => {
  req.fields['count'] = JSON.parse(req.fields['count'])
  let item = await mongo.create.auction.item({
    auction:req.fields,
    id: req.fields['auctionId'],
    object:  req.fields['name']
  })

  Stream.emit("push", "message", { msg: JSON.stringify(item) });
  res.send(item)
})

app.options('/winnerPay/:id', cors(corsOptions))
app.get('/winnerPay/:id', cors(corsOptions), async (req, res) => {
  res.send(await mongo.get.auction.winnerObject(req.params.id))
})


app.options('/timer/:id', cors(corsOptions))
app.get('/timer/:id', cors(corsOptions), async (req, res) => {
  let time =  await mongo.get.auction.item(req.params.id)
  if(time === null){
    res.send({time:-2})
  } else {
    let out = time['auction']['endHeight'] - Date.now()
    let outObject = {
      winner: time['auction']['winner'],
      time: out,
      lotAmount: time['auction']['lotAmount'],
      count: time['auction']['count']
    }
    if(out <= 0 ) {
      await mongo.delete.auction.item(req.params.id)
      outObject['time'] = -2
      outObject['auction'] = time['auction']
    } else if (isNaN( time['auction']['endHeight'])){
      await mongo.delete.auction.item(req.params.id)
      outObject['time'] = -2
    }
    res.send(outObject)
  }
})

app.options('/timer/:id', cors(corsOptions))
app.put('/timer/:id', cors(corsOptions), async (req, res) => {
  let obj =  await mongo.get.auction.item(req.params.id)

  if(obj['auction']['winner'] === req.fields['account']) {
    res.send({update:-3})
  } else {
    obj['auction']['count'].push( req.fields['account'] )
    obj['auction']['winner'] = req.fields['account']
    obj['auction']['endHeight'] =  +obj['auction']['endHeight'] + 30000
    obj['auction']['lotAmount'] = +obj['auction']['lotAmount'] + 0.1

    let object =  await mongo.update.auction.item({
      _id: obj['_id'],
      data: {
        auction:obj['auction'],
        id:obj['id'],
        object:obj['object']
      }
    })
    res.json(object)
  }
})

app.options('/checked/:id', cors(corsOptions))
app.post('/checked/:id', cors(corsOptions), async (req, res) => {
  let obj =  await mongo.get.auction.item(req.params.id)

  if(obj['auction']['winner'] === req.fields['account']) {
    res.send({update:-3})
  } else {
    obj['auction']['count'].push( req.fields['account'] )
    obj['auction']['winner'] = req.fields['account']
    obj['auction']['endHeight'] =  +obj['auction']['endHeight'] + 30000
    obj['auction']['lotAmount'] = +obj['auction']['lotAmount'] + 0.1
    res.json(obj)
  }
})

app.options('/timer/:id', cors(corsOptions))
app.delete('/timer/:id', cors(corsOptions), async (req, res) => {
  res.send( await mongo.delete.auction.item(req.params.id))
})

app.use(queue.getErrorMiddleware())
module.exports = app
