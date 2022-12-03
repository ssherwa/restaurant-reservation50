import express from "express"
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user_controller.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js"

const router  = express.Router()

// router.get("/", (req, res)=>{
//     res.send("rthis is auth")
// })

router.get("/register", (req, res)=>{
    res.send("this is register")
})



//update
router.put("/:id", verifyUser, updateUser)

//delete
router.delete("/:id", verifyUser, deleteUser)

//get
router.get("/:id", verifyUser, getUser)

//get all
router.get("/", verifyAdmin, getUsers)


export default router