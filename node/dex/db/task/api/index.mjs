const replaceId = async (db) => {
    const { Menu_tags, Menu_presets, Menu_categories, Menu_presets_categories, Menu_presets_tags, Menu_presets_tags_n } = db.mongo.models;

    const menu_categories = await Menu_categories.find();
    const menu_presets = await Menu_presets.find();

    // for(let category_id of menu_categories) {
    //    let category = await Menu_presets_categories.find({category_id: category_id.id})
    //    for(let item of category) {
    //        const presetId = await Menu_presets.findOne({id: item.preset_id})
    //        if(presetId !== null) {
    //            let newSchema = new Menu_presets_categories_n({
    //                preset_id: presetId._id.toString(),
    //                category_id: category_id._id.toString()
    //            })
    //            let result = await newSchema.save()
    //            console.log('(((( category_id ))))',result)
    //        }
    //    }
    // }

    // let menu_presets_categories_n = await  Menu_presets_categories_n.find();
    // for(let item of menu_presets_categories_n) {
    //     console.log('menu_presets_categories_n', item)
    //        let newSchema = new Menu_presets_categories({
    //            preset_id: item.preset_id.toString(),
    //            category_id: item.category_id.toString()
    //        })
    //     await newSchema.save()
    // }

    // for(let Preset of menu_presets) {
    //     let tags = await Menu_presets_tags.find({preset_id: Preset.id})
    //     for(let item of tags) {
    //         let tag = await Menu_tags.findOne({ id: item.tag_id })
    //         let newSchema = new Menu_presets_tags_n({
    //             preset_id: Preset._id.toString(),
    //             tag_id: tag._id.toString()
    //         });
    //         let result = await newSchema.save()
            // console.log('11111111111111', result)
            // console.log('22222222222222', tag._id.toString(),  item, Preset._id.toString())
        // }
    // }
    // const menu_presets_tags_n = await Menu_presets_tags_n.find();
    // for(let item of menu_presets_tags_n) {
    //     console.log('ddddddddddddddddddd', item)
    //     let newSchema = new Menu_presets_tags({
    //                     preset_id: item.preset_id.toString(),
    //                     tag_id: item.tag_id.toString()
    //                 });
    //     await newSchema.save()
    // }
}

const type = {
    mysql: async (db) => {
        const {Menu_presets, Menu_tags, Menu_presets_categories, Menu_categories, Menu_presets_tags } = db.mysql.models
        const menu_presets = await Menu_presets.findAll();
        const menu_presets_categories = await Menu_presets_categories.findAll();
        const menu_categories = await Menu_categories.findAll();
        const menu_presets_tags = await Menu_presets_tags.findAll();
        const menu_tags = await Menu_tags.findAll();
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

            console.log({
                menu_presets: preset,
                categories: categories.dataValues.name,
                tags: tags
            })
        }
    },
    mongo: async (db) => {
        const {Menu_presets, Menu_tags, Menu_presets_categories, Menu_categories, Menu_presets_tags } = db.mongo.models
        const menu_presets = await Menu_presets.find();
        const menu_presets_categories = await Menu_presets_categories.find();
        const menu_categories = await Menu_categories.find();
        const menu_presets_tags = await Menu_presets_tags.find();
        const menu_tags = await Menu_tags.find();
        for(let Preset of menu_presets) {
            const preset = Preset
            let tags = []
            const presets_categories = menu_presets_categories.find(item => item.preset_id.toString() === preset._id.toString())
            const categories = menu_categories.find(item => item._id.toString() === presets_categories.category_id.toString())
            const presets_tags = menu_presets_tags.filter(item => preset._id.toString() === item.preset_id.toString());

            for(let item of presets_tags) {
                let tag = menu_tags.find(tag => tag._id.toString() === item.tag_id.toString())
                tags.push(tag.name)
            }

            console.log({
                menu_presets: preset,
                categories: categories.name,
                tags: tags
            })
        }
    }
}

const Get = async (db) => {
    console.log('db')
    type.mongo(db)
    // type.mysql(db)
}

export default {
    '/api/presets': {
        get: Get,
        replaceId: replaceId
    }
}
