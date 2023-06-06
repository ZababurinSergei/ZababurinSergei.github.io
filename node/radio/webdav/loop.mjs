import yandex from "./webdav.mjs";
import throttle from 'throttle'
import  ffprobeSync from '@dropb/ffprobe';

export default async () => {

    let mainStreem = {}
    mainStreem = await yandex(false,'a','5',  {}, '/storage/audio/streem')
    
    mainStreem.on('error', function(err){
    
        console.error(err);
    });
    
    mainStreem
        .on('open', function(){
            console.log("open");
        })
        .on('close', function(){
            console.log("close");
        })
        .on('finish',async () => {
            console.log('All writes are now complete.');
            mainStreem.destroy();
        });

        return(mainStreem)
}