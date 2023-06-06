import { start } from 'libp2p-webrtc-star-signalling-server'



const port = (process.env.PORT)
  ? process.env.PORT
  : 7695

const server = await start({
  port: port,
  host: '0.0.0.0',
  metrics: false
})
