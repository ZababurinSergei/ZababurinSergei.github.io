import mongoose from "mongoose";
import as_login_attempts from "./as_login_attempts.js";
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

const as_social_logins = new mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    unique: false,
    index: false,
    required: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    required: true
  },
  provider: {
    type: DataTypes.STRING,
    maxLength: 50,
    required: false,
    default: "email"
  },
  provider_id: {
    type: DataTypes.STRING,
    maxLength: 250,
    required: false
  },
  createdAt: {
    type: DataTypes.STRING,
    required: false
  }
});

export default as_social_logins;
// export default mongoose.model('as_social_logins', as_social_logins);
