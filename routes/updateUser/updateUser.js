const express = require("express");
const {User} = require("../../models/usermodel");

const updateUserRouter = express.Router();

// CREATNG API FOR UPDATING THE USER DATA

updateUserRouter.put("/api/user/:id" , async (req , res)=>{
    try {
        let user = await User.findByIdAndUpdate(req.params.id , req.body, {
            new:true
        });
        res.json(user);

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
},

);
module.exports = updateUserRouter;