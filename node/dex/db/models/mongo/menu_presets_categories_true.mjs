import mongoose from "mongoose";
const DataTypesMongoose = mongoose.Schema.Types;

const DataTypes = {
  ID: DataTypesMongoose.ObjectId,
  INTEGER: DataTypesMongoose.Number,
  STRING: DataTypesMongoose.String,
  TEXT: DataTypesMongoose.String,
  DATE: DataTypesMongoose.Date,
  DATEONLY: DataTypesMongoose.Date,
};

const menu_presets_categories = new mongoose.Schema({
  preset_id: {
    type: DataTypes.ID,
    required: true,
  },
  category_id: {
    type: DataTypes.ID,
    required: true,
  }
});

export default menu_presets_categories;
// export default mongoose.model('menu_presets_categories_true', menu_presets_categories);
