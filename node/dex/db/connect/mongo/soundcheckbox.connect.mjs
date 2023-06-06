import connectDB from "../../../config/db/mongo/index.mjs";
import models from '../.././models/mongo/index.mjs';
import modelsSoundCheckbox from '../../models/mongo/index__soundcheckbox.mjs';
export default async (collection) => {
    try {
        let connection = await connectDB(collection);
        if(collection === 'soundcheckbox') {
            for(let name in modelsSoundCheckbox) {
                connection.model(name.toLowerCase(), modelsSoundCheckbox[name]);
            }
        } else {
            for(let name in models) {
               await connection.model(name.toLowerCase(), models[name]);
            }
        }
        return connection;
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
};
