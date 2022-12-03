import mongoose from "mongoose";
import {nanoid} from "nanoid";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    mailingaddress: {
        type: String,
        default: "",
    },
    billingaddress: {
        type: String,
        default: "",
    },
    dinernumber: {
        type: String,
        required: true,
        default: () => nanoid(6),
        index: {unique: true},
    },
    payment: {
        type: String,
        default: "",
    },
} , {timestamps: true});

export default mongoose.model("User", userSchema);
