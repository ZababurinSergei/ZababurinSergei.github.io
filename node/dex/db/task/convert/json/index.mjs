import fs from "fs";
import path from 'path';
import { dirname } from 'path';
const __dirname = path.join(path.dirname(process.argv[1]));

// const content = 'Some content!';

// try {
//     fs.writeFileSync('/Users/joe/test.txt', content);
    // file written successfully
// } catch (err) {
//     console.error(err);
// }

// Curtain
export default async (db) => {
    const { Menu_presets } = db.mysql.models

    const menu_presets = await Menu_presets.findAll();
    console.log(__dirname)
    for(let Preset of menu_presets) {
        const preset = Preset.dataValues
        const json = JSON.parse(preset.JSON)
        fs.writeFileSync(`${__dirname}/data/json/${json.name}.json`, JSON.stringify(json, null,4));
        // console.log({
        //     name: json.name,
        //     JSON: json
        // })
    }
    console.log('=== end ===');
};
