// const isEmpty = require('is-empty');
const connection = require('./connection');
const mongoose = require('mongoose');
const { Schema } = mongoose;

let mongo = null

const schemas = {
    feed: {
        self: new Schema({ 'feed': Object, 'id': String, 'object': String }),
    },
    bid: {
        item: new Schema({ 'item': Object, 'id': String, 'object': String }),
        items: new Schema({ 'item': Object, 'id': String, 'object': String }),
        self:  new Schema({ 'feed': Object, 'id': String, 'object': String })
    },
    auction: {
        auction: new Schema({ 'auction': Object, 'id': String, 'object': String }),
        winner: new Schema({ 'winner': Object, 'id': String, 'object': String }),
    }
}

const init = async () => {
    if(!mongo) {
        mongo = await connection()
       return true
    } else {
       return true
    }
}

const deleteWinner = async (obj) => {
    try {
        await init()
        mongo.auction.model('winner', schemas.auction.winner).findOneAndRemove({ object: obj['id'] }).exec()
          .then(data => {
              resolve({sucsess: 'true'})
          })
          .catch(e => {
              resolve({ object:'-1', error: e})
          });
    } catch (e) {
        resolve({ object:'-1', error: e})
    }
}

const deleteItem = async (obj) => {
    try {
        await init()
        mongo.auction.model('auction', schemas.auction.auction).findOneAndRemove({ "object": obj['id'] }).exec()
          .then(data => {
              resolve({sucsess: 'true'})
          })
          .catch(e => {
              resolve({ object:'-1', error: e})
          });
    } catch (e) {
        resolve({ object:'-1', error: e})
    }
}

const updateItem = async (obj) => {
    try {
        await init()
        mongo.auction.model('auction', schemas.auction.auction).findOneAndUpdate({_id: obj['_id']}, obj['data']).exec()
          .then(data => {
              resolve(data)
          })
          .catch(e => {
              resolve({ object:'-1', error: e})
          });
    } catch (e) {
        resolve({ object:'-1', error: e})
    }
}

const createItem = async (data) => {
    try {
        await init()
        data['auction']['endHeight'] = Date.now() + parseInt(data['auction']['startTime'],10)
        mongo.auction.model('auction', schemas.auction.auction).create(data).exec()
          .then(news => {
            resolve(news)
          })
          .catch(e => {
            resolve({ object:'-1', error: e})
        });
    } catch (e) {
        resolve({ object:'-1', error: e})
    }
}

const saveWinner = async (data) => {
    try {
        await init()
        mongo.auction.model('winner', schemas.auction.winner).create(data).exec()
            .then(news => {
                resolve(news)
            })
            .catch(e => {
                resolve({ object:'-1', error: e})
            });
    } catch (e) {
        resolve({ object:'-1', error: e})
    }
}


const getAuction = () => {
    return new Promise(async resolve => {
        try {
            await init()
            mongo.auction.model('auction', schemas.auction.auction).find().exec()
                .then(news => {
                    if(news.length === 0){
                        resolve({ object:'-2'} )
                    } else {
                        resolve(news)
                    }
                }).catch(e => {
                    resolve({ object:'-1', error: e})
                });
        } catch (e) {
            resolve({ object:'-1', error: e})
        }
    })
}

const getWinnerObject = (id) => {
    return new Promise(async resolve => {
        try {
            await init();
            mongo.auction.model("winner", schemas.auction.winner).find({ "object": id }).exec()
                .then(bids => {
                    resolve({
                        status: true,
                        message: bids
                    })
                }).catch(e => {
                    resolve({ object:'-1', error: e})
                });
        } catch (e) {
            resolve({ object:'-1', error: e})
        }
    })
}

const getWinner = (id) => {
    return new Promise(async resolve => {
        try {
            await init()
            mongo.auction.model('winner', schemas.auction.winner).find({ "id": id }).exec()
                .then(bids => {
                    resolve({
                        status: true,
                        message: bids
                    })
                }).catch(e => {
                    resolve({ object:'-1', error: e})
                });
        } catch (e) {
            resolve({ object:'-1', error: e})
        }
    })
}

const getItem = (obj) => {
    return new Promise(async resolve => {
        try {
            await init()
            mongo.auction.model('auction', schemas.auction.auction)
              .findOne({ object: obj['id'] })
              .exec()
              .then(bids => {
                  resolve({
                      status: true,
                      message: bids
                  })
              }).catch(e => {
                resolve({ object:'-1', error: e})
            });
        } catch (e) {
            resolve({ object:'-1', error: e})
        }
    })
}

module.exports = {
    save: {
        auction: {
            winner: saveWinner
        }
    },
    create: {
        auction: {
            item: createItem
        }
    },
    delete: {
        auction: {
            item: deleteItem,
            winner: deleteWinner
        }
    },
    update: {
        auction: {
            item: updateItem
        }
    },
    get: {
        auction: {
            item: getItem,
            winner: getWinner,
            winnerObject: getWinnerObject,
            self: getAuction
        },
    }
}