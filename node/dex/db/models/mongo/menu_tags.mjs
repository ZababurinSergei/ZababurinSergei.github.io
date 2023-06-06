import mongoose from "mongoose";
import menu_presets_tags_true from "./menu_presets_tags_true.js";
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

const menu_tags = new mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    unique: false,
    index: false,
    required: false
  },
  name: {
    type: DataTypes.STRING,
    maxLength: 50,
    required: true,
    unique: "name"
  },
  user_id: {
    type: DataTypes.INTEGER,
    required: true
  },
  locale: {
    type: DataTypes.STRING,
    maxLength: 255,
    required: false
  },
  class: {
    type: DataTypes.INTEGER,
    required: true,
    default: 1
  }
});

export default menu_tags;
// export default mongoose.model('menu_tags', menu_tags);
