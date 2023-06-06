import fs from 'fs';
import { Buffer } from 'node:buffer';
import * as Name from 'w3name';

export default async (storage) => {
    // const filename = '/media/sergey/19a78294-1eac-4c0b-8422-7a6c6ea50c8d/home/zb/conceptnet5/data/assertions/assertions.msgpack'
    // const filename = '/media/sergey/19a78294-1eac-4c0b-8422-7a6c6ea50c8d/home/zb/conceptnet5/data/assoc/reduced.csv'
    // const cid = await storage.ConceptNet.put([new storage.call.File(['hello world22'], 'hello.txt', { type: 'text/plain' })])
    // const cid2 = await storage.Lana.put([new storage.call.File(['hello world'], 'hello.txt', { type: 'text/plain' })])

    //TODO create name
    const name = await Name.create();
    const value = '/ipfs/bafybeif6thzumdr76hhw5es3l7pb4tcgtsut4gi537tsyjn7pl4g2smrv4';
    const revision = await Name.v0(name, value);
    await Name.publish(revision, name.key);

    console.log('====== revision ======', name)
    // const filename =  '/media/sergey/19a78294-1eac-4c0b-8422-7a6c6ea50c8d/home/zb/conceptnet5/data/edges/jmdict/jmdict.msgpack';
    // fs.readFile('/media/sergey/19a78294-1eac-4c0b-8422-7a6c6ea50c8d/home/zb/conceptnet5/data/assertions/assertions.msgpack', 'utf8', (err, data) => {
    //     console.log(data, err);
    // });
    // This line opens the file as a readable stream

    // let readStream = fs.createReadStream(filename);

    // This will wait until we know the readable stream is actually valid before piping
    // readStream.on('open', async () => {
    //     const buf4 = Buffer.from([1, 2, 3]);
    //     const rootCid = await storage.lana.put(buf4);
        // readStream.pipe();
        // const info = await storage.lana.status(rootCid);
        // const res = await storage.lana.get(rootCid);
        // const files = await storage.lana.files();

    // });

    // This catches any errors that happen while creating the readable stream (usually invalid names)
    // readStream.on('error', function(err) {
    //     console.log('=== ERROR ===', err);
    // });

            // fs.readFile(filename, 'utf8', async function(err, data) {
            //     if(err) {
            //
            //         console.log('ERROR', err)
            //     } else {
            // const buf4 = Buffer.from([1, 2, 3]);
            // console.log('buf4', buf4)
            // let rootCid = await storage.ConceptNet.put(buf4);
            // let info = await storage.ConceptNet.status(rootCid);
            // let res = await storage.ConceptNet.get(rootCid);
            // let files = await storage.ConceptNet.files();
            // rootCid = await storage.lana.put(new Buffer,from(data));
            // info = await storage.lana.status(rootCid);
            // res = await storage.lana.get(rootCid);
            // files = await storage.lana.files();
        // }
    // });
};
