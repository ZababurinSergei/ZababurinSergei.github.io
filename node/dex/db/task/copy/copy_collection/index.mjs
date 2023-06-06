export default async (db) => {
    const model = {
        soundcheckbox: {},
        soundbox: {}
    };
    model.soundcheckbox.menu_presets = await db.soundcheckbox.models.menu_presets;
    model.soundbox.menu_presets = await db.soundbox.models.menu_presets;

    // model.soundcheckbox.menu_presets_tags = await db.soundcheckbox.models.menu_presets_tags;
    // model.soundbox.menu_presets_tags = await db.soundbox.models.menu_presets_tags;
    // model.soundcheckbox.menu_presets_categories = await  db.soundcheckbox.models.menu_presets_categories_true;
    // model.soundbox.menu_presets_categories = await  db.soundbox.models.menu_presets_categories;
    const menu_presets_soundcheckbox = await  model.soundcheckbox.menu_presets.find();
    const menu_presets_soundbox = await model.soundbox.menu_presets.find();

    for(let item of menu_presets_soundbox) {
        console.log('@@@@@@@@@@@@', item)
    }
    console.log('@@@@@@@@@@@@@@@@@@@@@@', menu_presets_soundcheckbox)
    // console.log('@@@@@@@@@@@@@@', {
    //     menu_presets_soundcheckbox: menu_presets_soundcheckbox,
    //     menu_presets_soundbox: menu_presets_soundbox
    // });
};
