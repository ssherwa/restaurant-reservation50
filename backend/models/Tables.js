import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    tableNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    tableStatus: {
        type: Boolean,
        required: true,
    },
    tableCapacity: {
        type: Number,
        required: true,
    },
    Booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
    }

});

export default mongoose.model("Table", tableSchema);