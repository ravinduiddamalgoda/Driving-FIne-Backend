import mongoose, { Schema } from "mongoose";

const userSchema =  new Schema({
    name:{
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    province: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    } ,
    NIC:{
        required: true,
        type: Number,
        unique: true
    },
    drivingLicenceID:{
        required: true,
        type: String 
    },
    url:{
        required: true,
        type: String
    },
    isBlackListed:{
        required: true,
        type: Boolean,
        default: false
    },
    fineSocre:{
        required: true,
        type: Number,
        default: 0
    },
});

const User =  mongoose.model('User' , userSchema);

export default User;