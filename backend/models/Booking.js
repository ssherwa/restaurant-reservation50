import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    TableNumber: {
        type: [Number],
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    },
    Time: {
        type: String,
        required: true,
    },
    Duration: {
        type: Number,
        required: true,
        default: 2,
    },
    Status: {
        type: Boolean,
        required: true,
        default: false,
    },
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Phone: {
        type: String,
        required: true,
    },
    NumberOfPeople: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("Booking", bookingSchema);
