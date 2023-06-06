const auction ="mongodb+srv://Sergey:fds744502fds@xart-qd8fc.mongodb.net/auction?retryWrites=true&w=majority"
const feed ="mongodb+srv://Sergey:fds744502fds@xart-qd8fc.mongodb.net/school?retryWrites=true&w=majority"
const bid ="mongodb+srv://Sergey:fds744502fds@xart-qd8fc.mongodb.net/bid?retryWrites=true&w=majority"
const mongo = require('mongoose');

module.exports = (obj)=>{
  return new Promise(async function (resolve, reject) {
    let db = {}
    db.feed =  await mongo.createConnection( feed, {
      authSource: "admin",
      useNewUrlParser: true,
      maxPoolSize: 4
    });
    db.bid = await mongo.createConnection( bid, {
      authSource: "admin",
      useNewUrlParser: true,
      maxPoolSize: 4
    });
    db.auction =  await mongo.createConnection( auction, {
      authSource: "admin",
      useNewUrlParser: true,
      maxPoolSize: 4
    });
    resolve(db)
  })
}