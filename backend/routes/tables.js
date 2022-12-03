import express from "express";
import { createTable, updateTable, deleteTable, getTable, getTables } from "../controllers/table_controller.js";
import Tables from "../models/Tables.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create a table
router.post("/", verifyAdmin, createTable);

//update a table
router.put("/:id", verifyAdmin, updateTable);

//delete a table
router.delete("/:id", verifyAdmin, deleteTable);

//get a table
router.get("/:id", getTable);

//get all tables
router.get("/", getTables);

export default router;