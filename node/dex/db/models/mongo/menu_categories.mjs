import mongoose from "mongoose";
import events from "./events.js";
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

const menu_categories = new mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    unique: false,
    index: false,
    required: false
  },
  name: {
    type: DataTypes.STRING,
    maxLength: 100,
    required: true,
    unique: "name"
  },
  image: {
    type: DataTypes.STRING,
    maxLength: 255,
    required: false
  },
  parent: {
    type: DataTypes.INTEGER,
    required: true,
    default: 0
  },
  user_id: {
    type: DataTypes.INTEGER,
    required: true,
    default: 1
  },
  locale: {
    type: DataTypes.STRING,
    maxLength: 255,
    required: false
  },
  order: {
    type: DataTypes.INTEGER,
    required: true
  }
});

export default menu_categories;
// export default mongoose.model('menu_categories', menu_categories);
