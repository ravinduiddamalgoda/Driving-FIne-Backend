import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
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
    adminLocation : {
        required: true,
        type: String
    },
});

const Admin =  mongoose.model('Admin' , adminSchema);

export default Admin;