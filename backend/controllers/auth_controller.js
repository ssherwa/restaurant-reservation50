import User from '../models/Users.js'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createError } from '../utils/error.js'


export const register = async(req, res, next)=>{
    try {
        
        console.log("inside register");
        console.log("req.body", req.body);

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            mailingaddress:req.body.mailingaddress,
            billingaddress:req.body.billingaddress,
            dinernumber:req.body.dinernumber,
            payment:req.body.payment,
            
        })
        await newUser.save()
        // res.status(200).send("User has been created.")
        const token = jwt.sign(
            {id: newUser._id, isAdmin: newUser._isAdmin }, 
            process.env.JWT
        )
        const {password, isAdmin, mailingaddress, billingaddress, dinernumber, payment, ...otherDetails} = newUser._doc
console.log("register otherDetails", otherDetails);
        res
        .cookie("access_token", token, {httpOnly: true,})
        .status(200)
        .send(otherDetails);
    } catch (error) {
        next(error)
    }
};

export const login = async(req, res, next)=>{
    try {
        console.log("login called");
        const user = await User.findOne({
            username:req.body.username
        })

        if(!user){
            return next(createError(404, "User not found"))
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
       
        if(!isPasswordCorrect){
            return next(createError(400, "Wrong password or user name"))
        }

        const token = jwt.sign(
            {id: user._id, isAdmin: user._isAdmin }, 
            process.env.JWT
        )

        const {password, isAdmin, mailingaddress, billingaddress, dinernumber, payment, ...otherDetails} = user._doc
console.log("logged in wtf is this");
        res
        .cookie("access_token", token, {httpOnly: true,})
        .status(200)
        .json({...otherDetails})
    } catch (error) {
        next(error)
    }
};