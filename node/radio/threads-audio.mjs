import { Worker, isMainThread, parentPort } from "worker_threads";
import path from "path";
let __dirname = path.dirname(process.argv[1]);

if (isMainThread) {
  // This code is executed in the main thread and not in the worker.

console.log('~~~~~~~~~~~~~~~~~~~~~~', process['argv'][1])
  // Create the worker.
  const worker = new Worker(process['argv'][1]);
  // Listen for messages from the worker and print them.
  worker.on('message', (msg) => { console.log(msg); });
} else {
    let buffer = []
    let count = 0
    let count_t = 0
    let end = 200
    while(true) {
    buffer.push(count)
    if(count_t === 5) {count_t = 0; parentPort.postMessage(buffer); buffer = [] }
    if(count === end){break}
    count++
    count_t++
    }
  // Send a message to the main thread.
}