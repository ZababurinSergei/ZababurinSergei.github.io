import { Web3Storage, getFilesFromPath, File } from 'web3.storage';

const lana = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAzYTg0OTg2MTA3RTdlNWZmODEwM2I1YjdDRmM3NTE2NzEzYWQ3NzAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjQwNTQwMTU3NzcsIm5hbWUiOiJaYWJhYnVyaW4ifQ.6bEDmFvlw-qFxqzCjACyMapPsO5WIFxf1ALhS5yPYcQ"
const ConceptNet = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGYwNUFiNGM2N0QyM0UyNTU0RjkyQ0I2QjU0MzlmMUI1Q0E4NDUxNjciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjQwNjE3NDE5MzIsIm5hbWUiOiJDb25jZXB0TmV0In0.OhwnhUOLVX59S9YWMZKXaq7xRGuGTuKdOGKeeLTxcdw";

const storage = {
    Lana: new Web3Storage({ token: lana }),
    ConceptNet: new Web3Storage({ token: ConceptNet }),
    call: {
        getFilesFromPath: getFilesFromPath,
        File: File
    }
};

export { storage };
export default storage;
