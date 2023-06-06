import mongoose from "mongoose";
import menu_categories from "./menu_categories.js";
const DataTypesMongoose = mongoose.Schema.Types;

/*
String
Number:
Boolean:
DocumentArray:
Subdocument:
Buffer:
Array:
Date:
ObjectId:
Mixed:
Decimal:
Decimal128:
Map:
Oid:
Object:
Bool:
ObjectID:

   maxLength: 50,
    required: true,
     id: {
    type: DataTypes.INTEGER,
    unique: true,
    index: true,
    required: true,
    ref: 'id'
  },
 */

const DataTypes = {
  INTEGER: DataTypesMongoose.Number,
  STRING: DataTypesMongoose.String,
  TEXT: DataTypesMongoose.String,
  DATE: DataTypesMongoose.Date,
  DATEONLY: DataTypesMongoose.Date,
};


const menu_presets = new mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    unique: false,
    index: false,
    required: false
  },
  name: {
    type: DataTypes.STRING,
    maxLength: 100,
    required: false
  },
  JSON: {
    type: DataTypes.TEXT,
    required: true
  },
  image: {
    type: DataTypes.STRING,
    maxLength: 255,
    required: false,
    default: "''"
  },
  user_id: {
    type: DataTypes.INTEGER,
    required: true
  },
  order: {
    type: DataTypes.INTEGER,
    required: true,
    default: 0
  }
});

export default menu_presets;
// export default mongoose.model('menu_presets', menu_presets);
