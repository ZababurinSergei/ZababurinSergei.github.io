import mongoose from "mongoose";
import as_comments from "./as_comments.js";
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
 */

const DataTypes = {
  INTEGER: DataTypesMongoose.Number,
  STRING: DataTypesMongoose.String,
  TEXT: DataTypesMongoose.String,
  DATE: DataTypesMongoose.Date,
  DATEONLY: DataTypesMongoose.Date,
};

const as_login_attempts = new mongoose.Schema({
  id_login_attempts: {
    type: DataTypes.INTEGER,
    required: true,
  },
  ip_addr: {
    type: DataTypes.STRING,
    maxLength: 20,
    required: true,
  },
  attempt_number: {
    type: DataTypes.INTEGER,
    required: true,
    default: 1
  },
  date: {
    type: DataTypes.DATEONLY,
    required: true,
  }
});

export default as_login_attempts;
// export default mongoose.model('as_login_attempts', as_login_attempts);
