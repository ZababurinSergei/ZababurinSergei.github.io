import mongoose from "mongoose";
import equipment_categories from "./equipment_categories.js";
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
  SMALLINT: DataTypesMongoose.Number,
};

const equipment_types = new mongoose.Schema({
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
  order_index: {
    type: DataTypes.SMALLINT,
    min: -32768,
    max: 65535,
    required: true
  }
})

export default equipment_types;
// export default mongoose.model('equipment_types', equipment_types);
