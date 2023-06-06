import mongoose from "mongoose";
import as_users from "./as_users.js";
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
const equipment = new mongoose.Schema({
    id: {
        type: DataTypesMongoose.Number,
        unique: false,
        index: false,
        required: false
    },
    name: {
        type: DataTypesMongoose.String,
        required: true,
        maxLength: 255
    },
    description: {
        type: DataTypesMongoose.String,
        required: false,
        maxLength: 3000
    },
    image: {
        type: DataTypesMongoose.String,
        required: false,
        maxLength: 255
    },
    length: {
        type: DataTypesMongoose.Number,
        required: false,
    },
    width: {
        type: DataTypesMongoose.Number,
        required: false,
    },
    height: {
        type: DataTypesMongoose.Number,
        allowNull: true
    },
    weight: {
        type: DataTypesMongoose.Number,
        required: false,
    },
    volume: {
        type: DataTypesMongoose.Number,
        required: false,
    },
    power: {
        type: DataTypesMongoose.Number,
        required: false,
    },
    user_id: {
        type: DataTypesMongoose.Number,
        required: true,
        default: 1
    },
    equip_type: {
        type: DataTypesMongoose.Number,
        required: false,
    },
    equip_category: {
        type: DataTypesMongoose.Number,
        required: true,
        default: 1
    },
    manufacturer: {
        type: DataTypesMongoose.Number,
        required: true,
        default: 1
    }
});

export default equipment;
// export default mongoose.model('equipment', equipment);
