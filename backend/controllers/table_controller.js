import { createError } from "../utils/error.js";
import Tables from "../models/Tables.js";


export const createTable = async (req, res, next) => {
    const newTable = new Tables(req.body);
    try {
        const savedTable = await newTable.save();
        res.status(200).json(savedTable);
    } catch (error) {
        next(error);
    }
}

export const updateTable = async (req, res, next) => {
    try{
        const updatedTable = await Tables.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedTable);

    } catch (error) {
        next(error);
    }
}

export const deleteTable = async (req, res, next) => {
    try{
        await Tables.findByIdAndDelete(req.params.id);
        res.status(200).json("Table has been deleted");

    } catch (error) {
        next(error);
    }
}

export const getTable = async (req, res, next) => {
    try{
        const table = await Tables.findById(req.params.id);
        res.status(200).json(table);

    } catch (error) {
       next(error);
    }
}

export const getTables = async (req, res, next) => {
    try{
        const tables = await Tables.find();
        // res.end(JSON.stringify(tables));
        res.status(200).json(tables);
    
    }catch (error) {
        next(error);
    }
}