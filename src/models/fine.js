import mongoose, { Schema } from "mongoose";

const fineSchema = new Schema({
    fineID: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    },
    fineType: {
        required: true,
        type: String
    }
});

const Fine = mongoose.model('Fine', fineSchema);

export default Fine;
