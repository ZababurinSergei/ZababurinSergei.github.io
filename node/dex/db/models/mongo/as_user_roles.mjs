import mongoose from "mongoose";
import as_user_details from "./as_user_details.js";
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

const as_user_roles = new mongoose.Schema({
  role_id: {
    type: DataTypes.INTEGER,
    required: true,
    unique: true,
  },
  role: {
    type: DataTypes.STRING,
    maxLength: 20,
    required: true,
  }
});

export default as_user_roles;
// export default mongoose.model('as_user_roles', as_user_roles);
