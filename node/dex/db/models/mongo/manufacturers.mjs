import mongoose from "mongoose";
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

const manufacturers = new mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    unique: false,
    index: false,
    required: false
  },
  name: {
    type: DataTypes.STRING,
    maxLength: 255,
    required: true
  },
  description: {
    type: DataTypes.STRING,
    maxLength: 1000,
    required: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    required: true,
    default: 1
  }
});

export default manufacturers;
// export default mongoose.model('manufacturers', manufacturers);
