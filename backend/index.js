import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import tableRoutes from "./routes/tables.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.js";
import bookingRoutes from "./routes/booking.js";
import cors from "cors";


const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
}    


  
// mongoose.connection.on("disconnected", () => {
//     console.log("Disconnected from MongoDB");
// });

// mongoose.connection.on("connected", () => {
//     console.log("MongoDB connected");
// });

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/tables", tableRoutes);
app.use("/bookings", bookingRoutes);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    // return res.status(errorStatus).send(errorMessage);
    // console.log("error", err);
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });

});

app.listen(process.env.PORT, () => {
    // console.log(`Server is running on port ${process.env.PORT}`);
    connect();
});
//1:02:16


export default app;