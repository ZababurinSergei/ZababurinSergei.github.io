import mongoose from "mongoose";
import menu_tags from "./menu_tags.js";
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

const models_3d = new mongoose.Schema({
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
  model_src: {
    type: DataTypes.STRING,
    maxLength: 255,
    required: true
  },
  image: {
    type: DataTypes.STRING,
    maxLength: 255,
    required: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    required: true
  },
  create_date: {
    type: DataTypes.DATE,
    required: false
  },
  change_date: {
    type: DataTypes.DATE,
    required: false
  }
});

export default models_3d;
// export default mongoose.model('models_3d', models_3d);
