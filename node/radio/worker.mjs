import {MessageChannel, Worker, isMainThread, parentPort } from "worker_threads";
import throttle from 'throttle'
import  ffprobeSync from '@dropb/ffprobe';

    parentPort.on('message', (msg) => {
       console.log('~~~~~~~~>>>~~~~~~~~', msg)
    })