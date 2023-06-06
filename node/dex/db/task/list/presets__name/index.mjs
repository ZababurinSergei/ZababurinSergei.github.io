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


export default async (db) => {
    const {Menu_presets, Menu_tags, Menu_presets_categories, Menu_categories, Menu_presets_tags } = db.mysql.models
    const menu_presets = await Menu_presets.findAll();
    const menu_presets_categories = await Menu_presets_categories.findAll();
    const menu_categories = await Menu_categories.findAll();
    const menu_presets_tags = await Menu_presets_tags.findAll();
    const menu_tags = await Menu_tags.findAll();
    let data = {
        'members': [],
        'instruments': [],
        'Drums & Perc': [],
        'mic & DI': [],
        'monitors': [],
        'backline': [],
        'other': [],
        'orchestras': [],
    };
    for(let Preset of menu_presets) {
        const preset = Preset.dataValues

        let tags = []
        const presets_categories = menu_presets_categories.find(item => item.preset_id === preset.id)
        const categories = menu_categories.find(item => item.id === presets_categories.dataValues.category_id)
        const presets_tags = menu_presets_tags.filter(item => preset.id === item.preset_id);

        for(let item of presets_tags) {
            let tag = menu_tags.find(tag => tag.id === item.dataValues.tag_id)
            tags.push(tag.dataValues.name)
        }
        console.log('presets_categories', presets_categories)
        data[categories.dataValues.name].push({
            menu_presets: preset.name,
            categories: categories.dataValues.name,
            tags: tags
        });
        // console.log({
        //     menu_presets: preset.name,
        //     categories: categories.dataValues.name,
        //     tags: tags
        // });
    }
    console.log('data', data)
    fs.writeFileSync(`${__dirname}/data/presets/data.json`, JSON.stringify(data, null,4));
    console.log('finish')
    // const { Menu_presets } = db.mysql.models
    // const menu_presets = await Menu_presets.findAll();
    // console.log(__dirname)
    // for(let Preset of menu_presets) {
    //     const preset = Preset.dataValues
    //     const json = JSON.parse(preset.JSON)
    //     fs.writeFileSync(`${__dirname}/data/json/${json.name}.json`, JSON.stringify(json, null,4));
        // console.log({
        //     name: json.name,
        //     JSON: json
        // })
    // }
}
