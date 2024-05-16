import mongoose, { Schema } from "mongoose";

const userFineSchema = new Schema({
    fineID: {
        required: true,
        type: String
    },
    userID: {
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
    } ,
    isPaid: {
        type: Boolean,
        default: false
    }
});

const UserFine = mongoose.model('UserFine', userFineSchema);

export default UserFine;
