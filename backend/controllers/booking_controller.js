import Booking from "../models/Booking.js";
import Tables from "../models/Tables.js";

export const createBooking = async (req, res, next) => {
    console.log("inside createBooking");
    try {

        


        const table = await Tables
        .findOne({tableStatus: "true"})
        .sort({tableCapacity: 1})
        .exec();

        // console.log("table", table);
        
        if(table === null) {
            console.log("inside null");
            return res.status(400).json({message: "No table left"});
        }
        
        if(table.tableCapacity >= req.body.NumberOfPeople) {
            console.log("inside first if");
            const booking = await Booking.create({
                TableNumber: table.tableNumber,
                NumberOfPeople: req.body.NumberOfPeople,
                Date: req.body.Date,
                Time: req.body.Time,
                Status: "true",
                Name: req.body.Name,
                Email: req.body.Email,
                Phone: req.body.Phone,
            });
            await booking.save();

            //add the booking to the table
            table.Booking = booking._id;
            table.tableStatus = "false";
            await table.save();
            
            res.status(200).json({message: "Booking created successfully"});
        }
        console.log("inside try");

        if(table.tableCapacity < req.body.NumberOfPeople) {
            console.log("inside second if");
            
            //loop through all the tables, add their capacity and check if the sum is greater than the number of people in the booking
            const tables = await Tables.find({tableStatus: "true"});
            let sum = 0;
            let tableNumbers = [];
            //sort the tables in ascending order of capacity
            tables.sort((a, b) => a.tableCapacity - b.tableCapacity);
            
            for(let i = 0; i < tables.length; i++) {
                sum += tables[i].tableCapacity;
                tableNumbers.push(tables[i].tableNumber);
                if(sum >= req.body.NumberOfPeople) {
                    break;
                }
            }
            if(sum < req.body.NumberOfPeople) {
                console.log("inside third if");
                return res.status(400).json({message: "No table available"});
            }
            console.log("continuing");

            console.log("tableNumbers", tableNumbers);

            const booking = await Booking.create({
                TableNumber: tableNumbers,
                NumberOfPeople: req.body.NumberOfPeople,
                Date: req.body.Date,
                Time: req.body.Time,
                Status: "true",
                Name: req.body.Name,
                Email: req.body.Email,
                Phone: req.body.Phone,

            });
            await booking.save();
            //add the booking to the table
            for(let i = 0; i < tableNumbers.length; i++) {
                const table = await Tables.findOne({tableNumber: tableNumbers[i]});
                table.Booking = booking._id;
                table.tableStatus = "false";
                await table.save();
        }
            res.status(200).json({message: "Booking created successfully"});
        }

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({message: "Something went wrong"});
    }
}


export const getBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        next(error);
    }
}

export const getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.status(200).json(booking);
    } catch (error) {
        next(error);
    }
}

