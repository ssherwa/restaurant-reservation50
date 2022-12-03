import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createBooking, getBooking, getBookings } from "../controllers/booking_controller.js";

const router = express.Router();

//create a booking
router.post("/", createBooking);

//get a booking
router.get("/:id", getBooking);

//get all bookings
router.get("/", getBookings);

export default router;

