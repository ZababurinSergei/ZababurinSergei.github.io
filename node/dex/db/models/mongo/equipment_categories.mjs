import mongoose from "mongoose";
import equipment from "./equipment.js";
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
  TINYINT: DataTypesMongoose.Number,
};

const equipment_categories = new mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    unique: false,
    index: false,
    required: false
  },
  name: {
    type: DataTypes.STRING,
    maxLength: 100,
    required: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    required: true
  },
  parent_id: {
    type: DataTypes.INTEGER,
    required: true,
    default: 0
  },
  order_index: {
    type: DataTypes.TINYINT,
    min: -128,
    max: 255,
    required: true
  }
});

export default equipment_categories;
// export default mongoose.model('equipment_categories', equipment_categories);
